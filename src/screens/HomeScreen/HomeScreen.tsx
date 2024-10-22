import React from 'react'
import { View, Text, Image } from 'react-native'
import LogoGitHub from '../../assets/images/github.png'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import { RFValue } from '../../utils/utils'
import { TextBottom } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../types/global'
import { ROUTER } from '../../utils/constants'

type Props = NativeStackScreenProps<RootStackParamsList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primaryColor }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image source={LogoGitHub} style={{ width: 100, height: 100 }} resizeMode='contain' borderRadius={50} />
                <View style={{ marginTop: SIZES.padding }}>
                    <Text
                        style={{
                            fontSize: RFValue(24),
                            color: COLORS.white,
                            fontFamily: 'SpaceMono-Bold',
                            textAlign: 'center',
                        }}>
                        Welcome to GitHub Search App
                    </Text>

                    <View style={{ marginTop: 60, gap: 20 }}>
                        <TextBottom
                            label=' Users Search'
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}
                            buttonContainerStyle={{
                                alignItems: 'center',
                                borderRadius: RFValue(12),
                                height: RFValue(60),
                                backgroundColor: COLORS.secondaryColor,
                            }}
                            onPress={() => navigation.navigate(ROUTER.UserSearch)}
                        />
                        <TextBottom
                            label='Repositories Search'
                            labelStyle={{
                                textAlign: 'center',
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}
                            buttonContainerStyle={{
                                alignItems: 'center',
                                borderRadius: RFValue(12),
                                height: RFValue(60),
                                // width: 300,
                                backgroundColor: COLORS.secondaryColor,
                            }}
                            onPress={() => navigation.navigate(ROUTER.RepoSearch)}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen
