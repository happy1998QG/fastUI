import React, { memo } from 'react';
import './styles/index.less';

export interface ButtonProps {
  type?: 'primary' | 'default';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props;
  return (
    <button
      type="button"
      className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(button);
