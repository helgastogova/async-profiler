import cx from 'classnames';

import s from './divider.module.css';

type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  return <hr className={cx(s.root, className)} />;
};

export default Divider;
