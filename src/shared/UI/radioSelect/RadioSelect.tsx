import { forwardRef } from 'react';
import getFullClassName from '../../helpers/getFullClassName';
import { RadioSelectProps } from '../../types';
import Input from '../input/Input';

const RadioSelect = forwardRef<HTMLInputElement, RadioSelectProps>((props, ref): JSX.Element => {
  const fullClassName = getFullClassName('radio-select', props.additionalClassName);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (ref && typeof ref !== 'function') {
      ref.current = event.target;
    }
  };

  return (
    <div className={fullClassName}>
      <div className="radio-select__label">{props.label ? `${props.label}: ` : ''}</div>
      {props.options.map((item) => (
        <Input
          key={item}
          id={item}
          additionalClassName="radio-select__option"
          type="radio"
          name={props.name}
          defaultValue={item}
          label={item}
          onChange={handleRadioChange}
        />
      ))}
    </div>
  );
});

export default RadioSelect;
