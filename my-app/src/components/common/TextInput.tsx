/** @jsxImportSource @emotion/react */

import { memo } from "react";
import * as style from "./styles/TextInput.style";

export interface ITextInputProps {
  /**
   * input의 type
   */
  type?: "number" | "password";
  /**
   * React state
   */
  value?: any;

  /**
   * React setState
   */
  onChange?: any;

  /**
   * Placeholder
   */
  placeholder?: string;

  /**
   * 정렬 위치 : 왼쪽 / 가운데
   */
  position?: "left" | "center" | "right";

  /**
   * 상태 : "good" : "bad"
   */
  status?: "good" | "bad" | string;

  /**
   * 최대길이
   */
  maxLength?: number;

  /**
   * 자동완성 기능 ON / OFF
   */
  autoComplete?: boolean;

  /**
   * className
   */
  className?: string;

  /**
   * data-id
   */
  dataId?: number | string;

  /**
   * onKeyUp
   */
  onKeyUp?: any;

  /**
   * onKeyDown
   */
  onKeyDown?: (elem: any) => any;

  /**
   * dom : useRef
   */
  dom?: React.MutableRefObject<any>;

  /**
   * 필수값 기능 ON / OFF
   */
  required?: boolean;

  /**
   * 오토포커싱 기능 ON / OFF
   */
  autoFocus?: boolean;

  /**
   * onClick
   */
  onClick?: () => void;
  onKeyPress?: () => void;

  /**
   * 포커스 해제 시, 실행할 함수
   */
  onBlur?: any;

  /**
   * tabindex 값, 디폴트 0
   */
  tabIndex?: number;

  /**
   * dataOt
   */
  dataOt?: string;

  defaultValue?: string;

  divClassName?: string;

  id?: string;

  pattern?: string;

  max?: number;

  min?: number;
  isNoshowMsg?: boolean;
  readOnly?: boolean;
}

/**
 * @author taulmax
 * @date 2021.10.05
 * @description Text Input 컴포넌트
 */
export const TextInput = memo(
  ({
    type,
    value,
    id,
    onChange,
    placeholder,
    position = "left",
    status,
    maxLength,
    autoComplete = false,
    className,
    dataId,
    onKeyUp,
    onKeyDown,
    dom,
    required = false,
    autoFocus = false,
    onClick,
    onBlur,
    tabIndex = 0,
    dataOt,
    defaultValue,
    pattern,
    readOnly = false,
  }: ITextInputProps) => {
    return (
      <input
        css={style.TextInputCon}
        id={id}
        type={type || "text"}
        ref={dom}
        onClick={onClick}
        className={`${
          position === "center"
            ? "t-center"
            : position === "right"
            ? "t-right"
            : ""
        }
                ${status ? (status === "good" ? "good" : "bad") : ""} ${
          className || ""
        }`}
        data-id={dataId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete ? "on" : "off"}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        required={required}
        autoFocus={autoFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        data-ot={dataOt}
        defaultValue={defaultValue}
        pattern={pattern}
        readOnly={readOnly}
      />
    );
  }
);

TextInput.displayName = "TextInput";
