export interface AppItem {
  id: string;
  title: string;
  description: string;
  url: string;
  iconName: string; // Dynamic Lucide icon key
  bgColor: string;  // Background Tailwind class for the app icon square (e.g., 'bg-indigo-500')
  textColor: string; // Text color pattern (e.g., 'text-white')
  category: string;  // e.g. 'productivity', 'design', 'social', 'entertainment', 'utilities'
  isCustom?: boolean; // Flag to identify items added by the user
}

export type CategoryType = 'all' | 'productivity' | 'design' | 'social' | 'entertainment' | 'utilities';
