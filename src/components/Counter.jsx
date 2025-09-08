import { useState } from "react"

export default function Counter() {

    const [number, setNumber] = useState(1)

    function increment() {
        if (number < 10) {
            setNumber(number + 1)
        }
    }

    function decrement() {
        if (number > 0) {
            setNumber(number - 1)

        }
    }


    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{number}</span>
            <button onClick={increment}>+</button>
        </div>

    )

}