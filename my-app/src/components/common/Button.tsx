/** @jsxImportSource @emotion/react */

import { forwardRef } from "react";
import { Theme } from "../../styles/theme/index";
import type { AllHTMLAttributes } from "react";

export interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  text?: string;
  type?: "button" | "reset" | "submit";
  iconPosition?: string;
}

export interface RoleButtonProps extends ButtonProps {
  iconSize?: "sm" | "xs" | string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, icon, className, id = "", iconPosition, style, ...button }, ref) => {
    const isIconAboveText = iconPosition === "right";
    const handleIconClick = (e: any) => {
      e.stopPropagation();
      const buttonElement = e.currentTarget.closest("button");
      if (buttonElement) {
        buttonElement.click();
      }
    };
    return (
      <button
        id={id}
        type="button"
        className={`button ${className}`}
        {...button}
        ref={ref}
        style={{ fontSize: Theme.size.md, ...style }}
      >
        {!isIconAboveText && icon && (
          <i className={icon} onClick={handleIconClick} />
        )}
        {text && text}
        {isIconAboveText && icon && (
          <i className={icon} onClick={handleIconClick} />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
