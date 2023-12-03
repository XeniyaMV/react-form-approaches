import { forwardRef } from 'react';
import getFullClassName from '../../helpers/getFullClassName';
import { InputProps } from '../../types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const fullClassName = getFullClassName('input', props.additionalClassName);

  return (
    <div className={fullClassName}>
      <label className="input__label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        ref={ref}
        className="input__input"
        name={props.name}
        type={props.type}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder || props.label || ''}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
