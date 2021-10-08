import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle) {
      htmlTitle.innerHTML =
        "넷플릭스 대한민국 - 인터넷으로 TV 프로그램과 영화를 시청하세요";
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="netflix-sans-font-loaded">
          <div
            className="lang-selector-test container extended-diacritics container--is-mobile"
            dir="ltr"
          >
            <Header />
            <div className="cards">
              <HeroCard />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #f3f3f3;
    color: #333;
    font-size: 16px;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div`
  .netflix-sans-font-loaded {
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .container {
    width: 100%;
    overflow-x: hidden;
  }

  .lang-selector-test {
    .header {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 0.5rem;
      height: auto;

      .logo {
        margin-right: auto;
      }

      .nfLogo {
        .svg-icon-netflix-logo {
          width: auto;
          height: 1.5rem;
          padding-top: 0;
        }
      }

      .authLinks.redButton,
      .cta-container {
        float: none;
        margin-top: 0;
        white-space: nowrap;
      }

      .lang-selection-container {
        display: inline-block;
        margin: 0 0.75rem;

        .select-arrow.prefix::before,
        .select-arrow::after {
          color: #fff;
          transform: translateY(-50%);
          top: 50%;
        }

        .select-arrow.prefix::before {
          font-size: 0.75rem;
          left: 0.5rem;
        }
      }
    }
  }

  .nfCompactInput,
  .ui-label,
  .ui-label-no-margin {
    font-size: 16px;
    font-weight: 400;
    color: #8c8c8c;
    display: block;
  }

  .cards {
    margin: 0 auto;
  }

  .card {
    position: relative;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    margin-bottom: 0;
    background: 0 0;
    color: #fff;
  }

  @media only screen and (min-width: 1450px) {
    .lang-selector-test {
      .header {
        .nfLogo {
          .svg-icon-netflix-logo {
            width: 10.4375rem;
            height: 2.8125rem;
          }
        }

        .lang-selection-container {
          margin-right: 2rem;
        }
      }
    }

    .card {
      padding: 70px 45px;
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    .lang-selector-test {
      .header {
        .nfLogo {
          .svg-icon-netflix-logo {
            width: 8.375rem;
            height: 2.25rem;
          }
        }

        .lang-selection-container {
          margin-right: 2rem;
        }
      }
    }

    .card {
      padding: 70px 45px;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    .lang-selector-test {
      .header {
        .nfLogo {
          .svg-icon-netflix-logo {
            width: 6.75rem;
            height: 2rem;
          }
        }

        .lang-selection-container {
          margin-right: 1.5rem;
        }
      }
    }

    .card {
      padding: 70px 45px;
    }
  }
`;
