import React from "react";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import "./Property.css";
import Map from "../../components/Map/Map";

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
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like"></div>

        {/* image */}
        <img src={data?.image} alt="Home" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities.bedrooms} Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address} {data?.city} {data?.country}
              </span>
            </div>

            {/* Booking Button */}
            <button className="button">Book Your Visit</button>
          </div>

          {/* right side */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.city}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
