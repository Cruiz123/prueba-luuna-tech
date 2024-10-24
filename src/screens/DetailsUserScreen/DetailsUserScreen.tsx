import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CardInformation, Container } from '../../components'
import { fetchGithubUserDetails } from '../../services/api'
import { useQuery } from '@tanstack/react-query'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../types/global'
import useStyles from '../../hooks/useStyles'
import styled from './styled'
import { RFValue } from '../../utils/utils'
import CircleArrowLeft from '../../assets/images/circle_arrow_left.svg'
import { COLORS } from '../../utils/theme'

type Props = NativeStackScreenProps<RootStackParamsList, 'DetailsUser'>

const DetailsUserScreen = ({ route, navigation }: Props) => {
    const styles = useStyles(styled)

    const searchQuery = route.params.searchQuery
    const { data, isLoading } = useQuery(['users', searchQuery], () => fetchGithubUserDetails(searchQuery), {
        enabled: searchQuery.length > 0,
    })

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Container
            label='Details User'
            icon={
                <TouchableOpacity onPress={goBack}>
                    <CircleArrowLeft width={RFValue(25)} height={RFValue(25)} fill={COLORS.white} />
                </TouchableOpacity>
            }>
            <ScrollView keyboardDismissMode='interactive' keyboardShouldPersistTaps='always' style={styles.scroll}>
                {!isLoading && <CardInformation information={data} />}
            </ScrollView>
        </Container>
    )
}

export default DetailsUserScreen
