const UUDISED = [
    {
        id: 0,
        pealkiri: "Uudis 1",
        sisu: "Sisu 1"
    },
    {
        id: 1,
        pealkiri: "Uudis 2",
        sisu: "Sisu 2"
    },
    {
        id: 2,
        pealkiri: "Uudis 3",
        sisu: "Sisu 3"
    },
];

const getUudis = (id) => {
    return UUDISED.find(uudis => uudis.id.toString() === id);
}

const getUudised = () => {
    return UUDISED;
}

export { getUudis, getUudised };