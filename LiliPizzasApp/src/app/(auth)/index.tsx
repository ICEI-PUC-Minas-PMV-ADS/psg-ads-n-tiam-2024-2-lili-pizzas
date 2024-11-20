import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Dimensions, Image, Text, View } from 'react-native'

export default function Home() {
    const windowWidth = Dimensions.get('window').width

    return (
        <View className="flex-1">
            <Image
                source={require('@/assets/home.png')}
                alt="Logo"
                resizeMode="stretch"
                style={{
                    width: windowWidth,
                    height: 350,
                }}
            />

            <View className="px-6 gap-6 rounded-t-[20px] bg-white -mt-12 flex-1">
                <View className="mt-6">
                    <Text className="text-2xl">Bem vindo ao Lili Pizza</Text>
                    <Text className="text-lg text-gray-500">Olá Maria</Text>
                </View>

                <View className="mt-6">
                    <View className="flex-row gap-6">
                        <TouchableOpacity
                            onPress={() => router.push('/(auth)/home/events')}
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
                            onPress={() => {}}
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
                            onPress={() => {}}
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
            </View>
        </View>
    )
}
