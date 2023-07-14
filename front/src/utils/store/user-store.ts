import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {LoginResponse} from "@/utils/api";

export type User = LoginResponse['user'] | undefined
interface UserState {
    user: User
    setUser: (newUser: User) => void
}

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: undefined,
                setUser: (newUser) => set(() => ({ user: newUser })),
            }),
            {
                name: 'user-storage',
            }
        )
    )
)