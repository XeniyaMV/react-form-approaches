import { useRef, useState } from 'react';
import getFullClassName from '../../helpers/getFullClassName';
import { AutocompleteSelectProps } from '../../types';

const UncontrolledAutocompleteSelect = (props: AutocompleteSelectProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fullClassName = getFullClassName('autocomplete-select', props.additionalClassName);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(props.options);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleInputChange = (): void => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      setFilteredOptions(props.options.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase())));
    }
    if (inputValue === '') {
      setFilteredOptions(props.options);
    }
  };

  const handleOptionClick = (value: string): void => {
    if (inputRef.current) inputRef.current.value = value;
    setIsOptionsOpen(false);
  };

  const handleInputFocus = (): void => {
    setIsOptionsOpen(true);
  };

  const handleInputBlur = (): void => {
    setIsOptionsOpen(false);
  };

  return (
    <div className={fullClassName} onBlur={handleInputBlur}>
      <div className="autocomplete-select__input">
        <label className="autocomplete-select__label" htmlFor={props.id}>
          {props.label}:
        </label>
        <input
          id={props.id}
          ref={inputRef}
          className="autocomplete-select__textfield"
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
          value={props.value}
          placeholder={props.placeholder || props.label || ''}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </div>
      <div className={`autocomplete-select__options${isOptionsOpen ? ' autocomplete-select__options_open' : ''}`}>
        <ul className="list">
          {filteredOptions.length !== 0
            ? filteredOptions.map((item) => (
                <li
                  key={item}
                  className="list__item autocomplete-select__option"
                  onMouseDown={(): void => handleOptionClick(item)}
                >
                  {item}
                </li>
              ))
            : 'Not Found'}
        </ul>
      </div>
    </div>
  );
};

export default UncontrolledAutocompleteSelect;
