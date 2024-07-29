import { forwardRef } from 'react';
import { cn } from '../utils';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClassName?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, containerClassName, className, ...props }, ref) => {
    return (
      <div className={cn('relative', containerClassName)}>
        <input
          ref={ref}
          {...props}
          className={cn(
            'p-3 bg-base-400 placeholder:text-base-600 rounded w-full disabled:opacity-75',
            error && 'border border-red-500',
            className
          )}
        />
        {error && (
          <p className="text-xs text-red-500 mt-px whitespace-nowrap">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
