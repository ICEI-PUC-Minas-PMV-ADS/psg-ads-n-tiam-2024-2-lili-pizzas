import AdminHomeCards from '@/components/admin-home-cards'
import ClientHomeCards from '@/components/client-home-cards'
import { useUserRole } from '@/hooks/user-role'
import { auth, db } from '@/server/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

export default function Home() {
    const [clientName, setClientName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const { role, setRole } = useUserRole()

    const windowWidth = Dimensions.get('window').width

    const clientCollection = collection(db, 'cliente')
    const colaboratorCollection = collection(db, 'colaborador')

    async function fetchClientInfo() {
        setIsLoading(true)

        try {
            const clientq = query(
                clientCollection,
                where('email', '==', auth.currentUser?.email)
            )
            const clientQuerySnapshot = await getDocs(clientq)

            const colaboratorq = query(
                colaboratorCollection,
                where('email', '==', auth.currentUser?.email)
            )

            const colaboratorQuerySnapshot = await getDocs(colaboratorq)

            if (!clientQuerySnapshot.empty) {
                clientQuerySnapshot.forEach((doc) => {
                    setClientName(doc.data().nome)
                })

                setRole('CLIENT')
            }

            if (!colaboratorQuerySnapshot.empty) {
                colaboratorQuerySnapshot.forEach((doc) => {
                    setClientName(doc.data().nome)
                })

                setRole('ADMIN')
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

    return (
        <View className="flex-1">
            <Image
                source={require('@/assets/home.png')}
                alt="Logo"
                resizeMode="stretch"
                style={{
                    width: windowWidth,
                    height: 350,
                }}
            />

            <View className="px-6 gap-6 rounded-t-[20px] bg-white -mt-12 flex-1">
                <View className="mt-6">
                    <Text>{role}</Text>
                    <Text className="text-2xl">Bem vindo ao Lili Pizza</Text>
                    <Text className="text-lg text-gray-500">
                        Olá {clientName}
                    </Text>
                </View>

                {role === 'CLIENT' && <ClientHomeCards />}

                {role === 'ADMIN' && <AdminHomeCards />}
            </View>
        </View>
    )
}
