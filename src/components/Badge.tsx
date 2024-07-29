import { IconElement } from '../@types/components';
import { cn } from '../utils';

interface BadgeProps {
  icon: IconElement;
  color: string;
}

export function Badge({ icon: Icon, color }: BadgeProps) {
  return (
    <div className={cn('text-base-100 p-2 rounded-full', color)}>
      <Icon size={16} weight="fill" />
    </div>
  );
}
