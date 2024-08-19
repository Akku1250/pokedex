import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from './button';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearIcon, onClear, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && <div className="absolute inset-x-3 inset-y-2 h-4 w-4 text-primary">{icon}</div>}
        {clearIcon && props.value && (
          <Button
            size={'icon'}
            variant={'outline'}
            onClick={onClear}
            className="absolute right-4 top-[0.6rem] h-5 w-5 text-primary"
          >
            {clearIcon}
          </Button>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            { 'pl-12': icon },
            { 'pr-12': clearIcon },
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
