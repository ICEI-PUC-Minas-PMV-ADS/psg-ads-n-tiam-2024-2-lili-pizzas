import { colors } from '@/styles/colors'
import { Stack } from 'expo-router'

export default function PublicStack() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 16,
                },
                headerTintColor: colors.white,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="student"
                options={{ headerTitle: '', headerBackTitle: 'Voltar' }}
            />
            <Stack.Screen
                name="student-sign-up"
                options={{ headerTitle: '', headerBackTitle: 'Voltar' }}
            />
            <Stack.Screen
                name="worker"
                options={{ headerTitle: '', headerBackTitle: 'Voltar' }}
            />
        </Stack>
    )
}
