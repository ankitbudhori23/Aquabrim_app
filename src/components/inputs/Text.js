import {Text} from 'react-native-paper';
import React from 'react';
import {smallText, mediumText, bigText} from '../../utils/Dimentions';
export default function TextFont({size = 'small', children, style}) {
  let fontSize;
  if (size == 'small') {
    fontSize = smallText;
  } else if (size == 'medium') {
    fontSize = mediumText;
  } else if (size == 'large') {
    fontSize = bigText;
  }
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontWeight: fontSize === bigText ? 'bold' : 'normal',
        ...style,
      }}>
      {children}
    </Text>
  );
}
