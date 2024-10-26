import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { fetchGithubUsers } from '../../services/api'
import { Container, FormInput, TextBottom } from '../../components'
import { COLORS, SIZES } from '../../utils/theme'
import SearchIcon from '../../assets/images/Shape 2.svg'
import { informationUser, informationUsers } from '../../types/types'
import { RootStackParamsList } from '../../types/global'
import { ROUTER } from '../../utils/constants'
import { errorMessage, RFValue } from '../../utils/utils'
import EmptyState from '../../assets/images/fe15e6ce0930f644ebca2f683f4c3e92.svg'
import CircleArrowLeft from '../../assets/images/circle_arrow_left.svg'
import CardUsers from '../../components/CardUsers/CardUsers'

type userFormData = {
    username: string,
}

type Props = NativeStackScreenProps<RootStackParamsList, 'UserSearch'>

const UserSearchScreen = ({ navigation }: Props) => {
    const { control, handleSubmit, reset } = useForm<userFormData>()

    const [informationUser, setInformationUser] = useState<informationUsers[]>([])

    const { mutate } = useMutation(fetchGithubUsers, {
        onSuccess: (data) => {
            setInformationUser(data.items)
            reset()
        },
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

    const onSubmit = (data: userFormData) => mutate(data.username)
    const goBack = () => navigation.goBack()

    return (
        <Container
            label='Users'
            icon={
                <TouchableOpacity onPress={goBack}>
                    <CircleArrowLeft width={RFValue(30)} height={RFValue(30)} fill={COLORS.white} />
                </TouchableOpacity>
            }>
            <Controller
                control={control}
                name='username'
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <FormInput
                        placeholder='Search GitHub UserName…'
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        errorMsg={error?.message}
                        prependComponent={
                            <View style={{ justifyContent: 'center', marginRight: 9 }}>
                                <SearchIcon fill={COLORS.blue} />
                            </View>
                        }
                        appendComponent={
                            <View style={{ justifyContent: 'center' }}>
                                <TextBottom
                                    label='Search'
                                    buttonContainerStyle={{
                                        width: 84,
                                        height: 45,
                                        alignItems: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.blue,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                    }}
                                    onPress={handleSubmit(onSubmit)}
                                />
                            </View>
                        }
                    />
                )}
            />

            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={informationUser}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <CardUsers
                            onPress={() => navigation.navigate(ROUTER.DetailsUser, { searchQuery: item.login })}
                            username={item.login}
                        />
                    )}
                    ListEmptyComponent={
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <EmptyState width='200' height='200' />
                            <Text style={{ fontSize: RFValue(16), fontFamily: 'SpaceMono-Bold', color: COLORS.white }}>
                                No data found
                            </Text>
                        </View>
                    }
                />
            </View>
        </Container>
    )
}

export default UserSearchScreen
