'use client'

import React, {useState} from 'react'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import {Bar, Hamburger, Logo, MainNav, NavBarToggle, NavButton, NavLi, NavLink} from "@/components/layout";
import {useUserStore} from "@/utils/store/user-store";
import {useTokenStore} from "@/utils/store/token-store";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [displayNav, setDisplayNav] = useState<'flex' | 'none'>('none')
    const {token, removeToken} = useTokenStore()

    const toggleNavBar = () => setDisplayNav(displayNav === 'flex' ? 'none' : 'flex')
    const logout = () => removeToken()

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
                            {token ? (
                                <NavLi>
                                    <NavButton onClick={logout} >Выйти</NavButton>
                                </NavLi>
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
