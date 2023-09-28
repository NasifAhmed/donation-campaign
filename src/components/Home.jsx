import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const rawData = useLoaderData();
    const [data, setData] = useState(rawData);

    console.log(data);
    console.log(
        fetch("../data.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data[1]);
            })
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.search.value) {
            setData(
                rawData.filter((element) => {
                    if (
                        element.category.toLowerCase() ===
                        e.target.search.value.toLowerCase()
                    ) {
                        return element;
                    }
                })
            );
        } else {
            setData(rawData);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center mb-80">
                <h1 className="font-bold text-5xl">
                    I Grow By Helping People In Need
                </h1>
                <form
                    className="flex justify-start items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Search here...."
                        name="search"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="bg-[#FF444A] inline-block btn btn-neutral"
                    />
                </form>
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
