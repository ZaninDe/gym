import { Loading } from "@components/Loading";
import { UserDTO } from "@dtos/UserDTO";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";
import { ReactNode, createContext, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  setUser: (user: UserDTO) => void;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Gabriel',
    email: 'zanin@gmail.com',
    avatar: 'zanin.png'
  })
  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
    {children}
    </AuthContext.Provider>
  )
}