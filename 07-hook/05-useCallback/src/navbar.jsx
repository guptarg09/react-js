import React, { memo } from "react";

const Navbar = ({adjective, getAdjective}) => {
    console.log("navbar is rendered")
    return(
        <div>
            I'm {adjective} navbar
            <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
        </div>
    )
}
export default memo(Navbar)