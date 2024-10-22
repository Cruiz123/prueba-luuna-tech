import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View, Image, Text, Linking } from 'react-native'
import { informationRepositories } from '../../types/types'
import { RootStackParamsList } from '../../types/global'

// Import libraries 
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Import components from the components folder
import { Container, FormInput, TextBottom } from '../../components'

// Import the function from the services folder
import { fetchGithubRepos } from '../../services/api'

// Import the theme from the utils folder
import { COLORS, SIZES } from '../../utils/theme'

// Import the function from the utils folder
import { errorMessage, RFValue } from '../../utils/utils'


// Import the images from the assets folder
import SearchIcon from '../../assets/images/Shape 2.svg'
import EmptyState from '../../assets/images/fe15e6ce0930f644ebca2f683f4c3e92.svg'
import CircleArrowLeft from '../../assets/images/circle_arrow_left.svg'

type repoFormData = {
    username: string,
}

type Props = NativeStackScreenProps<RootStackParamsList, 'RepoSearch'>

const RepoSearchScreen = ({ navigation }: Props) => {
    const { control, handleSubmit, reset } = useForm<repoFormData>()

    const [informationRepositories, setInformationRepositories] = useState<informationRepositories[]>([])

    const { mutate } = useMutation(fetchGithubRepos, {
        onSuccess: (data) => {
            setInformationRepositories(data.items)
            reset()
        },
        onError: (error) => {
            errorMessage(error as string)
        },
    })

    const onSubmit = async (data: repoFormData) => {
        mutate(data.username)
    }

    const goLinkToWebRepository = (url: string) => {
        Linking.openURL(url)
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Container
            label='Repositories'
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
                        placeholder='Search GitHub Repository…'
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

            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <FlatList
                    data={informationRepositories}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                padding: SIZES.font,
                                borderRadius: RFValue(12),
                                backgroundColor: COLORS.secondaryColor,
                                marginTop: RFValue(16),
                            }}
                            onPress={() => goLinkToWebRepository(item.html_url)}>
                            <View style={{ flexDirection: 'row', gap: RFValue(16) }}>
                                <Image
                                    source={{ uri: item?.owner?.avatar_url }}
                                    style={{ width: RFValue(70), height: RFValue(70) }}
                                    resizeMode='contain'
                                    borderRadius={50}
                                />
                                <View>
                                    <Text
                                        style={{
                                            fontSize: RFValue(16),
                                            fontFamily: 'SpaceMono-Bold',
                                            color: COLORS.white,
                                        }}>
                                       {item?.full_name?.length > 30 && item.full_name
                                            ? item.full_name.slice(0, 25) + '...'
                                            : item.full_name}
                                    </Text>

{item.description &&

                                    <Text
                                        style={{
                                            fontSize: RFValue(14),
                                            fontFamily: 'SpaceMono-Bold',
                                            color: COLORS.blue,
                                        }}>
                                        {item?.description?.length > 30 && item.description
                                            ? item.description.slice(0, 25) + '...'
                                            : item.description}
                                    </Text>
}

                                    {item.language && 
                                    
                                    <View
                                        style={{
                                            backgroundColor: COLORS.blue,
                                            width: 100,
                                            flex: 1,
                                            borderRadius: 12,
                                            alignItems: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: RFValue(16),
                                                fontFamily: 'SpaceMono-Bold',
                                                color: COLORS.white,
                                            }}>
                                            {item.language}
                                        </Text>
                                    </View>
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
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

export default RepoSearchScreen
