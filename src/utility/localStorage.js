const getDonation = () => {
    const storedDonation = localStorage.getItem("donations");
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
};

const setDonation = (id) => {
    const storedDonation = getDonation();
    const exists = storedDonation.find((checkId) => checkId === id);
    if (!exists) {
        storedDonation.push(id);
        localStorage.setItem("donations", JSON.stringify(storedDonation));
    }
};

export { setDonation, getDonation };
