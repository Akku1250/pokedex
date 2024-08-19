import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      primary: 'text-2xl',
      'subtitle-1': 'text-sm',
      'subtitle-2': 'text-xs',
      'subtitle-3': 'text-xxs',
    },
  },
  defaultVariants: { variant: 'primary' },
});

type THeadingRef = React.ElementRef<'h1'>;

export interface IHeadingProps
  extends React.ComponentPropsWithoutRef<'h1'>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<THeadingRef, IHeadingProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h1';
    return (
      <Comp
        className={cn(
          headingVariants({
            variant,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
