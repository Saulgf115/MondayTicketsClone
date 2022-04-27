import React from "react";
import Ticket from "../pages/Ticket";
import blankAvatar from "../images/Elden.jpg"

const AvatarDisplay = ({ticket}) => {

    return(
        <>
            <div className="avatar-container">
               <div className="image-container">
                    <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of ' + ticket.owner} /> 
               </div>
            </div>
        </>
    )

}

export default AvatarDisplay;