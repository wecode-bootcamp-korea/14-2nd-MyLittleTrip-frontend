import { css } from "styled-components";

export const flexSet = ({
  justifyContent = null,
  alignItems = null,
  flexDirection = null,
}) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;



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
  littletransparentWhite : 'rgba(255,255,255,0.9)',
  border01: "1px solid rgba(0, 0,  0,  0.1)",
  flexSet,
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
