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
import { useCallback, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router, useFocusEffect } from 'expo-router'

export default function StudentLogin() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
    })

    async function onSubmit(data: { login: string; password: string }) {
        try {
            setIsLoading(true)

            await signInWithEmailAndPassword(auth, data.login, data.password)
        } catch (error) {
            setError('password', {
                type: 'manual',
                message: 'Email ou senha inválidos',
            })
        } finally {
            setIsLoading(false)
        }
    }

    useFocusEffect(
        useCallback(() => {
            reset(undefined)
            return () => {}
        }, [])
    )

    return (
        <View className="flex-1 bg-primary">
            <View className="w-full px-8 mt-20">
                <View className="items-center justify-center mb-12">
                    <Text className="text-white text-4xl font-semibold">
                        Bem vindo
                    </Text>
                    <Text className="text-white text-4xl font-semibold">
                        ao Lili Pizzas
                    </Text>
                </View>

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
                        <View className="gap-4">
                            <TextInput
                                className="px-4 py-4 bg-white rounded-md"
                                placeholder="Email"
                                placeholderTextColor={colors.gray400}
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.login && (
                                <Text className="text-white font-bold text-sm">
                                    {errors.login?.message === ''
                                        ? 'Insira um login'
                                        : errors.login?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="login"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View className="gap-4 mt-4">
                            <View className="items-center flex-row relative bg-white rounded-md">
                                <TextInput
                                    enterKeyHint="send"
                                    secureTextEntry={!isPasswordVisible}
                                    autoCapitalize="none"
                                    placeholderTextColor={colors.gray400}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    selectionColor={colors.primary}
                                    value={value}
                                    className="flex-1 px-4 py-4"
                                    placeholder="Senha"
                                />

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
                                    className="mr-4"
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
                                <Text className="text-white font-bold text-sm">
                                    {errors.password?.message === ''
                                        ? 'Insira uma senha'
                                        : errors.password?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="password"
                />

                <View className="items-end">
                    <TouchableOpacity
                        className="mt-2"
                        activeOpacity={0.7}
                        onPress={() => router.push('/(public)/forgot-password')}
                    >
                        <Text className="text-white">Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>

                <View className="gap-4 mt-8">
                    <TouchableOpacity
                        className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                        activeOpacity={0.7}
                    >
                        {isLoading ? (
                            <Text className="text-white">Carregando...</Text>
                        ) : (
                            <Text className="text-white">Login</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                        onPress={() => router.push('/(public)/student-sign-up')}
                        activeOpacity={0.7}
                    >
                        <Text className="text-white">Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
