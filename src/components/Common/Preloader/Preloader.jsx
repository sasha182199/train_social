import loadingGif from "../../../images/ajax_loader.gif";
import React from "react";


const Preloader = (props) => {
    return (

        <img alt="test" className="preloader" src={loadingGif}/>

        )

}

export default Preloader;