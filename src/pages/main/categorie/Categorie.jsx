import CategorieGrid from "@/components/categories/CategorieGrid";
import CategorieHero from "@/components/categories/CategorieHero";
import { Helmet } from "react-helmet-async";

const Categorie = () => {
    return (
        <div>
           
           <Helmet>
            <title>Categorie | MyApp</title>
           </Helmet>

           <CategorieHero/>
           <CategorieGrid/>
        </div>
    );
};

export default Categorie;
