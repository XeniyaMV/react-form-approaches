import getFullClassName from '../../helpers/getFullClassName';
import { RadioSelectProps } from '../../types';
import Input from '../input/Input';

const RadioSelect = (props: RadioSelectProps): JSX.Element => {
  const fullClassName = getFullClassName('radio-select', props.additionalClassName);

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
          value={item}
          label={item}
        />
      ))}
    </div>
  );
};

export default RadioSelect;
