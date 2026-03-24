import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    
    // const [data, setData] = useState({}); // use object

    // useEffect(() => {
    //     fetch("https://api.github.com/users/guptarg09")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);   // inside then
    //         });
    // }, []);

    return (
        <div>
            <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                Github Followers: {data.followers}
                <img className="w-20 h-20 rounded-full mx-auto" src={data.avatar_url} alt="avatar" /> 
            </h1>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/guptarg09");
    return res.json();
}