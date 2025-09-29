import { NavLink } from "react-router";

export default function AdminPage() {
    return (
        <div>
            <p>Панель администратора квизов</p>

            <div>
                <NavLink to="/quizes/create">Создать Квиз</NavLink>
            </div>
        </div>
    )
}
