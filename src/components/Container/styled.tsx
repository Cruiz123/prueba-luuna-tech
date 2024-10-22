import { COLORS, FONTS, SIZES } from '../../utils/theme'
import { RFValue } from '../../utils/utils'

export default {
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryColor,
        padding: SIZES.padding,
        position: 'relative',
    },
    content: {
        flex: 1,
        // marginTop: 100,
    },
    label: {
        fontSize: RFValue(SIZES.h1),
        color: COLORS.white,
        fontFamily: 'SpaceMono-Bold',
    },
}
