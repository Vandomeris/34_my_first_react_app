import { users } from "../data"


export default function UserList() {



    return (
        <div>
            <h2>Список зарегестрированных пользователей</h2>

            {
                users.map((user) => (
                    <div>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>{user.phone}</span>
                    </div>
                ))
            }


        </div>
    )
}