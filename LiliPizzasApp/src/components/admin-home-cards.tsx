import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function AdminHomeCards() {
    return (
        <View className="mt-6">
            <TouchableOpacity
                onPress={() => router.replace('/(auth)/home/events')}
                activeOpacity={0.8}
                className="flex-row items-center justify-between px-4 border border-gray-200 rounded-lg h-16"
            >
                <Text>Confirmar eventos</Text>

                <Image
                    source={require('@/assets/calendar.png')}
                    alt="Logo"
                    resizeMode="stretch"
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
