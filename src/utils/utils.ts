import { Dimensions, Platform, StatusBar } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { isIphoneX } from 'react-native-iphone-x-helper'

const { height, width } = Dimensions.get('window')
const standardLength = width > height ? width : height
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight // iPhone X style SafeAreaView size in portrait

const deviceHeight = isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength

// guideline height for standard 5" device screen is 680
export const RFValue = (fontSize = 0, standardScreenHeight = 680) => {
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
    return Math.round(heightPercent)
}

export const errorMessage = (description = '') => {
    showMessage({
        message: 'Error',
        description,
        color: '#FFF',
        backgroundColor: '#f45252',
        icon: 'danger',
        duration: 5000,
    })
}
