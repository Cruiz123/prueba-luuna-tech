import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../utils/theme'
import { errorMessage, RFValue } from '../../utils/utils'
import { ROUTER } from '../../utils/constants'
import { useQuery } from '@tanstack/react-query'
import { fetchGithubUserDetails } from '../../services/api'
import { informationUser } from '../../types/types'

type CardUsersProps = {
    onPress: () => void,
    username: string,
}

const CardUsers = ({ onPress, username }: CardUsersProps) => {
    const { data,isLoading } = useQuery(['users', username], () => fetchGithubUserDetails(username), {
        enabled: username.length > 0,
        refetchOnMount: false,
        onError: (error) => {
            console.log(error);
            errorMessage(error as string)
        }
    })


    return (
        <>
        {data && !isLoading &&
        <TouchableOpacity
            style={{
                padding: SIZES.font,
                borderRadius: RFValue(12),
                backgroundColor: COLORS.secondaryColor,
                marginTop: RFValue(16),
            }}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', gap: 16 }}>
                <Image
                    source={{ uri: data?.avatar_url }}
                    style={{ width: RFValue(70), height: RFValue(70) }}
                    resizeMode='contain'
                    borderRadius={50}
                />
                <View>
                    <View>
                        <Text
                            style={{
                                fontSize: RFValue(14),
                                fontFamily: 'SpaceMono-Bold',
                                color: COLORS.white,
                            }}>
                            Name:{data.name}
                        </Text>
                       
                    </View>
                    <Text
                        style={{
                            fontSize: RFValue(14),
                            fontFamily: 'SpaceMono-Bold',
                            color: COLORS.white,
                        }}>
                        UserName: {data.login}
                    </Text>

                    <Text
                        style={{
                            fontSize: RFValue(12),
                            fontFamily: 'SpaceMono-Bold',
                            color: COLORS.blue,
                        }}>
                        {data.location}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        }
        </>
    )
}

export default CardUsers
