import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { auth, db } from '@/server/firebaseConfig'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { Controller, useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router, useFocusEffect } from 'expo-router'
import { addDoc, collection } from 'firebase/firestore'

interface SignUpForm {
    name: string
    email: string
    telefone: string
    genero: string
    endereco: string
    data_nascimento: string
    password: string
    confirmPassword: string
}

export default function StudentSignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        handleSubmit,
        setError,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            telefone: '',
            genero: '',
            endereco: '',
            data_nascimento: '',
            password: '',
            confirmPassword: '',
        } as SignUpForm,
    })

    const clientCollection = collection(db, 'cliente')

    async function onSubmit(data: SignUpForm) {
        try {
            setIsLoading(true)
            await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await addDoc(clientCollection, {
                email: data.email,
                endereco: data.endereco,
                genero: data.genero,
                nome: data.name,
                senha: data.password,
                telefone: data.telefone,
            })

            Alert.alert('Sucesso', 'Conta criada com sucesso!', [
                {
                    text: 'OK',
                },
            ])
        } catch (error) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Erro ao criar conta',
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
            <View className="w-full px-8 mt-12">
                <View className="items-center justify-center mb-12">
                    <Text className="text-white text-4xl font-semibold">
                        Cadastre-se
                    </Text>
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ justifyContent: 'flex-end' }}
                >
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="gap-2">
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
                                    <Text className="text-white font-bold text-sm">
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
                            <View className="gap-2 mt-4">
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
                                    <Text className="text-white font-bold text-sm">
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
                            <View className="gap-2 mt-4">
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

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="gap-2 mt-4">
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
                                    <Text className="text-white font-bold text-sm">
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
                            <View className="gap-2 mt-4">
                                <TextInput
                                    className="px-4 py-4 bg-white rounded-md"
                                    placeholder="Endereço"
                                    selectionColor={colors.primary}
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    enterKeyHint="next"
                                />
                                {errors.endereco && (
                                    <Text className="text-white font-bold text-sm">
                                        {errors.endereco?.message === ''
                                            ? 'Insira um endereço'
                                            : errors.endereco?.message}
                                    </Text>
                                )}
                            </View>
                        )}
                        name="endereco"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="gap-2 mt-4">
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
                                    <Text className="text-white font-bold text-sm">
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
                            validate: (value) =>
                                value.length >= 6 || 'Senha muito curta!',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="gap-2 mt-4">
                                <View className="items-center flex-row relative bg-white rounded-md">
                                    <TextInput
                                        enterKeyHint="send"
                                        secureTextEntry={!isPasswordVisible}
                                        autoCapitalize="none"
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
                                            setIsPasswordVisible(
                                                !isPasswordVisible
                                            )
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

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            validate: (value) =>
                                value === getValues('password') ||
                                'As senhas não coincidem!',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="gap-2 mt-4">
                                <View className="items-center flex-row relative bg-white rounded-md">
                                    <TextInput
                                        enterKeyHint="send"
                                        secureTextEntry={
                                            !isConfirmPasswordVisible
                                        }
                                        autoCapitalize="none"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        selectionColor={colors.primary}
                                        value={value}
                                        className="flex-1 px-4 py-4"
                                        placeholder="Confirme a senha"
                                    />

                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() =>
                                            setIsConfirmPasswordVisible(
                                                !isConfirmPasswordVisible
                                            )
                                        }
                                        className="mr-4"
                                    >
                                        <Feather
                                            name={
                                                isConfirmPasswordVisible
                                                    ? 'eye'
                                                    : 'eye-off'
                                            }
                                            size={20}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>
                                </View>

                                {errors.confirmPassword && (
                                    <Text className="text-white font-bold text-sm">
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
                            onPress={handleSubmit(onSubmit)}
                            disabled={isLoading}
                            activeOpacity={0.7}
                        >
                            {isLoading ? (
                                <Text className="text-white">
                                    Carregando...
                                </Text>
                            ) : (
                                <Text className="text-white">Cadastrar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}
