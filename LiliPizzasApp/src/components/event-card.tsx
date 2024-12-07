import { useUserRole } from '@/hooks/user-role'
import { db } from '@/server/firebaseConfig'
import { colors } from '@/styles/colors'
import { EventStatus, type EventType } from '@/types/event'
import { Feather } from '@expo/vector-icons'
import { doc, updateDoc } from 'firebase/firestore'
import { Fragment, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

interface Props {
    event: EventType
    onRefresh: () => void
}

export default function EventCard({ event, onRefresh }: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const { role } = useUserRole()

    async function confirmEvent() {
        setIsLoading(true)

        try {
            const eventDoc = doc(db, 'evento', event.id)

            await updateDoc(eventDoc, {
                status: EventStatus.CONFIRMED,
            })

            Alert.alert(
                'Sucesso',
                'Status do evento atualizado com sucesso',
                [{ text: 'Ok', onPress: onRefresh }],
                {
                    onDismiss: onRefresh,
                }
            )
        } catch (error) {
            console.error('Erro ao atualizar o status do evento:', error)
            Alert.alert('Erro', 'Não foi possível atualizar o status do evento')
        } finally {
            setIsLoading(false)
        }
    }

    async function rejectEvent() {
        setIsLoading(true)

        try {
            const eventDoc = doc(db, 'evento', event.id)

            await updateDoc(eventDoc, {
                status: EventStatus.REJECTED,
            })

            Alert.alert(
                'Sucesso',
                'Status do evento atualizado com sucesso',
                [{ text: 'Ok', onPress: onRefresh }],
                {
                    onDismiss: onRefresh,
                }
            )
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível atualizar o status do evento')
        } finally {
            setIsLoading(false)
        }
    }

    function renderAdminActions() {
        if (event.status !== EventStatus.PENDING) {
            return (
                <View className="flex-row items-center">
                    <TouchableOpacity
                        className="flex-1 items-center justify-center"
                        activeOpacity={0.7}
                    >
                        <Text>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View className="flex-row items-center">
                <TouchableOpacity
                    className="flex-1 items-center justify-center"
                    activeOpacity={0.7}
                    disabled={isLoading}
                >
                    <Text>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={confirmEvent}
                    disabled={isLoading}
                    className="flex-1 items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Text className="text-green-600">Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={rejectEvent}
                    disabled={isLoading}
                    className="flex-1 items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Text className="text-red-600">Rejeitar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderStatusBadge() {
        if (event.status === EventStatus.CONFIRMED) {
            return (
                <View className="flex-row mt-2">
                    <View className="bg-green-600 px-2 py-1 items-center justify-center rounded-full">
                        <Text className="text-xs text-white">Confirmado</Text>
                    </View>
                </View>
            )
        }

        return (
            <View className="flex-row mt-2">
                <View className="bg-red-600 px-2 py-1 items-center justify-center rounded-full">
                    <Text className="text-xs text-white">Rejeitado</Text>
                </View>
            </View>
        )
    }

    return (
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
                    <Feather name="map-pin" size={12} color={colors.primary} />
                    <Text>{event.local}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <Feather name="user" size={12} color={colors.primary} />
                    <Text>Adultos:</Text>
                    <Text>{event.numeroAdultos}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <Feather name="user" size={12} color={colors.primary} />
                    <Text>Crianças:</Text>
                    <Text>{event.numeroCriancas}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <Feather
                        name="dollar-sign"
                        size={12}
                        color={colors.primary}
                    />
                    <Text>Valor:</Text>
                    <Text>R${event.valorOrcamento}</Text>
                </View>

                {event.status !== EventStatus.PENDING && renderStatusBadge()}

                <View className="w-full h-px bg-gray-400 my-4" />

                {isLoading ? (
                    <View className="items-center justify-center">
                        <ActivityIndicator color={colors.primary} />
                    </View>
                ) : (
                    <Fragment>
                        {role === 'ADMIN' && renderAdminActions()}

                        {role === 'CLIENT' && (
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
                        )}
                    </Fragment>
                )}
            </View>
        </View>
    )
}
