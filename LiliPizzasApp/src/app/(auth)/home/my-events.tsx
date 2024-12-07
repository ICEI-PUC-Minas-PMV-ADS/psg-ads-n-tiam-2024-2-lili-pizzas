import EventCard from '@/components/event-card'
import { useUserRole } from '@/hooks/user-role'
import { auth, db } from '@/server/firebaseConfig'
import { EventType } from '@/types/event'
import { Entypo } from '@expo/vector-icons'
import { router, Stack, useFocusEffect } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useCallback, useState } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Events() {
    const [events, setEvents] = useState<EventType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const { role } = useUserRole()

    const eventCollection = collection(db, 'evento')

    async function fetchEvents() {
        try {
            setIsLoading(true)

            const q = query(
                eventCollection,
                where('createdBy', '==', auth.currentUser?.email)
            )

            let querySnapshot =
                role === 'CLIENT'
                    ? await getDocs(q)
                    : await getDocs(eventCollection)

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
                    {events.length === 0 && (
                        <View className="items-center justify-center">
                            <Text>Você não possui eventos cadastrados</Text>
                        </View>
                    )}

                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            onRefresh={fetchEvents}
                        />
                    ))}
                </View>
            )}
        </View>
    )
}
