import "styled-components";

declare module "styled-components" {
  export interface ThemeStructure {
    colors: {
      mainColor: string;
    };
    fontFamilies: {
      mainFontFamily: string;
    };
    fontSizes: {
      mainFontSize: string;
      biggerFontSize: string;
    };
    sizes: {
      mobileWidth: string;
    };
  }
}
