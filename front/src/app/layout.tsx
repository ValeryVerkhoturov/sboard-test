'use client'

import React, {useState} from 'react'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import {Bar, Hamburger, Logo, MainNav, NavBarToggle, NavButton, NavLi, NavLink} from "@/components/layout";
import {useTokenStore} from "@/utils/store/token-store";
import {useUserStore} from "@/utils/store/user-store";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [displayNav, setDisplayNav] = useState<'flex' | 'none'>('none')
    const {token, removeToken} = useTokenStore()
    const {user, setUser} = useUserStore()

    const toggleNavBar = () => setDisplayNav(displayNav === 'flex' ? 'none' : 'flex')
    const logout = () => {
        removeToken()
        setUser(undefined)
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <Bar>
                        <NavBarToggle onClick={toggleNavBar}>
                            <Hamburger />
                        </NavBarToggle>
                        <Logo href="#">logo</Logo>
                        <MainNav $display={displayNav}>
                            <NavLi>
                                <NavLink href="/posts" >Посты</NavLink>
                            </NavLi>
                            {token && typeof window !== 'undefined' ? (
                                <>
                                    <NavLi>
                                        {user && <NavLink href="/me">{user.firstName}</NavLink>}
                                    </NavLi>
                                    <NavLi>
                                        <NavButton onClick={logout} >Выйти</NavButton>
                                    </NavLi>
                                </>
                            ) : (
                                <>
                                    <NavLi>
                                        <NavLink href="/login" >Войти</NavLink>
                                    </NavLi>
                                    <NavLi>
                                        <NavLink href="/register" >Зарегистрироваться</NavLink>
                                    </NavLi>
                                </>
                            ) }
                        </MainNav>
                    </Bar>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
