import React, { FormEvent, ReactChildren } from "react"

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: Function;
  children: ReactChildren;
}

export default function Checkbox({
  id,
  checked,
  children,
  onChange }: CheckboxProps) {
  const changeHandler = (e: FormEvent<HTMLInputElement>) => onChange(e);

  return (<div>
      <input id={id}
             type="checkbox"
             checked={checked}
             onChange={changeHandler}/>
      <label htmlFor={id}>{children}</label>
    </div>)
}