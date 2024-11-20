import { router } from 'expo-router'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AuthPage() {
    const { bottom } = useSafeAreaInsets()
    const windowWidth = Dimensions.get('window').width

    return (
        <View className="flex-1 items-center justify-center relative bg-primary">
            <Image
                source={require('@/assets/auth-page-banner.png')}
                alt="Logo"
                resizeMode="contain"
                className="absolute self-center"
                style={{
                    width: windowWidth,
                }}
            />

            <View
                className="mt-auto w-full px-8 gap-6"
                style={{
                    marginBottom: bottom + 8,
                }}
            >
                <TouchableOpacity
                    className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                    onPress={() => router.push('/(public)/student')}
                    activeOpacity={0.7}
                >
                    <Text className="text-white">Entrar como cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                    onPress={() => router.push('/(public)/worker')}
                    activeOpacity={0.7}
                >
                    <Text className="text-white">Entrar como funcionário</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
