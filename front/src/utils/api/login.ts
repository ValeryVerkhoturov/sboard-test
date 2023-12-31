const loginRoute = '/api/auth/login'
export type LoginRequest = {
    email: string
    password: string
}
export type LoginResponse = {
    user?: {
        id: string,
        createdAt: string,
        updatedAt: string,
        firstName: string,
        lastName: string,
        username: string,
        role: string,
        email: string,
        "avatar": string,
        phone: string,
        isActive: boolean
    },
    token?: {
        expiresIn: number,
        accessToken: string
    }
    error?: string,
    statusCode?: number
}
export const login = async (req: LoginRequest) => {
    'use client'

    const body = JSON.stringify(req)

    const res = await fetch(loginRoute,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body,
        })
    return ((await res.json()) as LoginResponse)
}
