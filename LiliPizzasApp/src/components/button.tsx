import { Text, TouchableOpacity } from 'react-native'

interface Props {
    title: string
    onPress: () => void
}

export default function Button({ title, onPress }: Props) {
    return (
        <TouchableOpacity
            className="w-full py-2 px-4 "
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}
