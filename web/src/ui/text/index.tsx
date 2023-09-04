import * as React from 'react';
import cx from 'classnames';

import s from './text.module.css';

type TextVariant =
  | 'body/base'
  | 'heading/large'
  | 'heading/medium'
  | 'heading/small'
  | 'heading/xsmall';

type Color = 'black' | 'grey';

interface TextProps<T extends React.ElementType = 'span'> {
  as?: T;
  children: React.ReactNode;
  variant: TextVariant;
  color?: Color;
  className?: string;
  fontWidth?: 'regular' | 'bold' | 'semibold';
}

const Text = <T extends React.ElementType = 'span'>({
  as: Component,
  children,
  className,
  variant,
  fontWidth = 'regular',
  color,
  ...rest
}: TextProps<T>) => {
  const DefaultComponent = Component || 'span';

  return (
    <DefaultComponent
      className={cx(
        className,
        s.text,
        s[variant],
        color && s[`color-${color}`],
        s[`font-width-${fontWidth}`],
      )}
      {...rest}
    >
      {children}
    </DefaultComponent>
  );
};

export default Text;
