import React from "react";
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from './StatusDisplay'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import { Link } from "react-router-dom";
import Ticket from "../pages/Ticket";

const TicketCard = ({color,ticket}) => {

    return(
        <>
            <div className="ticket-card">
                
                <Link to={`/tickets/${ticket.documentId}`} id="link">
                    <div className="ticket-color">
                    </div>
                    <h3>{ticket.title}</h3>
                    <AvatarDisplay ticket={ticket} />
                    <StatusDisplay />
                    <PriorityDisplay />
                    <ProgressDisplay />

                </Link>
                <DeleteBlock />
            </div>
        </>
    )

}

export default TicketCard;