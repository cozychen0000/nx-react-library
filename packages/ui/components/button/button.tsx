import React, { ButtonHTMLAttributes } from 'react';
// packages/shared-ui/Button.tsx
interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}


export function Button(props: ButtonBaseProps) {
  return <button className="btn" onClick={() => props.onClick()}>{props.children}</button>;
}
export default Button;