import LanguageSelection from "./LanguageSelection";
import { Link } from "react-router-dom";
import { ReactComponent as NetflixLogo } from "../../../assets/images/netflix-logo.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <div className="header">
        <span className="svg-nfLogo logo nfLogo">
          <NetflixLogo
            className="svg-icon svg-icon-netflix-logo"
            focusable="false"
          />
        </span>
        <LanguageSelection />
        <Link className="authLinks redButton" to="/login">
          로그인
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: transparent;
  transition: background-color 0.5s;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;

  .nfLogo {
    fill: #e50914;
    line-height: normal;

    .svg-icon-netflix-logo {
      padding-top: 0.5rem;
      height: 45px;
      width: 167px;
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    & {
      height: 4rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    & {
      height: 45px;
    }
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    .authLinks {
      &.redButton {
        font-size: 0.9rem;
        margin-top: 0.35rem;
        padding: 0.25rem 0.5rem;
      }
    }
  }

  .header {
    position: relative;
    margin: 0 3.5rem;
    height: 100%;
  }

  .authLinks {
    color: #fff;
    border-radius: 3px;
    margin-top: 0.5rem;

    &.redButton {
      background-color: #e50914;
      line-height: normal;
      padding: 7px 17px;
      font-weight: 400;
      font-size: 1rem;
      float: right;
    }
  }
`;
