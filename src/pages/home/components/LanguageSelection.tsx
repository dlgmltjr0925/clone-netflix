import styled from "styled-components";

export default function LanguageSelection() {
  return (
    <Wrapper>
      <div className="lang-selection-container">
        <div className="ui-select-wrapper">
          <label className="ui-label" htmlFor="lang-switcher-header-select">
            <span className="ui-label-text">언어 선택</span>
          </label>
          <div className="select-arrow medium prefix globe">
            <select
              className="ui-select medium"
              id="lang-switcher-header-select"
              tabIndex={0}
              placeholder="lang-switcher"
            >
              <option
                lang="ko"
                value="/kr/"
                data-language="ko"
                data-country="KR"
              >
                한국어
              </option>
              <option
                lang="en"
                value="/kr-en/"
                data-language="en"
                data-country="KR"
              >
                English
              </option>
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .lang-selection-container {
    margin-top: 20px;

    .ui-select-wrapper {
      width: auto;
    }

    .ui-label {
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      margin: -1px;
      clip: rect(0 0 0 0);
      border: 0;
    }
  }

  .ui-select-wrapper {
    display: inline-block;
    position: relative;

    & > .ui-label {
      margin-bottom: 0;
    }

    .select-arrow {
      position: relative;
      display: inline-block;
      width: 100%;

      &.medium::before {
        top: 11px;
        left: 15px;
      }

      &.medium::after {
        right: 10px;
        top: 18px;
      }

      &.prefix::before {
        font-family: nf-icon;
        color: #000;
        position: absolute;
        pointer-events: none;
      }

      &::after {
        font-family: nf-icon;
        color: #000;
        font-size: 6px;
        content: "\\e898";
        position: absolute;
        pointer-events: none;
      }

      &.prefix.globe::before {
        content: "\\e896";
        left: 0.5rem;
      }

      &.prefix::before,
      &::after {
        color: #fff;
        transform: translateY(-50%);
        top: 50%;
        font-size: 0.75rem;
      }

      &.prefix {
        .ui-select {
          &.medium {
            text-indent: 0;
            padding-left: 1.375rem;
            padding-right: 1.375rem;
            line-height: 1.3em;
            overflow: hidden;
            white-space: nowrap;
          }

          background: rgba(0, 0, 0, 0.4);
          border: 1px solid #aaa;
          color: #fff;
          font-size: 0.875rem;
        }
      }
    }
  }

  .ui-label {
    margin-bottom: 6px;
  }

  select {
    color: inherit;
    font: inherit;
    margin: 0;
    text-transform: none;
  }

  .ui-select {
    background: #fff;
    font-size: 16px;
    border: 1ps solid#b3b3b3;
    appearance: none;
    border-radius: 2px;
    width: 100%;

    &.medium {
      padding: 12px;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (max-width: 1449px) {
    .select-arrow {
      &.prefix {
        .ui-select {
          padding: 0.5rem 1.375rem;
        }
      }
    }
  }
`;
