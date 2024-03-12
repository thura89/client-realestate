import React from "react";
import Search from "../../components/Search/Search";
import "./Properties.css";
import useProperties from "../../Hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
const Properties = () => {
  const { data, isLoading, isError } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>While Fetching Data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        ></PuffLoader>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Search />
        <div className="paddings flexCenter properties">
          {data.map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
