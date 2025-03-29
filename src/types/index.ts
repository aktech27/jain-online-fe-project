import React from 'react';

export interface NavbarItems {
  id: number;
  item: string;
  itemId: string;
  hasDropdown?: boolean;
  subNavItems?: NavbarItems[];
}

export interface BookNowFormItems {
  destination: string;
  personCount: number;
  startDate: string;
  endDate: string;
  description: string;
}

export type BookNowFormKeys = keyof BookNowFormItems;

export type BookNowFormErrors = Omit<BookNowFormItems, 'personCount'> & { personCount: string };
export interface SuccessPopUpPropTypes {
  closePopUp: () => void;
}

export interface PackageCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}

export interface ServiceCardItems {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ServiceCarouselProps {
  items: ServiceCardItems[];
}

export interface SectionHeadPropTypes {
  title: string;
  subtitle: string;
}

export type ModalType = 'LOGIN' | 'REGISTER' | null;

export interface ModalContextStateTypes {
  isModalOpen: boolean;
  modalType: ModalType;
  handleClose: () => void;
  handleOpen: (type: ModalType) => void;
}

export interface AuthContextState {
  isLoggedIn: boolean;
  lastLogin: null | Date;
  user: null | object;
}

export enum AuthContextTypes {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}
export interface AuthContextAction {
  type: AuthContextTypes;
  payload?: null | object;
}

export interface IAuthContext {
  authState: AuthContextState;
  dispatch: React.Dispatch<AuthContextAction> | null;
}

export interface RegisterFormItems {
  name: string;
  dob: string;
  email: string;
  contact: string;
  password: string;
}

export type RegisterFormErrors = RegisterFormItems;

export interface LoginFormItems {
  email: string;
  password: string;
}

export type LoginFormErrors = LoginFormItems;
