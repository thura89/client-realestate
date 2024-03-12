import React from "react";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Property = () => {
  const params = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: "resd",
    queryFn: () => getProperty(params),
  });
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>While Fetching Data</span>
        </div>
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
  return <div className="wrapper">Property</div>;
};

export default Property;
