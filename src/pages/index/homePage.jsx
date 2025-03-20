// src/pages/HomePage.jsx
import React from "react";
import GetInvolvedCards from "@components/GetInvolvedCards"; // Ensure the path is correct

const HomePage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Get Involved</h1>
            <GetInvolvedCards />
        </div>
    );
};

export default HomePage;
