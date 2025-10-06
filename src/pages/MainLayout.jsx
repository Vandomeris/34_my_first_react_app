import { NavLink, Outlet } from "react-router";
export default function MainLayout() {
    return (
        <div className="container mx-auto">
            <header className="flex gap-x-5 justify-end py-4">
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
