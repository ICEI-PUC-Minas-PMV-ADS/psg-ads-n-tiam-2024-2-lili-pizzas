import { Redirect } from 'expo-router'
import { auth } from '@/server/firebaseConfig'

export default function FirstPage() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            return <Redirect href="/(auth)" />
        } else {
            return <Redirect href="/(public)" />
        }
    })

    return auth.currentUser ? (
        <Redirect href="/(auth)" />
    ) : (
        <Redirect href="/(public)" />
    )
}
