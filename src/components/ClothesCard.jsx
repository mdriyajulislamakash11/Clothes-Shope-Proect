import React from 'react';
import { useParams } from 'react-router-dom';

const ClothesCard = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h2>clothes card</h2>
        </div>
    );
};

export default ClothesCard;