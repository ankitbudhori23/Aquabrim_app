import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// setting Screen constants
const windowPaddingHorizontal = responsiveWidth(3);

// Responsive font sizes
const bigText = responsiveFontSize(3);
const mediumText = responsiveFontSize(2.5);
const smallText = responsiveFontSize(2);

// Responsive Icon sizes
const iconSize = responsiveFontSize(2.8);
const mediumIconSize = responsiveFontSize(3.5);
const bigIconSize = responsiveFontSize(4.5);
export {
  responsiveHeight as windowHeight,
  responsiveWidth as windowWidth,
  windowPaddingHorizontal,
  smallText,
  bigText,
  mediumText,
  iconSize,
  bigIconSize,
  mediumIconSize,
};
