export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(width <= ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(width <= ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(width <= ${BREAKPOINTS.laptop / 16}rem)`,
};
