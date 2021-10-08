import styled from "styled-components";

export default function HeroCard() {
  return (
    <Wrapper>
      <div className="hero-card hero_fuji vlv">
        <div className="card-background">
          <div className="concord-img-wrapper">
            <img
              className="concord-img vlv-creative"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/6468e28d-11a0-4ee9-a180-d2dd2190246a/KR-ko-20211004-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/6468e28d-11a0-4ee9-a180-d2dd2190246a/KR-ko-20211004-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/6468e28d-11a0-4ee9-a180-d2dd2190246a/KR-ko-20211004-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/6468e28d-11a0-4ee9-a180-d2dd2190246a/KR-ko-20211004-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
              alt=""
            />
            <div className="concord-img-gradient"></div>
          </div>
        </div>
        <div className="card-text">
          <h1 className="card-title">영화, TV 프로그램을 무제한으로.</h1>
          <h2 className="card-subtitle">
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </h2>
          <form className="cta-form email-form" method="GET">
            <h3 className="email-form-title">
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </h3>
            <div className="email-form-lockup">
              <ul className="simpleForm structural ui-grid">
                <li className="nf-FormSpace field-email">
                  <div className="nfInput nfInputResponsive"></div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;

  .card-text {
    position: relative;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }

  .card-title {
    font-size: 1.75rem;
  }

  h2 {
    max-width: 800px;
  }

  .card-background {
    z-index: 0;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .concord-img-wrapper {
      bottom: 0;
    }
  }

  .concord-img-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }

  h1,
  h2 {
    max-width: 640px;
    margin: 0 auto;
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 0%.75em 0 0.25em;
  }

  h2 {
    font-size: 20px;
  }

  &.vlv {
    .concord-img {
      transform: none;
    }

    .concord-img-gradient {
      background: rgba(0, 0, 0, 0.4);
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }

  .concord-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.25) translateY(-10%);
  }

  .concord-img-gradient {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .card-subtitle,
  .card-text {
    font-size: 1.625rem;
    font-weight: 400;
  }

  .card-title {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  .card-subtitle {
    font-size: 1.625rem;
    margin: 1rem auto;
  }

  .extended-diacritics {
    .card-title {
      line-height: normal;
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    .card-background {
      top: -100px;
    }

    .hero-card {
      .card-title {
        font-size: 4rem;
      }

      .card-sub-title {
        font-size: 1.625rem;
      }

      .card-subtitle {
        font-size: 1.625rem;
      }
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    .hero-card {
      &.vlv {
        .card-title {
          font-size: 3.125rem;
        }
      }
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    .hero-card {
      .card-title {
        font-size: 3.125rem;
      }

      .card-subtitle {
        font-size: 1.625rem;
      }
    }
  }

  @media screen and (min-width: 740px) {
    h2 {
      font-size: 27px;
    }
  }
`;
