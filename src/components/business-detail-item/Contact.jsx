import React from "react";
import { FaPhoneVolume, FaWhatsappSquare } from "react-icons/fa";
import { whatsappLink } from "../../api";
import Button from "../../Element/Button";

const Contact = ({ data }) => {
  return (
    <>
      {(data?.gsx$email || data?.gsx$whatsapp || data?.gsx$phone) && (
        <div className="row w_100 bg-light p-2 shadow radius2 d-flex align-items-center">
          <h2 className="h2 col fs_21 fs_color5 text-center radius2  ls5">
            פרטי יצירת קשר
          </h2>

          <div className="bgc5 col p-2 radius1 d-flex flex-column align-items-center gap-1 ">
            {/* Phone */}
            <div className="row">
              {data?.gsx$phone?.map((phone, i) => {
                if (!phone) {
                  return;
                }
                return (
                  <div className="col-sm radius2" key={"phone" + i}>
                    <label className="text-black radius2 shadow ls3 p-1 fs_15">
                      <Button
                        onClickHandler={() => {
                          setTimeout(() => {
                            window.location.href = `tel:${phone}`;
                          }, 100);
                        }}
                        btnText={phone}
                        icon={
                          <FaPhoneVolume
                            className="radius3"
                            size={27}
                            color="blue"
                          />
                        }
                        className={`border-off p-2 radius2 ls3 m-1 fs_12`}
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            {/*End Phone  */}
            {/* Whatsapp & Email */}
            <div className="row align-items-center gap-2 ">
              {data?.gsx$whatsapp && (
                <label className="text-black radius2 col-sm shadow ls3 p-1 fs_15">
                  <Button
                    onClickHandler={() => {
                      setTimeout(() => {
                        window.location.href = `${whatsappLink}${data?.gsx$whatsapp}`;
                      }, 100);
                    }}
                    btnText={data?.gsx$whatsapp}
                    icon={
                      <FaWhatsappSquare
                        className="radius3"
                        size={27}
                        color="green"
                      />
                    }
                    className={`border-off p-2 radius2 ls3 m-1 fs_12`}
                  />
                </label>
              )}

              {data?.gsx$email && (
                <label
                  onClick={() => {
                    window.location.href = `mailto:${data?.gsx$email}`;
                  }}
                  className=" radius2 cursor col-sm bg-light radius2 d-flex align-items-center text-black shadow ls5 p-2 fs_12"
                >
                  {data?.gsx$email}
                </label>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
