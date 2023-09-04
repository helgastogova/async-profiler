import React, { FC, HTMLAttributes } from 'react';
import cx from 'classnames';

import s from './table.module.css';

type TableProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

type TableCellProps = {
  className?: string;
  align?: 'left' | 'center' | 'right';
} & HTMLAttributes<HTMLDivElement>;

type TableRowProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const TableRow: FC<TableRowProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div role="row" className={cx(s.row, className)} {...rest}>
      {children}
    </div>
  );
};

export const TableCell: FC<TableCellProps> = ({
  className,
  children,
  align,
  ...rest
}) => {
  return (
    <div
      role="cell"
      className={cx(s.cell, s[`align-${align}`], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Table: FC<TableProps> = ({ children, className, ...rest }) => {
  return (
    <div role="table" className={cx(s.table, className)} {...rest}>
      {children}
    </div>
  );
};
