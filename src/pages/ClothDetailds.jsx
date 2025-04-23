import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ClothDetailds = () => {
    const data = useLoaderData()
    const {id} = useParams();

    const [clothes, setClothes] = useState([])
    console.log(clothes)

    useEffect(() => {
        const singleData = data.find((item) => item.id == id)
        setClothes(singleData)
    }, [data, id])

    return (
        <div>
            <h2>Details: {clothes}</h2>
        </div>
    );
};

export default ClothDetailds;