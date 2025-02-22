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
