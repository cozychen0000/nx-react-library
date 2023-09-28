import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
}

export interface ButtonProps extends ButtonBaseProps {}
export interface IconButtonProps extends ButtonBaseProps {}
