import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`border-t border-b border-studio-border divide-y divide-studio-border ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const itemNumber = String(index + 1).padStart(2, '0');

        return (
          <div key={item.id} className="py-6">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-terracotta">{itemNumber}</span>
                <span className="text-lg sm:text-xl font-bold text-editorial group-hover:text-terracotta transition-colors">
                  {item.title}
                </span>
              </div>
              <div className="w-8 h-8 rounded-sm bg-studio-surface border border-studio-border flex items-center justify-center text-editorial shrink-0 ml-4">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-terracotta" />
                ) : (
                  <Plus className="w-4 h-4 text-editorial-muted group-hover:text-editorial" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="mt-4 pl-8 sm:pl-10 pr-4 text-sm sm:text-base text-editorial-muted leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
