import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES } from '../../utils/theme'
import { errorMessage, RFValue } from '../../utils/utils'
import { useQuery } from '@tanstack/react-query'
import { fetchGithubUserDetails } from '../../services/api'

type CardUsersProps = {
    onPress: () => void,
    username: string,
}

const CardUsers = ({ onPress, username }: CardUsersProps) => {
    const { data, isLoading } = useQuery(['users', username], () => fetchGithubUserDetails(username), {
        enabled: username.length > 0,
        onError: (error: any) => {
            const statusCode = error.response?.status
            let message = 'An unexpected error occurred.'

            if (statusCode === 404) {
                message = 'User not found.'
            } else if (statusCode === 403) {
                message = 'Access forbidden. Check your API rate limits.'
            } else if (statusCode === 503) {
                message = 'Service unavailable. Try again later.'
            }
            errorMessage(message)
        },
    })

    return (
        <>
            {data && !isLoading && (
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
                                        fontSize: RFValue(12),
                                        fontFamily: 'SpaceMono-Bold',
                                        color: COLORS.white,
                                    }}>
                                    {data.name}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: RFValue(12),
                                    fontFamily: 'SpaceMono-Bold',
                                    color: COLORS.white,
                                }}>
                                {data.login}
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
            )}
        </>
    )
}

export default CardUsers
