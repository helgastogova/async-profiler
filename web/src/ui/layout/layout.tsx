import React from 'react';
import cx from 'classnames';

import { Text } from '@ui';

import s from './layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

type LayoutTitleProps = LayoutProps & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const LayoutTitle = ({
  className,
  children,
  as = 'h1',
}: LayoutTitleProps) => {
  return (
    <Text as={as} variant="heading/medium" className={cx(s.title, className)}>
      {children}
    </Text>
  );
};

export const Layout = ({ children, className }: LayoutProps) => {
  return <div className={cx(s.layout, className)}>{children}</div>;
};
