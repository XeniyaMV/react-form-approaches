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
