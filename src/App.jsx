import PodborkaTovarov from "./components/blocks/PodborkaTovarov";
import Header from "./components/ui/Header";
import { products } from "./data";
export default function App() {

  return (

    <div>
      <Header />


      <PodborkaTovarov title="Recommendations" description="Best matching products for you" description_color="#f60000" products={products} />
    </div>

  )

}