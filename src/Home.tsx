import { useEffect, useState } from "react"
import { KlutchWebScripts } from "@klutch-card/klutch-js";

export const Home = (): JSX.Element => {

    const [token, setToken] = useState("")

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        KlutchWebScripts.dataReceived(async (data: any) => {
            if (data.token) {
                setToken(data.token)
                setLoading(false)
            }
        })
        KlutchWebScripts.ready()
    }, [])







    return (
        <div className="home" onClick={() => KlutchWebScripts.openTemplate("list")}>
           <div className="ball">
                <span>85 Kgs</span>                
            </div> 
            <span>This Month</span>
            <span>3.2 Kg</span>
            <span>This Year</span>
            <span>85 Kg</span>
            <span>All Time</span>
            <span>85 Kg</span>
        </div>

    )
}

