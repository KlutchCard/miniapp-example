import { useEffect, useState } from "react"
import { KlutchWebScripts, RecipePanelSize } from "@klutch-card/klutch-js";

export const Main = (): JSX.Element => {

    const [token, setToken] = useState("")


    const [recipeInstallId, setRecipeInstallId] = useState("")

    const [recipeInstallConfig, setRecipeInstallConfig] = useState()
    const [locationState, setLocationState] = useState()
    const [templateData, setTemplateData] = useState()

    useEffect(() => {
        KlutchWebScripts.dataReceived(async (data: any) => {
            /* this token can be used to call Klutch's backend directly from the client side */
            if (data.token) {
                setToken(data.token)
            }
            /* recipeInstallId is an unique id per installation of this miniapp */
            if (data.recipeInstallId) {
                setRecipeInstallId(data.recipeInstallId)
            }
            /* recipeInstallConfig is a dictionary per recipeInstall. 
                All panels of the miniapp share recipeInstallConfig */
            if (data.recipeInstallConfig) { 
                setRecipeInstallConfig(data.recipeInstallConfig)
            }
            /* templateData is a dictionary per panel and recipeInstall
            only this panel and receipinstall will see this data */
            if (data.templateData) {
                setTemplateData(data.templateData)
            }            
            /* any queryParam or location state will be shown here
            ex. https://url?param1=hello will show up as data.locationState.param1 */

            if (data.locationState) {
                setLocationState(data.locationState)
            }
            
        })
        KlutchWebScripts.ready()



    }, [])

    

    return (
        <div className="main">
            Hello World!
            <button onClick={() => KlutchWebScripts.openTemplate("/anotherPage", {state: {someState:1}})}>
                Opens another page when calling from a panel.
            </button>
            <button onClick={() => KlutchWebScripts.changePanelData({newPanelData: "hello"})}>
                Changes  "templateData" with this new data
            </button>
            <button onClick={() => KlutchWebScripts.changeRecipeInstallConfiguration({newConfig: "hello"})}>
                Changes  "recipeInstallConfig" with this new data
            </button>
            <button onClick={() => KlutchWebScripts.goto("/Another page on Klutch", {replace: false, state: {someState: 1}})}>
                Redirects user to another place on the Klutch App (i.e. "/cards" sends user to the cards page)
            </button>            
            <button onClick={() => KlutchWebScripts.goBack()}>
                Sends the user back 
            </button>
            <button onClick={() => KlutchWebScripts.addPanel("templateName", {someData: 1}, {type:"com.alloycard.entities.transaction.Tranasction", entityID: "12345"}, 50, RecipePanelSize.LARGE)}>
                Adds or replaces a  panel to home, card or transaction
            </button>
            <button onClick={() => KlutchWebScripts.openExternalUrl("https://google.com")}>
                Opens an extenal URL
            </button>
        </div>

    )
}



