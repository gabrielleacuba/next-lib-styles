import styled from "@emotion/styled";
import { device } from "@/constants/screenSize";

const BannerContainer = styled.div`
  position: relative;
  height: 660px;
  background-position: center;
  background-size: cover;
  background-image: url("/bannerImage.jpeg");
`;

const BannerGradient = styled.div`
  position: absolute;
  background: linear-gradient(
    40deg,
    rgb(39 40 41) 0%,
    rgb(39 40 41) 25%,
    rgba(83, 100, 141, 0) 100%
  );
  inset: 0px;
  height: 100%;
  width: 100%;
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 192px;
  left: 0px;
  margin-left: var(--gl-spacing-08);
`;

const BannerTitle = styled.h1`
  color: var(--gl-color-shades-gray-00);
  margin-bottom: var(--gl-spacing-04);
  font-size: var(--gl-font-size-xxl);
  font-weight: var(--gl-font-weight-semibold);

  @media ${device.tablet} {
    font-size: var(--gl-font-size-xxxl);
  }
  @media ${device.laptop} {
    font-size: var(--gl-font-size-xxxl);
  }
`;

const BannerListText = styled.ul`
  display: flex;
  color: var(--gl-color-shades-gray-00);
  margin-bottom: var(--gl-spacing-08);
`;

const ItemList = styled.li`
  margin-right: var(--gl-spacing-06);
`;

const BannerTextDescription = styled.p`
  margin-right: var(--gl-spacing-08);
  color: var(--gl-color-shades-gray-00);
  
  font-weight: var(--gl-font-weight-regular);
  font-size: var(--gl-font-size-xxs);
  line-height: var(--gl-font-line-height-xxs);

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.laptop} {
    max-width: 35%;
    font-size: var(--gl-font-size-xs);
  }
`;

export {
  BannerContainer,
  BannerGradient,
  BannerTextContainer,
  BannerTitle,
  BannerListText,
  ItemList,
  BannerTextDescription,
};
