export interface Props {
  additionalClassName?: string;
  children?: JSX.Element;
}

export interface LogoProps extends Props {
  link: string;
  title?: string;
  iconUrl?: string;
  linkTarget?: React.HTMLAttributeAnchorTarget;
}

export interface BurgerMenuProps extends Props {
  handleClick?: () => void;
}

export interface InputProps extends Props {
  id: string;
  name?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface AutocompleteSelectProps extends Props {
  id: string;
  options: string[];
  name?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
}

export interface UploadImageProps extends Props {
  id: string;
  name?: string;
  label?: string;
  defaultSrc?: string;
}

export interface RadioSelectProps extends Props {
  options: string[];
  name?: string;
  label?: string;
}

export interface ErrorMessageProps extends Props {
  errorMessage: string;
}
