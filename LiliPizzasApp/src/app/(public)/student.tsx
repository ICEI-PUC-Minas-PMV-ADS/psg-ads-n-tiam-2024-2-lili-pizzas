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

export default function StudentLogin() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
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
                                placeholder="Login"
                                selectionColor={colors.primary}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.login && (
                                <Text className="text-red-600 font-bold text-xs">
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

                <View className="gap-4 mt-8">
                    <TouchableOpacity
                        className="w-full py-4 border border-white justify-center items-center rounded-md bg-white/20"
                        onPress={() => {}}
                        activeOpacity={0.7}
                    >
                        <Text className="text-white">Login</Text>
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
