import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface CardComponentProps {
    card: User;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="text-2xl font-bold">{card.name}</h1>
            <p className="text-gray-500">{card.email}</p>
        </div>
    );
}

export default CardComponent;
