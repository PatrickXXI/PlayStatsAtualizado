// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    id_login: string | null;
    setIdLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

// Definindo o tipo para o AuthProvider, que aceita a propriedade children
interface AuthProviderProps {
    children: ReactNode; // Aqui definimos que 'children' pode ser qualquer coisa que React pode renderizar
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// O AuthProvider agora sabe que pode receber children
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [id_login, setIdLogin] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ id_login, setIdLogin }}>
            {children} 
        </AuthContext.Provider>
    );
};