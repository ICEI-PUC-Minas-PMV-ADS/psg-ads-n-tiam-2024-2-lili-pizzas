import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function ClientHomeCards() {
    return (
        <View className="mt-6">
            <View className="flex-row gap-6">
                <TouchableOpacity
                    onPress={() => router.replace('/(auth)/home/events')}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-between px-4 border border-gray-200 rounded-lg h-16"
                >
                    <Text>Agendar evento</Text>

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

                <TouchableOpacity
                    onPress={() => router.replace('/(auth)/home/menu')}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-between px-4 border border-gray-200 rounded-lg h-16"
                >
                    <Text>Cardápio</Text>

                    <Image
                        source={require('@/assets/pizza-home.png')}
                        alt="Logo"
                        resizeMode="stretch"
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View className="flex-row gap-6 mt-6">
                <TouchableOpacity
                    onPress={() => router.replace('/(auth)/home/my-events')}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-between px-4 border border-gray-200 rounded-lg h-16"
                >
                    <Text>Meus eventos</Text>

                    <Image
                        source={require('@/assets/map.png')}
                        alt="Logo"
                        resizeMode="center"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-between px-4 border border-gray-200 rounded-lg h-16"
                >
                    <Text>Sobre nós</Text>

                    <Image
                        source={require('@/assets/info.png')}
                        alt="Logo"
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
