// Elements
import { Button } from 'react-native-elements';

// Navigation
import { DefaultTheme } from "@react-navigation/native";

export const colors = {
    mainBg: '#222831',
    secondaryBg: '#EBEBEB',
    mainTxt: '#EEEEEE',
    sencondaryTxt: '#000000',
    accentBg: '#00ADB5',
    accentTxt: '#EEEEEE',
}


export const navigationTheme = {
    ... DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background: colors.mainBg,
    },
}
const theme = {
    Button:{
        buttonStyle:{
            backgroundColor: colors.accentBg,
            color: colors.accentTxt,
        },
    },
};

export default theme;