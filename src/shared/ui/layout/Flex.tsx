import type { ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around';
  gap?: number | string;
  gapX?: number | string;
  gapY?: number | string;
  as?: ElementType;
  className?: string;
}

const alignAttribute = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifyAttribute = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

export default function Flex({
  children,
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  gap,
  gapX,
  gapY,
  as: Tag = 'div',
  className,
}: FlexProps) {
  const directionClass = direction === 'row' ? 'flex-row' : 'flex-col';
  const alignClass = alignAttribute[align];
  const justifyClass = justifyAttribute[justify];

  const gapClass = gap !== undefined ? `gap-${gap}` : '';
  const gapXClass = gapX !== undefined ? `gap-x-${gapX}` : '';
  const gapYClass = gapY !== undefined ? `gap-y-${gapY}` : '';

  const flexClassName =
    `flex ${directionClass} ${alignClass} ${justifyClass} ${gapClass} ${gapXClass} ${gapYClass}`.trim();
  return (
    <Tag className={twMerge(clsx(flexClassName, className))}>{children}</Tag>
  );
}
