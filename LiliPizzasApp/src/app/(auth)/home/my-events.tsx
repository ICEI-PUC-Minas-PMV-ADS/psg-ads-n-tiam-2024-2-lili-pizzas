import { db } from '@/server/firebaseConfig'
import { colors } from '@/styles/colors'
import { EventType } from '@/types/event'
import { Entypo, Feather } from '@expo/vector-icons'
import { router, Stack, useFocusEffect } from 'expo-router'
import { collection, getDocs } from 'firebase/firestore'
import { useCallback, useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'

export default function Events() {
    const [events, setEvents] = useState<EventType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const eventCollection = collection(db, 'evento')

    async function fetchEvents() {
        try {
            setIsLoading(true)

            const querySnapshot = await getDocs(eventCollection)
            const eventsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as EventType[]

            setEvents(eventsData)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchEvents()
            return () => {}
        }, [])
    )
    return (
        <View className="p-4 bg-white flex-1">
            <Stack.Screen
                options={{
                    headerTitle: 'Meus eventos',
                    headerLeft: () => (
                        <Pressable
                            className="flex-row items-center -ml-4"
                            onPress={() => router.replace('/(auth)')}
                        >
                            <Entypo
                                name="chevron-small-left"
                                size={24}
                                color="white"
                            />
                            <Text className="text-white">Voltar</Text>
                        </Pressable>
                    ),
                }}
            />

            {isLoading ? (
                <View className="items-center justify-center">
                    <Text>Carregando...</Text>
                </View>
            ) : (
                <View className="gap-8">
                    {events.map((event) => (
                        <View key={event.id}>
                            <Text>{event.horario}</Text>
                            <View className="p-4 border border-gray-300 rounded-lg mt-2">
                                <View className="flex-row justify-between items-center">
                                    <Text>#{event.id}</Text>
                                    <View className="bg-primary px-2 py-1 items-center justify-center rounded-full">
                                        <Text className="text-xs text-white">
                                            {event.tipoEvento}
                                        </Text>
                                    </View>
                                </View>

                                <View className="flex-row items-center gap-2 mt-1">
                                    <Feather
                                        name="map-pin"
                                        size={12}
                                        color={colors.primary}
                                    />
                                    <Text>{event.local}</Text>
                                </View>

                                <View className="flex-row items-center gap-2">
                                    <Feather
                                        name="user"
                                        size={12}
                                        color={colors.primary}
                                    />
                                    <Text>Adultos:</Text>
                                    <Text>{event.numeroAdultos}</Text>
                                </View>
                                <View className="flex-row items-center gap-2">
                                    <Feather
                                        name="user"
                                        size={12}
                                        color={colors.primary}
                                    />
                                    <Text>Crianças:</Text>
                                    <Text>{event.numeroCriancas}</Text>
                                </View>

                                <View className="w-full h-px bg-gray-400 my-4" />

                                <View className="flex-row items-center">
                                    <TouchableOpacity
                                        className="flex-1 items-center justify-center"
                                        activeOpacity={0.7}
                                    >
                                        <Text>Detalhes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className="flex-1 items-center justify-center"
                                        activeOpacity={0.7}
                                    >
                                        <Text>Reagendar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
    )
}
