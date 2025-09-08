import Card from "../ui/Card";

export default function PodborkaTovarov({ title, description, description_color, products }) {
    return (
        <section>

            <h3 className="text-4xl font-bold"><span>{title}.</span> <span style={{ color: description_color }} >{description}</span> </h3>

            <div>
                {
                    products.map((product) => <Card product={product} />)
                }
            </div>

        </section>
    )
}
