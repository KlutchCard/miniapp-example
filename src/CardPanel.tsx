import { useEffect, useState } from "react"
import { KlutchWebScripts } from "@klutch-card/klutch-js";

export const CardPanel = (): JSX.Element => {

    const [token, setToken] = useState("")


    const [recipeInstallId, setRecipeInstallId] = useState("")

    useEffect(() => {
        KlutchWebScripts.dataReceived(async (data: any) => {
            if (data.token) {
                setToken(data.token)
            }
            if (data.recipeInstallId) {
                setRecipeInstallId(data.recipeInstallId)
            }
            
        })
        KlutchWebScripts.ready()
    }, [])
    

    return (
        <div className="main">
            
        </div>

    )
}



