import { Link } from "react-router-dom";
import styled from "styled-components";

export function NotFound() {
  return (
    <Wrapper dir="ltr" data-uia="page-404">
      <div className="extended-diacritics-language">
        <div className="error-page not-found">
          <div className="error-page--header">
            <div className="error-page--logo">
              <Link to="/">Netflix</Link>
            </div>
          </div>
          <div className="error-page--content">
            <h1>길을 잃으셨나요?</h1>
            <div className="error-page--content--body">
              <p>
                죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해
                다양한 콘텐츠를 만나보세요.
              </p>
              <div className="error-page--content--buttons">
                <Link to="/" tabIndex={-1}>
                  <button
                    className="ltr-v8pdkb color-primary hasLabel"
                    type="button"
                  >
                    <style data-emotion-ltr="hhicvq">{`.ltr-hhicvq{display:block;font-size:1.6rem;font-weight:bold;line-height:2.4rem;}`}</style>
                    <style data-emotion-ltr="zd4xih">{`.ltr-zd4xih{font-family:'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1.6rem;font-weight:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:block;font-size:1.6rem;font-weight:bold;line-height:2.4rem;}`}</style>
                    <span className="ltr-zd4xih">Netflix 홈</span>
                  </button>
                </Link>
              </div>
              <div className="error-page--content--errorCode">
                <span>
                  오류 코드: <strong>NSES-404</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="error-page--imageSource" data-uia>
            <strong>로스트 인 스페이스</strong>의 한 장면
          </div>
          <div className="error-page--requestInfo">
            <p className="debug-info">Build Identifier: v9b242bb2</p>
            <p className="debug-info">
              Instance: 2767631c-e50f-4d5b-bb52-6307c3b3bd50
            </p>
            <p className="debug-info">
              Request Id: 7751de7e-c56b-4c6a-a464-399cf14fd00a-77514284
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .extended-diacritics-language {
    line-height: 1.4;
  }

  .error-page:after,
  .error-page:before {
    content: "";
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    max-height: 25%;
  }

  .error-page {
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10px;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    background: rgba(0, 0, 0, 0.18);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-top: 68px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }

  .error-page--header {
    background-color: rgba(0, 0, 0, 0.97);
    height: 68px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 45px;
    z-index: 20;
  }

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }

  a {
    background-color: transparent;
  }

  .error-page--logo {
    left: 40px;
    position: absolute;
    top: 22px;

    a {
      background-image: url("https://assets.nflxext.com/en_us/home/logo_v7.png");
      background-repeat: no-repeat;
      -webkit-background-size: contain;
      -moz-background-size: contain;
      background-size: contain;
      display: block;
      font-size: 0;
      height: 25px;
      line-height: 0;
      overflow: hidden;
      text-indent: -9999px;
      width: 93px;
    }
  }

  .error-page--content:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    z-index: -1;
  }

  .error-page.not-found .error-page--content:after {
    background-image: url("https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png");
  }

  .error-page--content:before {
    content: "";
    position: absolute;
    top: 10vw;
    left: 10vw;
    right: 10vw;
    bottom: 10vw;
    z-index: 0;
    background: -webkit-radial-gradient(
      center ellipse,
      rgba(0, 0, 0, 0.5) 0,
      rgba(0, 0, 0, 0.2) 45%,
      rgba(0, 0, 0, 0.1) 55%,
      rgba(0, 0, 0, 0) 70%
    );
    background: -moz-
      oldradial-gradient(
        center ellipse,
        rgba(0, 0, 0, 0.5) 0,
        rgba(0, 0, 0, 0.2) 45%,
        rgba(0, 0, 0, 0.1) 55%,
        rgba(0, 0, 0, 0) 70%
      );
    background: -o-radial-gradient(
      center ellipse,
      rgba(0, 0, 0, 0.5) 0,
      rgba(0, 0, 0, 0.2) 45%,
      rgba(0, 0, 0, 0.1) 55%,
      rgba(0, 0, 0, 0) 70%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.5) 0,
      rgba(0, 0, 0, 0.2) 45%,
      rgba(0, 0, 0, 0.1) 55%,
      rgba(0, 0, 0, 0) 70%
    );
  }

  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  .error-page--content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 2;
    -webkit-flex: 2 0;
    -moz-box-flex: 2;
    -ms-flex: 2 0;
    flex: 2 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0 1em;

    h1 {
      color: inherit;
      font-size: 6em;
      font-weight: 700;
      margin-bottom: 2vw;
      margin-top: 0;
      text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
      z-index: 1;
    }
  }

  .error-page--content--body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 2em;
    width: 50vw;
    z-index: 1;

    p {
      color: inherit;
      font-size: 2.2em;
      font-weight: 300;
      margin-top: 0;
      text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    }
  }

  .error-page--content--buttons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    & > a {
      text-decoration: none;
    }

    .ltr-v8pdkb {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      opacity: 1;
      padding: 0.8rem;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      will-change: background-color, color;
      word-break: break-word;
      white-space: nowrap;
    }
    .ltr-v8pdkb.color-primary {
      background-color: white;
      color: black;
    }
    .ltr-v8pdkb.color-primary:not(:disabled):hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
    .ltr-v8pdkb.color-primary:not(:disabled):active {
      background-color: rgba(255, 255, 255, 0.5);
      color: rgba(0, 0, 0, 0.7);
    }
    .ltr-v8pdkb.color-primary:disabled {
      background-color: rgba(255, 255, 255, 0.25);
      color: rgba(0, 0, 0, 0.4);
    }
    .ltr-v8pdkb.color-secondary {
      background-color: rgba(109, 109, 110, 0.7);
      color: white;
    }
    .ltr-v8pdkb.color-secondary:not(:disabled):hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
    .ltr-v8pdkb.color-secondary:not(:disabled):active {
      background-color: rgba(109, 109, 110, 0.4);
      color: rgba(255, 255, 255, 0.7);
    }
    .ltr-v8pdkb.color-secondary:disabled {
      background-color: rgba(109, 109, 110, 0.4);
      color: rgba(255, 255, 255, 0.4);
    }
    .ltr-v8pdkb.color-tertiary {
      background-color: transparent;
      color: white;
    }
    .ltr-v8pdkb.color-tertiary:not(:disabled):hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .ltr-v8pdkb.color-tertiary:not(:disabled):active {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.7);
    }
    .ltr-v8pdkb.color-tertiary:disabled {
      color: rgba(255, 255, 255, 0.4);
    }
    .ltr-v8pdkb.hasLabel {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }
    .ltr-v8pdkb.hasIcon {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
    .ltr-v8pdkb.hasLabel.hasIcon {
      padding-left: 2rem;
      padding-right: 2.4rem;
    }
    .ltr-v8pdkb:disabled {
      cursor: default;
    }
    .ltr-v8pdkb:not(:disabled):focus {
      outline: none;
    }
    .ltr-v8pdkb:not(:disabled):focus::before {
      box-sizing: content-box;
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      border: 2px solid white;
      border-radius: 8px;
      padding: 2px;
      position: absolute;
      left: -4px;
      top: -4px;
    }
    .ltr-v8pdkb::-moz-focus-inner {
      border: none;
    }
  }

  style {
    display: none;
  }

  button {
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: hidden;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: hidden;
  }

  .error-page--content--errorCode {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 2em;

    span {
      border-left: 2px solid #e50914;
      font-size: 2.4em;
      font-weight: 100;
      letter-spacing: 0.1em;
      line-height: 2.2em;
      padding: 0 1vw;
    }
  }

  strong {
    font-weight: bold;
  }

  b,
  strong {
    font-weight: 700;
  }

  .error-page--imageSource {
    bottom: 0;
    color: rgba(299, 299, 299, 0.57);
    font-size: 1.4em;
    font-weight: 100;
    letter-spacing: 0.1em;
    line-height: 1.5vw;
    margin: 2.5vw 4.8vw;
    position: fixed;
    right: 0;
    text-shadow: 0 1px 2px rgba(0 0 0 / 57%);

    & > strong {
      color: rgba(299, 299, 299, 0.77);
      letter-spacing: normal;
      margin-left: 0.2em;
    }
  }

  .error-page--requestInfo ::selection,
  .error-page--requestInfo::selection {
    background-color: Highlight;
    color: #fff;
  }

  .error-page--requestInfo {
    position: fixed;
    bottom: 0;
    left: 0;
    color: transparent;
    margin: 2.5vw 4.8vw;
    position: fixed;
  }

  @media screen and (min-width: 1921px) and (orientation: landscape) {
    .error-page {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) and (orientation: landscape) {
    .error-page {
      font-size: 0.75vw;
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1600px) and (max-aspect-ratio: 4 / 3) {
    .error-page {
      font-size: 0.75vw;
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1600px) and (orientation: landscape) {
    .error-page {
      font-size: 0.75vw;
    }
  }

  @media screen and (min-width: 841px) and (max-width: 1280px) and (max-aspect-ratio: 4 / 3) {
    .error-page {
      font-size: 0.75vw;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 840px) and (max-aspect-ratio: 4 / 3) {
    .error-page {
      font-size: 1vw;
    }
  }

  @media screen and (min-width: 0) and (max-width: 480px) and (max-aspect-ratio: 4 / 3) {
    .error-page {
      font-size: 1.5vw;
    }
  }
`;

export default NotFound;
