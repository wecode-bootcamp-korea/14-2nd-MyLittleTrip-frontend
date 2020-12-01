import { css } from 'styled-components';

export const theme = {
  lightBlue: '#73b5f3',
  blue: '#53abf2',
  deepBlue: '#2d97ed',
  navy: '#216aad',
  lightGray: '#e0e2e4',
  gray: '#b4bcc3',
  darkGray: '#495056b3',
  lightBlack: '#353b40',
  black: '#222222',
  transparentWhite : "rgba(255,255,255,0.8)",
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexSpaceBetweenCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexColumnSpaceBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
