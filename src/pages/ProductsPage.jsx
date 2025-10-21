import { useEffect, useState } from "react"

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function getProducts() {
            const resp = await fetch('https://api.escuelajs.co/api/v1/products')
            console.log(resp)
            if (resp.ok) {
                const data = await resp.json()
                setProducts(data)
            }

        }

        getProducts()

    }, [])


    async function createProduct(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        const resp = await fetch('https://api.escuelajs.co/api/v1/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": formData.get('title'),
                "price": Number(formData.get('price')),
                "description": formData.get('description'),
                "categoryId": Number(formData.get('cat_id')),
                "images": ["https://placehold.co/600x400"]
            })
        })
        const data = await resp.json()
        console.log(data)
    }

    return (
        <div>
            <h1>Список товаров</h1>
            <form onSubmit={(event) => createProduct(event)} className="flex flex-col gap-5">
                <p>СОздать товар</p>


                <input name="title" className="p-2 border" type="text" placeholder="title" />
                <input name="price" className="p-2 border" type="text" placeholder="price" />
                <textarea name="description" className="p-2 border" placeholder="Description"></textarea>
                <input name="cat_id" className="p-2 border" type="text" placeholder="Cat ID" />

                <button className="border w-fit mx-auto p-5">Создать</button>

            </form>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map(product => (
                        <div>
                            <h3>{product.title}</h3>
                            <img className="w-full" src={product.images[0]} alt="" />
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
