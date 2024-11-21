import { auth } from '@/server/firebaseConfig'
import { useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

export default function Profile() {
    const [isSigningOut, setIsSigningOut] = useState(false)

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
    return (
        <View className="px-6 py-4 flex-1">
            <Text className="text-2xl">Meu perfil</Text>

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
