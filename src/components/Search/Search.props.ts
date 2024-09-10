import { InputHTMLAttributes } from "react";

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
  }