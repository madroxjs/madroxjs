import { ReactElement } from "react";

export type PageComponentType = React.FC & {
    (): ReactElement;
    pathName: string;
}

export type DataVizItemType = {
    title: string;
    image?: string;
    description?: string[];
    family?: string[];
    function?: string[];
    shape?: string[];
    input?: {
      href: string[];
      svg: string[];
    };
    examples?: {
      href: string;
      source: string;
    }[];
  };
  