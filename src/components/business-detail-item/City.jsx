import React, { useMemo } from "react";

const City = ({ data }) => {
  const gsx$address = data?.gsx$address;
  const gsx$city = data?.gsx$city;
  

  const fullAddress = useMemo(
    () => (!gsx$address ? gsx$city : `${gsx$address}, ${gsx$city}`),
    [gsx$address, gsx$city]
  );
  const googleMapsAddress = useMemo(
    () =>
      "http://maps.google.com/maps?q=" +
      encodeURIComponent(
        fullAddress?.trim().replace(/\r?\n/, ",").replace(/\s+/g, " ")
      ),
    [fullAddress]
  );

  return (
    <>
      {data?.gsx$city && (
        <div className="row w_100 bg-light p-2 shadow radius2 d-flex align-items-center">
          <h2 className="h2 col fs_21 fs_color5 text-center radius2  ls5">
            כתובת
          </h2>
          <div className="bgc5 col p-2 radius1 d-flex flex-column align-items-center gap-1 ">
            <a className="text-black dec-off shadow ls3 p-1 fs_15"
            href={googleMapsAddress}>
              {`${data?.gsx$city} ${
                data?.gsx$address ? ", " + data?.gsx$address : ""
              }`}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default City;
