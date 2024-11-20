import { db } from '@/server/firebaseConfig'
import { colors } from '@/styles/colors'
import { Entypo } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    View,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface EventForm {
    data_evento: string
    horario: string
    localizacao: string
    valorOrcamento: string
    tipo_evento: string
    num_adultos: string
    num_criancas: string
    servico_extra: string
}

export default function Events() {
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            data_evento: '',
            horario: '',
            localizacao: '',
            valorOrcamento: '',
            tipo_evento: '',
            num_adultos: '',
            num_criancas: '',
            servico_extra: '',
        },
    })

    const eventCollection = collection(db, 'evento')

    async function onSubmit(data: EventForm) {
        setIsLoading(true)

        try {
            await addDoc(eventCollection, {
                data: data.data_evento,
                local: data.localizacao,
                numeroAdultos: data.num_adultos,
                numeroCriancas: data.num_criancas,
                tipoEvento: data.tipo_evento,
                valorOrcamento: data.valorOrcamento,
                quantGarcons: 0,
                quantPizzaiola: 0,
                horario: data.horario,
            })

            Alert.alert('Sucesso', 'Evento agendado com sucesso', [
                {
                    text: 'Ok',
                    onPress: () => router.replace('/(auth)'),
                },
            ])
        } catch (error) {
            setError('servico_extra', {
                type: 'manual',
                message: 'Erro ao agendar evento',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <View className="p-4 bg-white flex-1">
            <Stack.Screen
                options={{
                    headerTitle: 'Agendar evento',
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

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ justifyContent: 'flex-end' }}
            >
                <Text className="text-2xl">Agende seu evento</Text>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-6">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Data do evento"
                                placeholderTextColor={colors.gray400}
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.data_evento && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.data_evento?.message === ''
                                        ? 'Insira uma data'
                                        : errors.data_evento?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="data_evento"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Horário"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.horario && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.horario?.message === ''
                                        ? 'Insira um horário'
                                        : errors.horario?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="horario"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Localização"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.localizacao && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.localizacao?.message === ''
                                        ? 'Insira uma localização'
                                        : errors.localizacao?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="localizacao"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Valor do orçamento"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.valorOrcamento && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.valorOrcamento?.message === ''
                                        ? 'Insira um valor de orçamento'
                                        : errors.valorOrcamento?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="valorOrcamento"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Tipo de evento"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.tipo_evento && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.tipo_evento?.message === ''
                                        ? 'Insira um tipo de evento'
                                        : errors.tipo_evento?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="tipo_evento"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Número de adultos"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.num_adultos && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.num_adultos?.message === ''
                                        ? 'Insira um número de adultos'
                                        : errors.num_adultos?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="num_adultos"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Número de crianças"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.num_criancas && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.num_criancas?.message === ''
                                        ? 'Insira um número de crianças'
                                        : errors.num_criancas?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="num_criancas"
                />

                <Controller
                    control={control}
                    rules={{
                        required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 border border-gray-300 rounded-md"
                                placeholder="Serviço extra"
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />

                            {errors.servico_extra && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.servico_extra?.message === ''
                                        ? 'Insira um serviço extra'
                                        : errors.servico_extra?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="servico_extra"
                />
            </KeyboardAvoidingView>

            <Pressable
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="bg-primary p-4 rounded-md mt-4 items-center"
            >
                {isLoading ? (
                    <Text className="text-white">Carregando...</Text>
                ) : (
                    <Text className="text-white">Agendar</Text>
                )}
            </Pressable>
        </View>
    )
}
