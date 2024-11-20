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
        <View>
            <Text>Profile</Text>

            <Pressable onPress={handleLogout}>
                {isSigningOut ? <Text>Carregando...</Text> : <Text>Sair</Text>}
            </Pressable>
        </View>
    )
}
