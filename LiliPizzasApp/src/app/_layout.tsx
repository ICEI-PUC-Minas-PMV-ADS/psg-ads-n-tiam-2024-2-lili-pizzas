import * as SplashScreen from 'expo-splash-screen'

import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    useFonts,
} from '@expo-google-fonts/montserrat'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { router, Slot } from 'expo-router'

import '../styles/global.css'
import { auth } from '@/server/firebaseConfig'
import { UserRoleProvider } from '@/hooks/user-role'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
    })

    if (fontsLoaded) {
        SplashScreen.hideAsync()
    }

    if (!fontsLoaded) {
        return null
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            return router.push('/(auth)')
        } else {
            return router.push('/(public)')
        }
    })

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <UserRoleProvider>
                <StatusBar
                    style="light"
                    backgroundColor="transparent"
                    translucent
                />

                {fontsLoaded && <Slot />}
            </UserRoleProvider>
        </GestureHandlerRootView>
    )
}
