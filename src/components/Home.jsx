import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center mt-32 mb-80">
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
    );
};

export default Home;
