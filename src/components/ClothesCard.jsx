import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../pages/Card";

const CoffeesCard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { cloth } = useParams();

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (cloth) {
      const filterByCoffees = data.filter(
        (coffee) => coffee.category === cloth
      );
      setCoffees(filterByCoffees);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [cloth, data]);

  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <Card key={coffee.id} cloth={coffee} />
        ))}
      </div>

      <button
        className="btn btn-warning my-6"
        onClick={() => navigate("/clothes")}
      >
        View All
      </button>
    </div>
  );
};

export default CoffeesCard;
