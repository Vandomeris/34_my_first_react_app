import { NavLink, Outlet } from "react-router";
export default function MainLayout() {
    return (
        <div>
            <header className="flex gap-x-5 justify-center py-4">
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
