const sizes = {
  mobileS: '320px',
  mobileL: '480px',
  tabletS: '768px',
  tabletL: '820px',
  laptopS: '1024px',
  laptopL: '1200px',
  desktop: '2560px'
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tabletS: `(min-width: ${sizes.tabletS})`,
  laptopS: `(min-width: ${sizes.laptopS})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const colors = {
  primaryColor: "#24201C",
  highLightColor: "#C9A489",
  backgroundColor: "#FFF6ED",
  backgroundColorLight: "#FFFBF7",
  textColorDark: "#24201C",
  textColorLight: "#FFFFFF"
};

const theme = {
  sizes, devices, colors
};

export default theme;