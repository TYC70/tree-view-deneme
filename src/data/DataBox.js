import { useState } from "react"

    export const Data = () => {
    const [name, setName] = useState("");
    const [selfPoint, setSelfPoint] = useState(0);
    return(
        <div>
            <button onClick={() => setName}>MENU</button>
        </div>
    )
}   