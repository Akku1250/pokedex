import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva('', {
  variants: {
    variant: {
      'body-1': 'text-sm',
      'body-2': 'text-xs',
      'body-3': 'text-[10px]',
      caption: 'text-[8px]',
    },
    textColor: {
      primary: 'text-foreground',
      medium: 'text-medium',
    },
  },
  defaultVariants: { variant: 'body-1', textColor: 'primary' },
});

type TParagraphRef = React.ElementRef<'p'>;

export interface IParagraphProps
  extends React.ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<TParagraphRef, IParagraphProps>(
  ({ className, variant, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(
          paragraphVariants({
            variant,
            textColor,
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
