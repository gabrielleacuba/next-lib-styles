import { styled } from "../../../stitches.config";

const BannerContainer = styled("div", {
  position: "relative",
  height: "660px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: "url('/bannerImage.jpeg')",

  "&::before": {
    position: "absolute",
    background:
      "linear-gradient( 40deg, rgb(39 40 41) 0%,  rgb(39 40 41) 25%, rgba(83, 100, 141, 0) 100%)",
    inset: "0px",
    height: "100%",
    width: "100%",
  },
});

const BannerTextContainer = styled("div", {
  position: "absolute",
  top: "192px",
  left: "0px",
  marginLeft: "var(--gl-spacing-08)",
});

const BannerTitle = styled("h2", {
  color: "var(--gl-color-shades-gray-00)",
  marginBottom: "var(--gl-spacing-04)",
  fontSize: "var(--gl-font-size-xxl)",
  fontWeight: "var(--gl-font-weight-semibold)",
});

export { BannerContainer, BannerTitle };
