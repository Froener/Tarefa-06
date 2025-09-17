import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;
  border: none;
  &:focus-visible {
    outline: 3px solid #a82cf0;
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const sizes = {
  sm: css`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
};

const variants = {
  primary: css`
    background: linear-gradient(to right, #2563eb, #9333ea);
    color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    &:hover {
      background: linear-gradient(to right, #1d4ed8, #7e22ce);
      transform: scale(1.02);
    }
  `,
  secondary: css`
    background: #fff;
    border: 2px solid #e5e7eb;
    color: #374151;
    &:hover {
      border-color: #3b82f6;
      color: #3b82f6;
    }
    [data-theme="dark"] & {
      background: #1f2937;
      border-color: #4b5563;
      color: #e5e7eb;
      &:hover {
        border-color: #60a5fa;
        color: #60a5fa;
      }
    }
  `,
  ghost: css`
    background: transparent;
    color: #4b5563;
    &:hover {
      background: #f3f4f6;
    }
    [data-theme="dark"] & {
      color: #9ca3af;
      &:hover {
        background: #1f2937;
        color: #f9fafb;
      }
    }
  `,
};

export const Button = styled.button`
  ${baseStyles};
  ${({ size }) => sizes[size || "md"]};
  ${({ variant }) => variants[variant || "primary"]};
`;

export default Button;
