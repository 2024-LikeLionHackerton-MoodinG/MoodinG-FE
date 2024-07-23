import { createGlobalStyle } from "styled-components";

export const GlobalFontDNF = createGlobalStyle`
    @font-face {
    font-family: 'DNFBitBitv2';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf') format('opentype');
  }
`;

export const GlobalFontDalmoori = createGlobalStyle`
  @font-face {
    font-family: 'dalmoori';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/dalmoori.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
