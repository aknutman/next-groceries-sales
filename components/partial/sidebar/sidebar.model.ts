import React from "react";

type HeroIconsType = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }
>;

export interface Item {
  Icon: HeroIconsType;
  Name: string;
  Value: string;
  Description: string;
  UrlSlug: string[];
}

export interface MenuItem extends Item {
  Child?: Item[];
}

export interface Footer {
  Name: string;
  ImageUrl: string;
}

export interface SidebarModel {
  Header: {
    Title: string;
    Description: string;
  };
  MenuItem: MenuItem[];
  Footer: Footer;
}
