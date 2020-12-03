import styled,{keyframes} from "styled-components";
import {theme, flexCenter} from "../../styles/theme";

export const GreetingBox = styled.section`
  width: 430px;
  height: 430px;
  padding: 0 40px;
  margin: 80px auto 150px auto;
  border: 1px solid ${theme.lightGray};
`

const hello = keyframes`
  from {
    transform: rotate(-30deg);
  }
  20%{
    transform: rotate(30deg);
  }
  40%{
    transform: rotate(-60deg);
  }
  60%{
    transform: rotate(30deg);
  }
  80%{
    transform: rotate(-60deg);
  }
  to {
    transform: rotate(-30deg);
  }
`;



export const GreetingIcon = styled.p`
  width: fit-content;
  margin: 60px auto 40px auto;
  font-size: 60px;
  transform: rotate(-30deg);
  animation: ${hello} 2s ease-in-out;
`

export const GreetingContext = styled.div`
  ${flexCenter};
  flex-direction: column;
  
  .greetingTitle{
    margin-bottom: 15px;
    font-size: 2rem;
    color: ${theme.lightBlack};
    font-weight: ${props => props.titlebold || 500};
  }

  .greetingText{
    color: ${theme.darkGray};
    font-weight: 600;
  }
`;

export const KakaoButton = styled.button`
  width: 100%;
  background-color: white;
  ${flexCenter};
  width: 100%;
  height: 50px;
  margin: 20px 0;
  background-color: #fee500;
  border-radius: 5px;

  span {
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(0,0,0,0.8);
  }
  
`

export const OtherOptions = styled.div`
  .otherPlatform{
    display: flex;
    align-items: center;
    img{
      width: 25px;
      margin: 5px 10px;
    }

    span{
      color: ${theme.darkGray};
      font-weight: 500;
    }
  }

  .gotoLogin{
    display: flex;
    justify-content: center;
    margin: 30px auto;
    
    span{
      font-size: 0.8rem;
      color: ${theme.darkGray};
    }

    a{
      margin-left: 5px;
      font-size: 0.8rem;
      font-weight: 600;
      color: ${theme.darkGray};
      border-bottom: 1px solid ${theme.darkGray};
    }
  }



`