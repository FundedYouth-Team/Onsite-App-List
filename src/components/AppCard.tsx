import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { AppItem } from '../types';
import { Trash2, ExternalLink } from 'lucide-react';

interface AppCardProps {
  key?: string;
  app: AppItem;
  isDeleteMode: boolean;
  onDelete: (id: string) => void;
  theme?: 'light' | 'dark';
}

export function AppCard({ app, isDeleteMode, onDelete, theme = 'light' }: AppCardProps) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative flex flex-col focus-within:outline-none h-full"
    >
      {/* Delete Overlay Button */}
      {isDeleteMode && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(app.id);
          }}
          className="absolute top-3 right-3 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 transition-transform active:scale-95"
          title={`Remove ${app.title}`}
        >
          <Trash2 size={13} strokeWidth={2.5} />
        </button>
      )}

      {/* Main Trigger Bento Card Anchor */}
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex flex-col justify-between p-6 sm:p-7 border rounded-[32px] shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 h-full min-h-[200px] sm:min-h-[220px] group/card relative overflow-hidden ${
          isDark
            ? 'bg-[#1e293b]/90 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200/90 text-slate-800'
        }`}
      >
        {/* Subtle decorative grid backing or highlight line in the corner of bento card */}
        <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] border-l border-b pointer-events-none ${
          isDark ? 'bg-slate-950/20 border-slate-800/40' : 'bg-slate-50/50 border-slate-100/40'
        }`} />

        {/* Bento Top: Iconic Action Element */}
        <div className="flex justify-between items-start w-full">
          <motion.div
            className={`w-14 h-14 ${app.textColor} flex items-center justify-center relative overflow-hidden`}
          >
            {/* Soft Overlay Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/12 to-transparent opacity-40 mix-blend-overlay pointer-events-none" />
            {app.icon ? (
              <img
                src={app.icon}
                alt={`${app.title} icon`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <LucideIcon
                name={app.iconName ?? 'Link'}
                className="w-7 h-7 drop-shadow-sm group-hover/card:scale-110 transition-transform duration-300"
              />
            )}
          </motion.div>

          {/* Clean minimalist external indicator */}
          <div className={`p-2 rounded-xl border opacity-60 group-hover/card:opacity-100 transition-all ${
            isDark
              ? 'bg-slate-950 border-slate-800 group-hover/card:bg-slate-800/50'
              : 'bg-slate-50 border-slate-100 group-hover/card:bg-slate-100/50'
          }`}>
            <ExternalLink size={12} className={isDark ? 'text-slate-400 group-hover/card:text-slate-200' : 'text-slate-400 group-hover/card:text-slate-800'} />
          </div>
        </div>

        {/* Bento Bottom: Header & Description information details */}
        <div className="mt-6 text-left">
          <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1">
            {app.category}
          </p>
          <h3 className={`text-lg font-bold transition-colors line-clamp-1 tracking-tight ${
            isDark ? 'text-slate-100 group-hover/card:text-indigo-400' : 'text-slate-800 group-hover/card:text-indigo-600'
          }`}>
            {app.title}
          </h3>
          <p className={`text-xs leading-normal line-clamp-2 mt-1 font-sans ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {app.description}
          </p>
        </div>
      </a>
    </motion.div>
  );
}
