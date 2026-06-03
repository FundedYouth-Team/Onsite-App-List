export interface AppItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;     // Path to a PNG icon in /public/apps (e.g. '/apps/fundedyouth.png')
  iconName?: string; // Fallback Lucide icon key (used when `icon` is not set)
  bgColor: string;  // Background Tailwind class for the app icon square (e.g., 'bg-indigo-500')
  textColor: string; // Text color pattern (e.g., 'text-white')
  category: string;  // e.g. 'internal', 'coding', 'maker', 'automation'
  isCustom?: boolean; // Flag to identify items added by the user
}

export type CategoryType = 'all' | 'internal' | 'coding' | 'maker' | 'automation';
