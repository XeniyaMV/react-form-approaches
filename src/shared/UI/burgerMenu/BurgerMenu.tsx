import { BurgerMenuProps } from '../../types';
import getFullClassName from '../../helpers/getFullClassName';
import { useState } from 'react';

const BurgerMenu = ({ additionalClassName, handleClick }: BurgerMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const fullClassName = getFullClassName('burger', additionalClassName);

  const handleBurgerClick = (): void => {
    setIsOpen(!isOpen);
    if (handleClick) handleClick();
  };

  return (
    <div className={isOpen ? `${fullClassName} burger_open` : fullClassName} onClick={handleBurgerClick}>
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
    </div>
  );
};

export default BurgerMenu;
