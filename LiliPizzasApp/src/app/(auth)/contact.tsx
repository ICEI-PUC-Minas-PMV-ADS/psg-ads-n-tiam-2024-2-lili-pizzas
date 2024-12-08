import { Linking, Text, TouchableOpacity, View } from 'react-native'

export default function Contact() {
    function handleGoToWhatsapp() {
        Linking.openURL(
            'https://api.whatsapp.com/message/YA3SMJVVPXYSE1?autoload=1&app_absent=0'
        )
    }

    return (
        <View className="p-4">
            <Text className="text-2xl">Entre em contato conosco</Text>
            <Text className="mt-2 text-gray-500">
                Clique no botão abaixo para ser direcionado para o nosso
                whatsapp
            </Text>

            <TouchableOpacity
                className="bg-primary mt-6 p-3 rounded-md items-center"
                onPress={handleGoToWhatsapp}
            >
                <Text className="text-white">Ir para o whatsapp</Text>
            </TouchableOpacity>
        </View>
    )
}
