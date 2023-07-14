'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ['latin'] })

const NavBar = dynamic(() => import('@/components/navbar'), {ssr: false})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <NavBar />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
