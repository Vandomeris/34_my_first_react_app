import { NavLink, Outlet } from "react-router";
import { CartContext } from "../stores";
import { useState } from "react";
export default function MainLayout() {

    const [cart, setCart] = useState([])

    return (
        <CartContext value={[cart, setCart]}>


            <div className="container mx-auto">
                <header className="flex gap-x-5 justify-end py-4">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/admin">Админка</NavLink>
                    <NavLink to="/quizes">Квизы!</NavLink>
                    <NavLink to="/products">Товары</NavLink>
                    <NavLink className="relative" to="/cart">Корзина
                        <div
                            className="absolute -top-2 -right-2 text-[10px] bg-red-400 w-4 h-4 flex justify-center text-white rounded-full"
                        >{cart.length}</div>
                    </NavLink>
                </header>


                <main>
                    <Outlet />
                </main>

                <footer>

                </footer>
            </div>

        </CartContext>
    )
}
