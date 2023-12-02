import { Props } from '../../../shared/types';

export interface NavItem {
  title: string;
  link: string;
}

export interface MenuProps extends Props {
  menuItems: NavItem[];
}
