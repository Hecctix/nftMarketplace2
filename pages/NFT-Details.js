import react from "react";

//INTERNAL IMPORT

import { Button, Category, Brand } from "../components/componentindex";
import  NFTDetailsPage from "../NFTDetailsPage/NFTdetailsPage";

const NFTDetails = () => {
    return (
        <div>
            <NFTDetailsPage />
            <Category />
            <Brand />
        </div>
    );
};

export default NFTDetails;