import { useContext, useEffect, useState } from "react"
import { CartContext } from "../stores"

export default function Counter({ quantity, id }) {

    const [number, setNumber] = useState(quantity)

    const [cart, setCart] = useContext(CartContext)

    function changeQuantity(id, newQuantity) {
        if (newQuantity === 0) {
            setCart(
                cart.filter(element => element.id !== id)
            )
        } else {
            setCart(
                cart.map(element => {
                    if (element.id == id) {
                        element.quantity = newQuantity
                    }
                    return element
                })
            )
        }

    }


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

    useEffect(() => {
        changeQuantity(id, number)
    }, [number])


    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{number}</span>
            <button onClick={increment}>+</button>
        </div>

    )

}