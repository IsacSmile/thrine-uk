import React, { useEffect, useRef } from 'react';

interface ParticleTextProps {
  text?: string;
  color?: string;
  particleSize?: number;
  gap?: number;
  delayMs?: number;
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
  text = "We're Thrine",
  color = '#B84A32',
  particleSize = 1.8,
  gap = 3.2,
  delayMs = 1500,
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
    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    let hasTriggeredDelay = false;
    const mouse = { x: -1000, y: -1000, radius: 120 };
    let lastScrollY = window.scrollY;

    const init = (scatter = false) => {
      const container = canvas.parentElement;
      const width = container ? container.clientWidth : 800;
      const height = Math.min(width * 0.3, 220);

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

      // Font matching the main logo: Extra Bold/Black rounded sans-serif
      const fontSize = Math.min(width / (text.length * 0.65), 140);
      offCtx.font = `900 ${fontSize}px "Plus Jakarta Sans", "Outfit", "Inter", sans-serif`;
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
            const initX = scatter ? x + (Math.random() - 0.5) * 250 : x;
            const initY = scatter ? y + (Math.random() - 0.5) * 250 : y;

            particles.push({
              x: initX,
              y: initY,
              originX: x,
              originY: y,
              vx: scatter ? (Math.random() - 0.5) * 10 : 0,
              vy: scatter ? (Math.random() - 0.5) * 10 : 0,
              size: particleSize,
              color: color
            });
          }
        }
      }
    };

    init(false);

    // Trigger particle scatter burst
    const triggerScatterBurst = (intensity = 12) => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * intensity + 3;
        p.vx += Math.cos(angle) * speed;
        p.vy += Math.sin(angle) * speed;
      }
    };

    // 1. Trigger after exact delayMs (1.5 seconds) when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredDelay) {
            hasTriggeredDelay = true;
            delayTimer = setTimeout(() => {
              triggerScatterBurst(16);
            }, delayMs);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(canvas);

    // 2. Trigger particle wave perturbation on active scrolling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (Math.abs(deltaY) > 2) {
        const factor = Math.min(Math.abs(deltaY) * 0.12, 5);
        for (let i = 0; i < particles.length; i++) {
          if (Math.random() > 0.65) {
            particles[i].vy += (Math.random() - 0.5) * factor;
            particles[i].vx += (Math.random() - 0.5) * (factor * 0.5);
          }
        }
      }
    };

    // 3. Trigger on mouse move / hover / click
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      triggerScatterBurst(8);
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = () => {
      triggerScatterBurst(16);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => init(false));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion force
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const pushX = -Math.cos(angle) * force * 12;
          const pushY = -Math.sin(angle) * force * 12;
          p.vx += pushX;
          p.vy += pushY;
        }

        // Spring force pulling back to origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * 0.08;
        p.vy += homeDy * 0.08;

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
      if (delayTimer) clearTimeout(delayTimer);
      observer.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => init(false));
    };
  }, [text, color, particleSize, gap, delayMs]);

  return (
    <div className={`w-full flex justify-center items-center overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="cursor-pointer max-w-full" />
    </div>
  );
};
