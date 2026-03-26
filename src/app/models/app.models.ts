export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface PricingItem {
  text: string;
}

export interface IntegrationFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
