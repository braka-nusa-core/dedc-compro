export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
