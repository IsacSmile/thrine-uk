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
      <div className="bg-studio-surface px-2.5 sm:px-4 py-2 border-b border-studio-border flex items-center justify-between gap-2 sm:gap-4">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-editorial-muted/30 inline-block"></span>
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-sm mx-auto bg-paper border border-studio-border rounded-sm px-2 sm:px-3 py-0.5 sm:py-1 flex items-center gap-1.5 text-[10px] sm:text-xs text-editorial-muted font-mono overflow-hidden">
          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-editorial-muted shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        {/* Status / Badge */}
        <div className="shrink-0 flex items-center gap-1.5">
          {badge && (
            <span className="text-[9px] sm:text-[10px] font-mono uppercase bg-paper text-editorial-muted px-1.5 sm:px-2 py-0.5 rounded-sm border border-studio-border max-w-[80px] sm:max-w-none truncate">
              {badge}
            </span>
          )}
          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-editorial-muted shrink-0" />
        </div>
      </div>

      {/* Screen Viewport */}
      <div className="relative bg-paper overflow-x-auto overflow-y-auto max-h-[380px] sm:max-h-[490px]">
        {children}
      </div>
    </div>
  );
};
