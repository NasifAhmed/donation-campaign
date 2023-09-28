import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    console.log(
        fetch("../data.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data[1]);
            })
    );

    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center mb-80">
                <h1 className="font-bold text-5xl">
                    I Grow By Helping People In Need
                </h1>
                <div className="flex justify-start items-center">
                    <input
                        type="text"
                        placeholder="Search here...."
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="bg-[#FF444A] inline-block btn btn-neutral">
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {data.map((data, index) => (
                    <Link to={`/details/${index}`}>
                        <div
                            style={{
                                color: `${data.category_bg}`,
                            }}
                            className="card card-compact w-96 bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img src={data.picture} className="w-full" />
                            </figure>
                            <div
                                style={{ backgroundColor: `${data.card_bg}` }}
                                className="card-body"
                            >
                                <h2
                                    style={{
                                        color: `${data.category_bg}`,
                                        backgroundColor: `${data.text_button_bg}`,
                                    }}
                                    className="badge font-medium text-sm"
                                >
                                    {data.category}
                                </h2>
                                <h1 className="font-semibold text-xl">
                                    {data.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Home;
