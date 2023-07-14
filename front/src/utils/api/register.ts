const registerRoute = '/api/auth/register'
export type RegisterRequest = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
}
export type RegisterResponse = {
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
    error?: string,
    statusCode?: number
}
export const register = async (req: RegisterRequest) => {
    'use client'

    const body = JSON.stringify(req)

    const res = await fetch(registerRoute,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body,
        })
    return ((await res.json()) as RegisterResponse)
}
