import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDonation } from "../utility/localStorage";

const Donation = () => {
    const data = useLoaderData();

    const donations = getDonation();
    let donationList = [];
    donations.map((donationId) => {
        donationList.push(data[donationId]);
    });
    const [donationLength, setDonationLength] = useState(4);

    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 items-center justify-center">
                {donationList.slice(0, donationLength).map((donation) => (
                    <div className="card card-side bg-base-100 shadow-xl w-[648px]">
                        <figure>
                            <img src={donation.picture} alt="Movie" />
                        </figure>
                        <div
                            style={{
                                backgroundColor: `${donation.card_bg}`,
                            }}
                            className="card-body"
                        >
                            <h2
                                style={{
                                    color: `${donation.category_bg}`,
                                    backgroundColor: `${donation.text_button_bg}`,
                                }}
                                className="badge font-medium text-sm"
                            >
                                {donation.category}
                            </h2>
                            <h1 className="font-semibold text-xl">
                                {donation.title}
                            </h1>
                            <p
                                className="font-semibold"
                                style={{
                                    color: `${donation.category_bg}`,
                                }}
                            >
                                {donation.price}
                            </p>
                            <button
                                className="btn btn-neutral text-white w-36"
                                style={{
                                    backgroundColor: `${donation.category_bg}`,
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={donationLength >= donationList.length && "hidden"}>
                <button
                    onClick={() => setDonationLength(donationList.length)}
                    className="btn btn-neutral"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default Donation;
