import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      requiredColor: string;
      backgroundColor: string;
      inputColor: string;
    };
    fontFamilies: {
      textFontFamily: string;
      subtitlesFontFamily: string;
    };
    fontSizes: {
      mainFontSize: string;
      biggerFontSize: string;
      requiredFontSize: string;
    };
    sizes: {
      mobileWidth: string;
    };
  }
}
