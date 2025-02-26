export interface NavbarItems {
  id: number;
  item: string;
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

export interface ServiceCarouselProps {
  name: string;
  description: string;
}
