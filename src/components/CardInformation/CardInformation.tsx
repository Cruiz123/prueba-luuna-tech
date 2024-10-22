import React from 'react'
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import useStyles from '../../hooks/useStyles'
import IconGithub from '../../assets/images/github.png'
import Ping from '../../assets/images/pin.svg'
import UrlIcon from '../../assets/images/url.svg'
import OfficeIcon from '../../assets/images/office-building.svg'
import TwitterIncon from '../../assets/images/twitter.svg'

import styled from './styled'
import { RFValue } from '../../utils/utils'
import { COLORS } from '../../utils/theme'
import { informationUser } from '../../types/types'

type CardInformationProps = {
    information: informationUser,
}

const CardInformation = ({ information }: CardInformationProps) => {
    const styles = useStyles(styled)
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerInfoUser}>
                <Image
                    source={information ? { uri: information.avatar_url } : IconGithub}
                    style={{ width: RFValue(70), height: RFValue(70) }}
                    resizeMode='contain'
                    borderRadius={50}
                />
                <View>
                    <Text style={{ fontSize: RFValue(16), fontFamily: 'SpaceMono-Bold', color: COLORS.white }}>
                        {information.name}
                    </Text>
                    <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.blue }}>
                        @{information.login}
                    </Text>
                    <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                        Joined {moment(information.created_at).format('MMM Do YY')}
                    </Text>
                </View>
            </View>
            <View style={styles.containerInfoDescription}>
                <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                    {information && information.bio! ?information.bio : 'Not Available'}
                </Text>

                <View style={styles.rating}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Repos
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information.public_repos}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Followers
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information.followers}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Following
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information.following}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerInfoContact}>
                <View style={{ flexDirection: 'row', gap: RFValue(20) }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ping width={18} height={18} color={COLORS.white} />
                    </View>
                    <View>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Location
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information.location}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: RFValue(20) }}>
                    <View style={{ justifyContent: 'center' }}>
                        <UrlIcon width={18} height={18} color={COLORS.white} />
                    </View>
                    <View style={{ flex:1}}>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Website
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue,flexGrow:1 }}>
                            {information.url}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: RFValue(20) }}>
                    <View style={{ justifyContent: 'center' }}>
                        <OfficeIcon width={18} height={18} color={COLORS.white} />
                    </View>
                    <View>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Company
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information && information.company! ? information.company : 'Not Available'}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: RFValue(20) }}>
                    <View style={{ justifyContent: 'center' }}>
                        <TwitterIncon width={18} height={18} color={COLORS.white} />
                    </View>
                    <View>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Regular', color: COLORS.white }}>
                            Twitter
                        </Text>
                        <Text style={{ fontSize: RFValue(14), fontFamily: 'SpaceMono-Bold', color: COLORS.blue }}>
                            {information && information.twitter_username! ? information.twitter_username : 'Not Available'}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardInformation
