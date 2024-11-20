import { colors } from '@/styles/colors'
import { Stack } from 'expo-router'
import { Image } from 'react-native'

export default function HomeStack() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 16,
                },
                headerRight: () => (
                    <Image
                        source={require('@/assets/pizza.png')}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        resizeMode="contain"
                    />
                ),
                headerTintColor: colors.white,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen name="index" options={{ headerTitle: 'Treino' }} />
        </Stack>
    )
}
