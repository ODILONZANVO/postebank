import Titre from "../Component/Titre";
import Caracteristique from "../Component/Caracteristique";
import Contact from "../Component/Contact";
import Dossier from "../Component/Dossier";
export function Page(){
    return(
        <div>
            <p className="container">
                <Titre/>
                <Caracteristique/>
                <Contact/>
                <Dossier/>
            </p>
        </div>
    )
}export default Page;

