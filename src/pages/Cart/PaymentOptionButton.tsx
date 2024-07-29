import { IconElement } from '../../@types/components';
import { cn } from '../../utils';

interface PaymentOptionButtonProps {
  label: string;
  icon: IconElement;
  selected: boolean;
  onClick: () => void;
}

export default function PaymentOptionButton({
  label,
  icon: Icon,
  selected,
  onClick,
}: PaymentOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex gap-3 py-4 pl-4 pr-2 uppercase items-center text-button-m rounded-md bg-base-400 hover:bg-base-500',
        selected && 'bg-purple-light border border-purple'
      )}
    >
      <Icon size={16} className="text-purple" />
      {label}
    </button>
  );
}
