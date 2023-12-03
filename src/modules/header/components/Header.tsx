import Menu from '../../../components/navigation/Menu';
import Logo from '../../../shared/UI/logo/Logo';
import { useState } from 'react';
import { Props } from '../../../shared/types';
import getFullClassName from '../../../shared/helpers/getFullClassName';
import RoutePaths from '../../../shared/constants/routePaths';
import BurgerMenu from '../../../shared/UI/burgerMenu/BurgerMenu';

const Header = ({ additionalClassName }: Props): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const fullClassName = getFullClassName('header', additionalClassName);
  const navClassName = menuIsOpen ? 'header__nav header__nav_open' : 'header__nav header__nav';

  const navLinks = [
    {
      title: 'Uncontrolled Form',
      link: RoutePaths.UNCONTROLLED_FORM,
    },
    {
      title: 'React Hook Form',
      link: RoutePaths.REACT_HOOK_FORM,
    },
  ];

  const handleBurgerClick = (): void => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={fullClassName}>
      <div className="container header__wrapper">
        <Logo additionalClassName="header__logo" title="Form Hub" link="/" />
        <Menu additionalClassName={navClassName} menuItems={navLinks} />
        <BurgerMenu additionalClassName="header__burger" handleClick={handleBurgerClick} />
      </div>
    </header>
  );
};

export default Header;
