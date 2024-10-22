import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import useStyles from '../../hooks/useStyles'
import styled from './styled'
import { RFValue } from '../../utils/utils'

type ContainerProps = {
    children: React.ReactNode,
    icon?: React.ReactNode,
    label?: string,
}

const Container = ({ children, icon, label }: ContainerProps) => {
    const styles = useStyles(styled)
    return (
        <SafeAreaView style={styles.container}>
            {icon && (
                <View
                    style={{ marginBottom: RFValue(20), flexDirection: 'row', alignItems: 'center', gap: RFValue(20) }}>
                    {icon}
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
            {!icon && <Text style={styles.label}>{label}</Text>}
            <View style={styles.content}>{children}</View>
            <View style={{ height: RFValue(60) }} />
        </SafeAreaView>
    )
}

export default Container
