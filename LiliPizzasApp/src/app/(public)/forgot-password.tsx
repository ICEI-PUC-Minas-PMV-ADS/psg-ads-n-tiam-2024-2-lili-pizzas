import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '@/server/firebaseConfig'
import { sendPasswordResetEmail } from '@firebase/auth'
import { Controller, useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { colors } from '@/styles/colors'
import { router, useFocusEffect } from 'expo-router'

export default function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(data: { email: string }) {
        try {
            setIsLoading(true)

            await sendPasswordResetEmail(auth, data.email)

            Alert.alert('Sucesso', 'Email enviado com sucesso!', [
                {
                    text: 'Ok',
                    onPress: () => {
                        router.back()
                    },
                },
            ])
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: 'Email inválido',
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
            <View className="w-full px-8 mt-6">
                <View className="items-center justify-center mb-12">
                    <Text className="text-white text-center text-4xl font-semibold">
                        Enviar email de redefinição de senha
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
                                selectionColor={colors.primary}
                                placeholderTextColor={colors.gray400}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                enterKeyHint="next"
                            />
                            {errors.email && (
                                <Text className="text-white font-bold text-sm">
                                    {errors.email?.message === ''
                                        ? 'Insira um email'
                                        : errors.email?.message}
                                </Text>
                            )}
                        </View>
                    )}
                    name="email"
                />

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
                            <Text className="text-white">Enviar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
