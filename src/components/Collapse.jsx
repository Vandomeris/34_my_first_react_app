import { useState } from "react"

export default function Collapse({ title, content }) {


    const [isVisible, setIsVisible] = useState(false)



    return (
        <div>


            <h2 className="text-2xl text-orange-500 font-bold">Элемент коллапс</h2>


            <div className="bg-gray-400 max-w-[600px] mx-auto p-5">
                <button className="pb-3" onClick={() => setIsVisible(!isVisible)}
                ><h4>{title}</h4></button>
                {
                    isVisible &&
                    (<p className="border-t border-white">{content}</p>)
                }

            </div>

        </div>
    )

}