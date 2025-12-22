import ManifestosHero from "@/components/manifestos/ManifestosHero";
import ManifestosVision from "@/components/manifestos/ManifestosVision";
import { Helmet } from "react-helmet-async";

const Manifesto = () => {
    return (
        <>
        
        <Helmet>
            <title>Manifesto | MyApp</title>
        </Helmet>
        
        <ManifestosHero/>
        <ManifestosVision/>
        
        </>
    );
};

export default Manifesto;