import LatestWinner from "@/components/winners/LatestWinner";
import WinnerHero from "@/components/winners/WinnerHero";
import { Helmet } from "react-helmet-async";

const Winner = () => {
    return (
        <>
        
        <Helmet>
            <title>Winner | MyApp</title>
        </Helmet>
        
        <WinnerHero/>
        <LatestWinner/>
        
        </>
    );
};

export default Winner;