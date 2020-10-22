const Theme = {
  name: 'CLIENT Theme',
  colours: {
    default: { light: '#595959', dark: '#1E1E1E', hover: '#D8D8D8' },
    primary: { light: '#EA2C2E', dark: '#e6e6e6', shallow: '#F8A99F' },
    overlay: 'rgba(0, 0, 0, 0.6)',
    lightGray: '#595959',
    salmon: '#F8A99F',
  },
  fonts: {
    studioPro: 'StudioPro-Regular',
  },
  size: {
    small: '12px',
    p: '14px',
    h6: '18px',
    h5: '21px',
    h4: '24px',
    h3: '32px',
    h2: '36px',
    h1: '56px',
  },
  commonCSS: {
    rounded: '3px',
    fieldRadius: '5px',
    boxShadow: '1px 4px 15px 1px #cecece',
  },
  mediaBreakpoints: {
    desktop: '(min-width: 769px)',
    tablet: '(min-width: 480px) and (max-width: 768px)',
    mobile: '(max-width: 479px)',
  },
  layout: {
    maxContainerWidth: 1440,
  },
  transitionSpeed: {
    default: '.3s',
    fast: '.1s',
  },
}
export default Theme
