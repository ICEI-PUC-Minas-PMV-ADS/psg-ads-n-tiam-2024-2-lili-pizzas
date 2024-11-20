import { colors } from '@/styles/colors'
import { Entypo } from '@expo/vector-icons'
import { Stack, useNavigation } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface EventForm {
    data_evento: string
    horario: string
    localizacao: string
    cidade: string
    tipo_evento: string
    num_adultos: string
    num_criancas: string
    servico_extra: string
}

export default function Events() {
    const navigation = useNavigation()

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
            cidade: '',
            tipo_evento: '',
            num_adultos: '',
            num_criancas: '',
            servico_extra: '',
        },
    })

    async function onSubmit(data: EventForm) {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View className="p-4 bg-white flex-1">
            <Stack.Screen
                options={{
                    headerTitle: 'Evento',
                    headerLeft: () => (
                        <Pressable
                            className="flex-row items-center -ml-4"
                            onPress={() => navigation.goBack()}
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
                            placeholder="Cidade"
                            selectionColor={colors.primary}
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            enterKeyHint="next"
                        />

                        {errors.cidade && (
                            <Text className="text-red-600 font-bold text-xs">
                                {errors.cidade?.message === ''
                                    ? 'Insira uma cidade'
                                    : errors.cidade?.message}
                            </Text>
                        )}
                    </View>
                )}
                name="cidade"
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
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View className="gap-4 mt-4">
                        <TextInput
                            className="px-4 py-4 border border-gray-300 rounded-md"
                            placeholder="Serviço extra"
                            selectionColor={colors.primary}
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

            <Pressable
                onPress={handleSubmit(onSubmit)}
                className="bg-primary p-4 rounded-md mt-4"
            >
                <Text className="text-white text-center">Agendar</Text>
            </Pressable>
        </View>
    )
}
