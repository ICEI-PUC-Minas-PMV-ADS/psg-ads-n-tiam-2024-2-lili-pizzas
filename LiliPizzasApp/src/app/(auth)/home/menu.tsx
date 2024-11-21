import { Entypo } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import {
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Pizza, Salad, Cookie } from 'lucide-react-native'
import { useState } from 'react'
import { colors } from '@/styles/colors'

type Category = 'carnes' | 'vegetarianas' | 'doces'

export default function Menu() {
    const [selectedTab, setSelectedTab] = useState<Category>('carnes')

    const menuItems: Record<Category, string[]> = {
        carnes: [
            'Carne',
            'Salaminho',
            'A Moda',
            'Carne Seca com Pimenta',
            'Calabresa',
            'Frango com Bacon',
            'Frango com Catupiry',
            'Lombinho',
            'Milho com Bacon',
            'Pepperoni',
            'Presunto de Parma',
            'Presunto',
        ],
        vegetarianas: [
            'Abobrinha',
            'Alho Poró',
            'Brie com Damasco',
            'Queijo com Goiabada',
            'Quatro Queijos',
            'Marguerita',
            'Rúcula com Tomate Seco',
        ],
        doces: [
            'Brigadeiro',
            'Morango com Nutella',
            'Confete',
            'Banana com Canela',
        ],
    }

    const categoryIcons: Record<Category, React.JSX.Element> = {
        carnes: <Pizza className="h-5 w-5" color={colors.primary} />,
        vegetarianas: <Salad className="h-5 w-5" color={colors.primary} />,
        doces: <Cookie className="h-5 w-5" color={colors.primary} />,
    }

    return (
        <View className="flex-1">
            <Stack.Screen
                options={{
                    headerTitle: 'Cardápio',
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

            <View className="flex-row mt-2">
                {Object.keys(menuItems).map((category) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setSelectedTab(category as Category)}
                        key={category}
                        className="flex flex-1 items-center justify-center p-2"
                        style={{
                            borderBottomColor: colors.primary,
                            borderBottomWidth: selectedTab === category ? 2 : 0,
                        }}
                    >
                        {categoryIcons[category as Category]}
                        <Text className="mt-1 text-sm">
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView
                className="mt-4 px-4 flex-1"
                contentContainerClassName="gap-4"
            >
                {menuItems[selectedTab].map((item) => (
                    <View
                        key={item}
                        className="flex-row items-center gap-2 border rounded-lg border-gray-300 px-2 py-2"
                    >
                        <Text className="text-lg">{item}</Text>
                    </View>
                ))}

                {menuItems[selectedTab].length === 0 && (
                    <View className="items-center justify-center">
                        <Text>Nenhum item encontrado</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}
