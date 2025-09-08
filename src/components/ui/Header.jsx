export default function Header() {
    return (
        <header className="container mx-auto flex justify-between items-center py-6 sm:flex-row flex-col gap-5">
            <a href="#"><img src="/logo.svg" alt="" /></a>


            <input className="py-4 px-8 bg-[#F8F8F8] text-[#4B5563] rounded-3xl max-w-[400px] w-full" type="text" placeholder="Search in products..." />



            <div className="flex gap-x-[22px] items-center">
                <a href="#"><img src="/cart.svg" alt="" /></a>
                <a href="#"><img src="/user-btn.svg" alt="" /></a>
            </div>
        </header>
    )
}
