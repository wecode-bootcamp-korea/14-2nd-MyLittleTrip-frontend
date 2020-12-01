import styled from "styled-components";
import {theme} from "../../styles/theme";

export const CarouselTitle = styled.h2`
  width: 1060px;
  height: ${({size}) => size || "18px"};
  margin-top: 35px;
  margin-bottom: 15px;
  font-size: ${({size}) => size || "18px"};
  font-weight: ${({bold}) => bold || "normal"};
  color: ${({theme}) => theme.lightBlack};
`;

export const ContentContainer = styled.section`
  position: relative;
  width: 1060px;
  margin: ${({marginVertical}) => marginVertical || "0"} auto;
`;

export const ArrowConatiner = styled.div`
  img {
    position: absolute;
    top: ${({top}) => top || "70px"};
    width: 20px;
    cursor: pointer;
  }

  .prevButton {
    left: -30px;
  }

  .nextButton {
    right: -30px;
  }
`;

export const ArrowImage = styled.img.attrs(({type}) => ({
  src: type === "prev" ? "/images/prevarrow.png" : "/images/nextarrow.png",
  alt: type,
}))`
    display: ${({type, currentPage, maxPage}) => (type === "prev" && currentPage === 1) || (type === "next" && (currentPage === maxPage)) ? "none" : "block"};
    position: absolute;
    top: ${({top}) => top || "70px"};
    ${({type}) => type === "prev" ?  "left : -30px" : "right: -30px"};
    width: 20px;
    cursor: pointer;
`

export const BorderBox = styled.div`
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || "fit-content"};
  margin: 0 auto;
  border: 1px solid ${({borderColor, theme}) => borderColor || theme.lightGray};
  border-radius: ${({borderRadius}) => borderRadius || "2px"};
  overflow: hidden;
`;