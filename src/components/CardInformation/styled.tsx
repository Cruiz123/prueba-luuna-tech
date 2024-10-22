import { COLORS, FONTS, SIZES } from '../../utils/theme'
import { RFValue } from '../../utils/utils'

export default {
    containerCard: {
        padding: SIZES.padding,
        borderRadius: RFValue(12),
        backgroundColor: COLORS.secondaryColor,
        marginTop: RFValue(16),
    },
    containerInfoUser: {
        flexDirection: 'row',
        gap: RFValue(20),
    },
    containerInfoDescription: {
        marginTop: SIZES.padding,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: RFValue(20),
        backgroundColor: COLORS.primaryColor,
        marginTop: SIZES.padding,
        borderRadius: RFValue(12),
        gap: RFValue(20),
    },
    containerInfoContact: {
        marginTop: SIZES.padding,
    },
}
