import React from 'react';
import { Globe, Lock } from 'lucide-react';

interface BrowserFrameProps {
  url?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url = 'https://client-platform.com',
  badge,
  children,
  className = '',
}) => {
  return (
    <div className={`bg-studio-surface border border-studio-border rounded-sm overflow-hidden shadow-none ${className}`}>
      {/* Top Browser Bar */}
      <div className="bg-studio-surface px-4 py-2.5 border-b border-studio-border flex items-center justify-between gap-4">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-sm mx-auto bg-paper border border-studio-border rounded-sm px-3 py-1 flex items-center gap-2 text-xs text-editorial-muted font-mono overflow-hidden">
          <Lock className="w-3 h-3 text-editorial-muted shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        {/* Status / Badge */}
        <div className="shrink-0 flex items-center gap-2">
          {badge && (
            <span className="text-[10px] font-mono uppercase bg-paper text-editorial-muted px-2 py-0.5 rounded-sm border border-studio-border">
              {badge}
            </span>
          )}
          <Globe className="w-3.5 h-3.5 text-editorial-muted" />
        </div>
      </div>

      {/* Screen Viewport */}
      <div className="relative bg-paper overflow-x-auto overflow-y-auto max-h-[490px]">
        {children}
      </div>
    </div>
  );
};
