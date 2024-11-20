import { Pressable, Text, View } from 'react-native'
import { auth } from '@/server/firebaseConfig'
import { signInWithEmailAndPassword } from '@firebase/auth'

export default function WorkerLogin() {
    async function handleLogin() {
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
        <View className="flex-1 items-center justify-center bg-gray-50">
            <Pressable onPress={handleLogin}>
                <Text>Worker logar</Text>
            </Pressable>
        </View>
    )
}
