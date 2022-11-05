import { createContext, ReactNode } from "react";


interface UserProps{
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface AuthProvideProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProvideProps){

    async function signIn(){
        console.log("Vamos logar!")
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: "Jakeline",
                avatarUrl: "https://github.com/jakeline-freitas.png"
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
