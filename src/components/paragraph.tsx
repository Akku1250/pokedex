import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva('pb-1 font-inter', {
  variants: {
    variant: {
      'body-1': 'text-sm',
      'body-2': 'text-xs',
      'body-3': 'text-xxs',
      caption: 'text-caption',
    },
  },
  defaultVariants: { variant: 'body-1' },
});

type TParagraphRef = React.ElementRef<'p'>;

export interface IParagraphProps
  extends React.ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<TParagraphRef, IParagraphProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(
          paragraphVariants({
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
Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
