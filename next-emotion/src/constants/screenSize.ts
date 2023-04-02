const sm = "640px";
// => @media (min-width: 640px) { ... }

const md = "768px";
// => @media (min-width: 768px) { ... }

const lg = "1024px";
// => @media (min-width: 1024px) { ... }

const xl = "1280px";
// => @media (min-width: 1280px) { ... }

const xxl = "1536px";
// => @media (min-width: 1536px) { ... }

const device = {
  mobile: `(min-width: ${sm})`,
  tablet: `(min-width: ${md})`,
  laptop: `(min-width: ${lg})`,
  desktop: `(min-width: ${xl})`,
  desktopL: `(min-width: ${xxl})`,
};

export { sm, md, lg, xl, xxl, device };
