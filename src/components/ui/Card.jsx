
export default function Card({ product }) {
    return (
        <div>

            <img src={product.thumbnail} alt="" />

            <div>
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.category}</p>

                    <p><span>{product.rating}</span> <span>{product.reviews.length}</span> </p>
                </div>

                <div>
                    <p>{product.price}</p>
                </div>
            </div>

        </div>
    )
}
