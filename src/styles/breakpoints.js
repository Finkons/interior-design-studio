export const bp = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

const mediaBp = type => {
  if (type === 'mobile') {
    return `@media (min-width: ${bp.mobile}px and (max-width: ${bp.tablet - 1}px)`;
  } else if (type === 'tablet') {
    return `@media (min-width: ${bp.tablet}px) and (max-width: ${bp.desktop - 1}px)`;
  } else if (type === 'desktop') {
    return `@media (min-width: ${bp.desktop}px)`;
  }
};

export default mediaBp;
