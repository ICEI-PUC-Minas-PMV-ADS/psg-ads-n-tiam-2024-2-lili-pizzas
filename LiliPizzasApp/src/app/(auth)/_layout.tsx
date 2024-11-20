import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { colors } from '@/styles/colors'
import { Image, Platform } from 'react-native'
import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabLayout() {
    const { bottom } = useSafeAreaInsets()

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 16,
                },
                headerRight: () => (
                    <Image
                        source={require('@/assets/pizza.png')}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        resizeMode="contain"
                    />
                ),
                headerTintColor: colors.white,
                headerShadowVisible: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.text,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    paddingBottom: Platform.OS === 'ios' ? bottom : 14,
                    ...(Platform.OS === 'android' && { height: 64 }),
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Octicons name="home" size={size - 2} color={color} />
                    ),
                    tabBarLabel: 'Início',
                    title: 'Início',
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="cog-outline"
                            size={size - 2}
                            color={color}
                        />
                    ),
                    tabBarLabel: 'Configurações',
                    title: 'Configurações',
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome
                            name="whatsapp"
                            size={size - 2}
                            color={color}
                        />
                    ),
                    tabBarLabel: 'Contato',
                    title: 'Contato',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size - 2} color={color} />
                    ),
                    tabBarLabel: 'Perfil',
                    title: 'Perfil',
                }}
            />

            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
        </Tabs>
    )
}
