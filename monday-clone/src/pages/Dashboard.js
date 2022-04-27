import React from "react";
import TicketCard from "../components/TicketCard";

const Dashboard = () => {


    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Saul Gasca',
            avatar:'https://res.cloudinary.com/fag-die-casting/image/upload/v1636399214/1636399212651.png',
            status:'done',
            priority:5,
            progress: 40,
            description:'Make a video how to work with NFTs safely',
            timestamp: '2022-04-22T07:36:17+0000'

        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Buy and Sell AI module',
            owner: 'Saul Gasca',
            avatar:'https://res.cloudinary.com/fag-die-casting/image/upload/v1636399214/1636399212651.png',
            status:'done',
            priority:2,
            progress: 70,
            description:'Make a video about AI',
            timestamp: '2022-04-22T07:36:17+0000'

        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Buuld an AI Bot',
            owner: 'Saul Gasca',
            avatar:'https://res.cloudinary.com/fag-die-casting/image/upload/v1640974790/1640974789094.png',
            status:'working on it',
            priority:3,
            progress: 10,
            description:'Make a video about BOT',
            timestamp: '2022-04-22T07:36:17+0000'

        }
    ]

    const uniqueCategories = [
       ...new Set(tickets?.map(({category}) => category))
    ]

    console.log("UNIQUE CATEGORIES --> ",uniqueCategories)

    return(
        <>
        <div className="dashboard">
            <h1>My Project</h1>
            <div className="ticket-container">
               {tickets && uniqueCategories.map((uniqueCategory,categoryIndex) => (
                   <div key={categoryIndex}>
                       <h3>{uniqueCategory}</h3>
                       {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket,ticketIndex) =>(

                        <TicketCard 
                        id={ticketIndex} 
                        color={filteredTicket.color}
                        ticket={filteredTicket}
                        />

                       ))}
                    </div>
               ))}
            </div>
        </div>
        </>
    )

}

export default Dashboard;