export interface NavbarItems {
  id: number;
  item: string;
  hasDropdown?: boolean;
  subNavItems?: NavbarItems[];
}
