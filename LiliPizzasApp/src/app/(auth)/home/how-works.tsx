import { Entypo } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function HowWorks() {
    return (
        <View className="flex-1 p-4">
            <Stack.Screen
                options={{
                    headerTitle: 'Como funciona',
                    headerLeft: () => (
                        <Pressable
                            className="flex-row items-center -ml-4"
                            onPress={() => router.replace('/(auth)')}
                        >
                            <Entypo
                                name="chevron-small-left"
                                size={24}
                                color="white"
                            />
                            <Text className="text-white">Voltar</Text>
                        </Pressable>
                    ),
                }}
            />

            <Text className="text-2xl font-bold">Como funciona</Text>
            <Text className="text-lg leading-normal mt-4">
                O cliente seleciona uma data e preenche algumas informações
                prévias para o sistema. Essa solicitação de evento é enviada ao
                funcionário do Lili Pízza que confirma a solicitação ou não.
                Após a confirmação passamos para a parte de orçamento onde o
                cliente consegue revisar alguns itens se desejar alterar. Após
                isso passamos para a parte de contrato e pagamento de 30% do
                valor total para confirmar o agendamento do evento.
            </Text>
        </View>
    )
}
