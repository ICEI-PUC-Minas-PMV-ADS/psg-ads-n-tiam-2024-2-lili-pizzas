import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from 'react'

type Role = 'CLIENT' | 'ADMIN'

interface UserRoleContextType {
    role: Role
    setRole: (newRole: Role) => void
    resetRole: () => void
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(
    undefined
)

interface UserRoleProviderProps {
    initialRole?: Role
    children: ReactNode
}

export const UserRoleProvider: React.FC<UserRoleProviderProps> = ({
    initialRole = 'CLIENT',
    children,
}) => {
    const [role, setRole] = useState<Role>(initialRole)

    const updateRole = useCallback((newRole: Role) => {
        setRole(newRole)
    }, [])

    const resetRole = useCallback(() => {
        setRole(initialRole)
    }, [initialRole])

    return (
        <UserRoleContext.Provider
            value={{ role, setRole: updateRole, resetRole }}
        >
            {children}
        </UserRoleContext.Provider>
    )
}

export const useUserRole = (): UserRoleContextType => {
    const context = useContext(UserRoleContext)
    if (!context) {
        throw new Error('useUserRole must be used within a UserRoleProvider')
    }
    return context
}
