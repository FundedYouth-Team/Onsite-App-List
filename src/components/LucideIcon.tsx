import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  // Safe lookup: Default to a generic Link or Sparkles icon if name doesn't match
  const IconComponent = (Icons as any)[name] || Icons.Link;
  return <IconComponent className={className} size={size} />;
}
