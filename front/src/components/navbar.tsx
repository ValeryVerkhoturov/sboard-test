import {Bar, Hamburger, Logo, MainNav, NavBarToggle, NavButton, NavLi, NavLink} from "@/components/layout";
import {useState} from "react";
import {useTokenStore} from "@/utils/store/token-store";
import {useUserStore} from "@/utils/store/user-store";

export default function NavBar() {
    const [displayNav, setDisplayNav] = useState<'flex' | 'none'>('none')
    const {token, removeToken} = useTokenStore()
    const {user, setUser} = useUserStore()

    const toggleNavBar = () => setDisplayNav(displayNav === 'flex' ? 'none' : 'flex')
    const logout = () => {
        removeToken()
        setUser(undefined)
    }

    return (
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
                    <>
                        <NavLi>
                            {user && <NavLink href="/me">Профиль</NavLink>}
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
    )
}