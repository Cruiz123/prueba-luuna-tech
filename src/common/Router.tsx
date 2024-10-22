import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamsList } from '../types/global'
import { HomeScreen, UserSearchScreen, RepoSearchScreen, DetailsUserScreen } from '../screens'
import { ROUTER } from '../utils/constants'

const Stack = createNativeStackNavigator<RootStackParamsList>()

const Router = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ROUTER.Home} screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={ROUTER.Home}
                        component={HomeScreen}
                        options={{
                            animation: 'slide_from_left',
                            animationTypeForReplace: 'push',
                            animationDuration: 5000,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTER.UserSearch}
                        component={UserSearchScreen}
                        options={{
                            animation: 'slide_from_right',
                            animationTypeForReplace: 'push',
                            animationDuration: 5000,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTER.RepoSearch}
                        component={RepoSearchScreen}
                        options={{
                            animation: 'slide_from_right',
                            animationTypeForReplace: 'push',
                            animationDuration: 5000,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTER.DetailsUser}
                        component={DetailsUserScreen}
                        options={{ animationTypeForReplace: 'push', animation: 'slide_from_right' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router
