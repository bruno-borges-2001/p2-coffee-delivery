import { Minus, Plus } from 'phosphor-react';
import { cn } from '../utils';

interface CounterProps {
  count: number;
  onPlusClick: () => void;
  onMinusClick: () => void;
  className?: string;
}

export default function Counter({
  count,
  onPlusClick,
  onMinusClick,
  className,
}: CounterProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-1 place-items-center p-2 text-purple bg-base-400 rounded-md w-[4.5rem]',
        className
      )}
    >
      <button type="button" disabled={count === 1} onClick={onMinusClick}>
        <Minus weight="bold" size={14} />
      </button>
      <div className="grid place-items-center h-5 w-5 text-base-900 tm">
        {count}
      </div>
      <button type="button" disabled={count >= 20} onClick={onPlusClick}>
        <Plus weight="bold" size={14} />
      </button>
    </div>
  );
}
