import React, { useEffect, useRef } from 'react';

interface ParticleTextProps {
  text?: string;
  color?: string;
  particleSize?: number;
  gap?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const ParticleText: React.FC<ParticleTextProps> = ({
  text = 'THRINE',
  color = '#B84A32',
  particleSize = 1.8,
  gap = 3.5,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 100 };

    const init = () => {
      const container = canvas.parentElement;
      const width = container ? container.clientWidth : 800;
      const height = Math.min(width * 0.32, 220);

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Create offscreen canvas for pixel sampling
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      // Font sizing
      const fontSize = Math.min(width * 0.18, 150);
      offCtx.font = `900 ${fontSize}px "Inter", "Plus Jakarta Sans", sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#ffffff';
      offCtx.fillText(text, width / 2, height / 2);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const pixels = imgData.data;

      particles = [];
      const step = Math.max(2, Math.floor(gap));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = pixels[index + 3];
          if (alpha > 128) {
            particles.push({
              x: x + (Math.random() - 0.5) * 30,
              y: y + (Math.random() - 0.5) * 30,
              originX: x,
              originY: y,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: particleSize,
              color: color
            });
          }
        }
      }
    };

    init();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', init);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Calculate distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const pushX = -Math.cos(angle) * force * 10;
          const pushY = -Math.sin(angle) * force * 10;
          p.vx += pushX;
          p.vy += pushY;
        }

        // Spring force towards origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * 0.07;
        p.vy += homeDy * 0.07;

        // Friction / Damping
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', init);
    };
  }, [text, color, particleSize, gap]);

  return (
    <div className={`w-full flex justify-center items-center overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="cursor-pointer max-w-full" />
    </div>
  );
};
