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
