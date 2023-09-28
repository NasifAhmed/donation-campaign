import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDonation } from "../utility/localStorage";

const Donation = () => {
    const [data, id] = useLoaderData();
    console.log("hello" + data);

    function handleClick() {
        setDonation(id);
        toast("Donation Added !");
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <img src={data.picture} className="w-full" />
            <div className="h-32 w-full bg-[#0B0B0B80] -mt-32 flex justify-start items-center">
                <button
                    className="btn btn-neutral ml-9"
                    style={{ backgroundColor: `${data.category_bg}` }}
                    onClick={handleClick}
                >
                    Donate {data.price}
                </button>
            </div>
            <h1 className="mt-14 mb-6 self-start text-4xl font-bold">
                {data.title}
            </h1>
            <p className="text-[#0B0B0BB2] font-normal">{data.description}</p>
            <ToastContainer />
        </div>
    );
};

export default Donation;
