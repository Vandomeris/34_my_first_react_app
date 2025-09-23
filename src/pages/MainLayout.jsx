import { NavLink, Outlet } from "react-router";
export default function MainLayout() {
    return (
        <div>
            <header>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/admin">Админка</NavLink>
                <NavLink to="/quizes">Квизы!</NavLink>
            </header>


            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    )
}
