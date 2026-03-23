import React from "react";

function About () {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Image Description"
                    className="object-cover object-center h-full w-full"
                />
                <div className="absolute inset-0 bg-gray-900/75 flex flex-col justify-center items-center text-center p-4">
                    <h2 className="text-2xl font-bold text-white sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-xl">
                        We are a team of passionate individuals dedicated to providing the best services to our customers. Our mission is to create innovative solutions that make a difference in people's lives.
                    </p>
                </div>
            </aside>
        </div>
    );
}

export default About;