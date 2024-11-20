import { Redirect } from 'expo-router'
import { auth } from '@/server/firebaseConfig'

export default function FirstPage() {
    return auth.currentUser ? (
        <Redirect href="/(auth)" />
    ) : (
        <Redirect href="/(public)" />
    )
}
