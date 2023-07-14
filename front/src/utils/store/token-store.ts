import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface TokenState {
    token: string | undefined
    setToken: (newToken: string | undefined) => void
    removeToken: () => void
}

export const useTokenStore = create<TokenState>()(
    devtools(
        persist(
            (set) => ({
                token: undefined,
                setToken: (newToken) => set((state) => ({ token: newToken })),
                removeToken: () => set({ token: undefined })
            }),
            {
                name: 'token-storage',
            }
        )
    )
)