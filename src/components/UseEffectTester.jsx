import { useEffect, useState } from "react"

export default function UseEffectTester() {

    const [summa, setSumma] = useState(null)
    const [itog, setItog] = useState(null)
    const [currency, setCurrency] = useState('$')

    function exchange() {
        switch (currency) {
            case '$':
                setItog((summa / 90).toFixed(2))
                break;
            case 'euro':
                setItog((summa / 101).toFixed(2))
        }
    }

    useEffect(() => {
        exchange()
    }, [currency, summa])

    return (
        <div>
            <input value={summa} onChange={(e) => setSumma(e.target.value)} type="number" placeholder="Введите сумму обмена" />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="$">$</option>
                <option value="euro">Euro</option>
            </select>
            <div>
                <h3>Вы получите</h3>
                <p>{itog}</p>
            </div>
        </div>
    )
}
