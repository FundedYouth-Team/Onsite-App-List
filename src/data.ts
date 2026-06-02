import { AppItem } from './types';

export const DEFAULT_APPS: AppItem[] = [
  {
    id: 'notion',
    title: 'Notion',
    description: 'Connected workspace for wiki, docs & project tasks.',
    url: 'https://www.notion.so',
    iconName: 'BookOpen',
    bgColor: 'bg-[#1a1a1a]',
    textColor: 'text-white',
    category: 'productivity'
  },
  {
    id: 'figma',
    title: 'Figma',
    description: 'Collaborative interface design tool for teams.',
    url: 'https://www.figma.com',
    iconName: 'Layout',
    bgColor: 'bg-gradient-to-tr from-amber-500 via-pink-500 to-violet-500',
    textColor: 'text-white',
    category: 'design'
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Developer platform for hosting and versioning code.',
    url: 'https://github.com',
    iconName: 'Github',
    bgColor: 'bg-zinc-900',
    textColor: 'text-white',
    category: 'utilities'
  },
  {
    id: 'spotify',
    title: 'Spotify',
    description: 'Digital music service giving access to millions of songs.',
    url: 'https://open.spotify.com',
    iconName: 'Music',
    bgColor: 'bg-[#1ed760]',
    textColor: 'text-neutral-900',
    category: 'entertainment'
  },
  {
    id: 'google',
    title: 'Google Search',
    description: 'Find worldwide info, webpages, images & videos.',
    url: 'https://www.google.com',
    iconName: 'Search',
    bgColor: 'bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500',
    textColor: 'text-white',
    category: 'utilities'
  },
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'Share and watch videos, streams & tutorials.',
    url: 'https://www.youtube.com',
    iconName: 'Video',
    bgColor: 'bg-[#ff0000]',
    textColor: 'text-white',
    category: 'entertainment'
  },
  {
    id: 'slack',
    title: 'Slack',
    description: 'Workspace chat & internal business communication.',
    url: 'https://slack.com',
    iconName: 'MessageSquare',
    bgColor: 'bg-[#4a154b]',
    textColor: 'text-white',
    category: 'social'
  },
  {
    id: 'gmail',
    title: 'Gmail',
    description: 'Email service developed by Google.',
    url: 'https://mail.google.com',
    iconName: 'Mail',
    bgColor: 'bg-gradient-to-br from-red-500 to-rose-600',
    textColor: 'text-white',
    category: 'social'
  },
  {
    id: 'canva',
    title: 'Canva',
    description: 'Free graphic design platform for presentations & social graphics.',
    url: 'https://www.canva.com',
    iconName: 'Palette',
    bgColor: 'bg-gradient-to-r from-teal-400 to-indigo-500',
    textColor: 'text-white',
    category: 'design'
  },
  {
    id: 'wikipedia',
    title: 'Wikipedia',
    description: 'Free online encyclopedia built collaboratively.',
    url: 'https://www.wikipedia.org',
    iconName: 'Globe',
    bgColor: 'bg-sky-100',
    textColor: 'text-[#1a1a1a]',
    category: 'utilities'
  },
  {
    id: 'linear',
    title: 'Linear',
    description: 'High-performance issue tracker and team roadmaps.',
    url: 'https://linear.app',
    iconName: 'Layers',
    bgColor: 'bg-[#5e6ad2]',
    textColor: 'text-white',
    category: 'productivity'
  },
  {
    id: 'netflix',
    title: 'Netflix',
    description: 'Subscribed films, television shows, and documentaries.',
    url: 'https://www.netflix.com',
    iconName: 'Tv',
    bgColor: 'bg-neutral-950 border border-neutral-800',
    textColor: 'text-[#e50914]',
    category: 'entertainment'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Spaces', icon: 'Sparkles' },
  { id: 'productivity', name: 'Work', icon: 'Briefcase' },
  { id: 'design', name: 'Creativity', icon: 'Palette' },
  { id: 'social', name: 'Connect', icon: 'MessageSquare' },
  { id: 'entertainment', name: 'Play', icon: 'Tv' },
  { id: 'utilities', name: 'Tools', icon: 'AppWindow' }
];

export const AVAILABLE_BACKGROUNDS = [
  { id: 'bento', name: 'Bento Slate', style: 'bg-slate-50', darkStyle: 'bg-slate-950' },
  { id: 'minimal-light', name: 'Studio White', style: 'bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200', darkStyle: 'bg-[#030712]' },
  { id: 'slate-blue', name: 'Glacier Blue', style: 'bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50', darkStyle: 'bg-[#0f172a]' },
  { id: 'dusk', name: 'Orchid Dusk', style: 'bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50', darkStyle: 'bg-[#180f24]' }
];

export const ICON_OPTIONS = [
  'BookOpen', 'Layout', 'Github', 'Music', 'Search', 'Video',
  'MessageSquare', 'Mail', 'Palette', 'Globe', 'Layers', 'Tv',
  'Code', 'Bookmark', 'Link', 'Compass', 'TrendingUp', 'Terminal'
];

export const COLOR_OPTIONS = [
  { name: 'Onyx Black', bg: 'bg-neutral-900', text: 'text-white' },
  { name: 'Royal Blue', bg: 'bg-blue-600', text: 'text-white' },
  { name: 'Sleek Teal', bg: 'bg-teal-600', text: 'text-white' },
  { name: 'Sunset Orange', bg: 'bg-amber-600', text: 'text-white' },
  { name: 'Plum Rose', bg: 'bg-pink-600', text: 'text-white' },
  { name: 'Nordic Slate', bg: 'bg-slate-700', text: 'text-white' },
  { name: 'Indigo Dream', bg: 'bg-indigo-600', text: 'text-white' },
  { name: 'Vibrant Lime', bg: 'bg-lime-500', text: 'text-black' }
];
