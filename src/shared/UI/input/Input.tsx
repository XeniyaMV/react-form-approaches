import getFullClassName from '../../helpers/getFullClassName';
import { InputProps } from '../../types';

const Input = (props: InputProps): JSX.Element => {
  const fullClassName = getFullClassName('input', props.additionalClassName);

  return (
    <div className={fullClassName}>
      <label className="input__label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        className="input__input"
        name={props.name}
        type={props.type}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder || props.label || ''}
      />
    </div>
  );
};

export default Input;
