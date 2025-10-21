import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ProductItemPage() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function getProduct() {
            const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            const data = await resp.json()
            setProduct(data)
        }

        getProduct()
    }, [])


    return (
        <div>
            {
                product && (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <img src={product.images[0]} alt="" />
                    </div>
                )
            }
        </div>
    )
}
