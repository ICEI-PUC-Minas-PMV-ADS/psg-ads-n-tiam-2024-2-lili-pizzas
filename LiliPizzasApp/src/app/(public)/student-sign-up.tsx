import {
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { auth } from '@/server/firebaseConfig'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router } from 'expo-router'

export default function StudentSignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            telefone: '',
            genero: '',
            data_nascimento: '',
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(data: { login: string; password: string }) {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                'migueloliveirabizzi@gmail.com',
                '123456'
            )

            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View className="flex-1 bg-primary">
            <View className="w-full px-8 mt-12">
                <View className="items-center justify-center mb-12">
                    <Text className="text-white text-4xl font-semibold">
                        Cadastre-se
                    </Text>
                </View>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Nome"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.name && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.name?.message === ''
                                        ? 'Insira um nome'
                                        : errors.name?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="name"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Telefone"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.telefone && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.telefone?.message === ''
                                        ? 'Insira um telefone'
                                        : errors.telefone?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="telefone"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Email inválido!',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="E-mail"
                                selectionColor={colors.primary}
                                // onFocus={() => setInputFocused('login')}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.email && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.email?.message === ''
                                        ? 'Insira um email'
                                        : errors.email?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="email"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Gênero"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.genero && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.genero?.message === ''
                                        ? 'Insira um gênero'
                                        : errors.genero?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="genero"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Data de nascimento"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.data_nascimento && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.data_nascimento?.message === ''
                                        ? 'Insira uma data de nascimento'
                                        : errors.data_nascimento?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="data_nascimento"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <View className="items-center flex-row pb-2">
                                <TextInput
                                    enterKeyHint="send"
                                    secureTextEntry={!isPasswordVisible}
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    selectionColor={colors.primary}
                                    value={value}
                                    className="px-4 py-4 bg-white rounded-md flex-1"
                                    placeholder="Senha"
                                />

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
                                    style={{
                                        position: 'absolute',
                                        right: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Feather
                                        name={
                                            isPasswordVisible
                                                ? 'eye'
                                                : 'eye-off'
                                        }
                                        size={20}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                            </View>

                            {errors.password && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.password?.message === ''
                                        ? 'Insira uma senha'
                                        : errors.password?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="password"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Confirme a senha"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="send"
                            />
                            {errors.confirmPassword && (
                                <Text className="text-red-600 font-bold text-xs">
                                    {errors.confirmPassword?.message === ''
                                        ? 'Confirme a senha'
                                        : errors.confirmPassword?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="confirmPassword"
                />

                <View className="gap-4 mt-8">
                    <TouchableOpacity
                        className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                        onPress={() => {}}
                        activeOpacity={0.7}
                    >
                        <Text className="text-white">Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
