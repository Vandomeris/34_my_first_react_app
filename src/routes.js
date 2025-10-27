import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import QuizesPage from "./pages/QuizesPage";
import MainLayout from "./pages/MainLayout";
import CreateQuizPage from "./pages/CreateQuizPage";
import PlayQuizPage from "./pages/PlayQuizPage";
import ProductsPage from "./pages/ProductsPage";
import ProductItemPage from "./pages/ProductItemPage";
import CartPage from "./pages/CartPage";


export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage,
            },
            {
                path: 'admin',
                Component: AdminPage,
            },
            {
                path: 'quizes',
                Component: QuizesPage,

            },
            {
                path: 'quizes/create',
                Component: CreateQuizPage
            },
            {
                path: 'quizes/:id',
                Component: PlayQuizPage
            },
            {
                path: 'products',
                Component: ProductsPage
            },
            {
                path: 'products/:id',
                // loader: async ({ params }) => {
                //     const product = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
                //     return { product: product }
                // },
                Component: ProductItemPage
            },
            {
                path: 'cart',
                Component: CartPage
            }
        ]
    }
]);