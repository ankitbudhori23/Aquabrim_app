import {showMessage} from 'react-native-flash-message';
import {StatusBar} from 'react-native';
const AlertComponent = ({title, type}) => {
  showMessage({
    message: title,
    type: type,
    duration: 3000,
    icon: type,
    style: {paddingTop: StatusBar.currentHeight + 2 || 0},
    titleStyle: {fontSize: 18},
  });
};

export default AlertComponent;
