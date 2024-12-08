import { useUserRole } from '@/hooks/user-role'
import { auth, db } from '@/server/firebaseConfig'
import { colors } from '@/styles/colors'
import type { Client } from '@/types/client'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Dna, Mail, MapPin, User } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

export default function Profile() {
    const [client, setClient] = useState<Client>({} as Client)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSigningOut, setIsSigningOut] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const { role } = useUserRole()

    const clientCollection = collection(db, 'cliente')

    async function handleLogout() {
        try {
            setIsSigningOut(true)
            await auth.signOut()
        } catch (error) {
            Alert.alert('Erro', 'Erro ao sair')
        } finally {
            setIsSigningOut(false)
        }
    }

    async function fetchClientInfo() {
        setIsLoading(true)

        try {
            if (role === 'ADMIN') {
                setIsAdmin(true)
                return
            }

            const clientq = query(
                clientCollection,
                where('email', '==', auth.currentUser?.email)
            )
            const clientQuerySnapshot = await getDocs(clientq)

            if (!clientQuerySnapshot.empty) {
                clientQuerySnapshot.forEach((doc) => {
                    setClient(doc.data() as Client)
                })
            }
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchClientInfo()
    }, [])

    if (isLoading) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Carregando...</Text>
            </View>
        )
    }

    if (isError) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Erro ao buscar informações</Text>
            </View>
        )
    }

    if (isAdmin) {
        return (
            <View className="px-6 py-4 flex-1">
                <Text className="text-2xl">Você é um administrador</Text>
                <Text className="text-gray-500 text-lg leading-tight mt-2">
                    Acesse o painel de administrador para gerenciar os usuários
                </Text>

                <Pressable
                    onPress={handleLogout}
                    disabled={isSigningOut}
                    className="bg-primary p-4 rounded-md mt-auto items-center"
                >
                    {isSigningOut ? (
                        <Text className="text-white">Carregando...</Text>
                    ) : (
                        <Text className="text-white">Sair</Text>
                    )}
                </Pressable>
            </View>
        )
    }

    return (
        <View className="px-6 py-4 flex-1">
            <Text className="text-2xl">Meu perfil</Text>

            <View className="gap-y-2 mt-4">
                <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center justify-center rounded-full bg-red-600/40 p-1">
                        <User size={16} color={colors.primary} />
                    </View>
                    <Text className="font-semibold  text-red-600">Nome:</Text>
                    <Text>{client.nome}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center justify-center rounded-full bg-red-600/40 p-1">
                        <Mail size={16} color={colors.primary} />
                    </View>
                    <Text className="font-semibold  text-red-600">Email:</Text>
                    <Text>{client.email}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center justify-center rounded-full bg-red-600/40 p-1">
                        <MapPin size={16} color={colors.primary} />
                    </View>
                    <Text className="font-semibold  text-red-600">
                        Endereço:
                    </Text>
                    <Text>{client.endereco || 'Não informado'}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center justify-center rounded-full bg-red-600/40 p-1">
                        <Dna size={16} color={colors.primary} />
                    </View>
                    <Text className="font-semibold  text-red-600">Genero:</Text>
                    <Text>{client.genero}</Text>
                </View>
            </View>

            <Pressable
                onPress={handleLogout}
                disabled={isSigningOut}
                className="bg-primary p-4 rounded-md mt-auto items-center"
            >
                {isSigningOut ? (
                    <Text className="text-white">Carregando...</Text>
                ) : (
                    <Text className="text-white">Sair</Text>
                )}
            </Pressable>
        </View>
    )
}
