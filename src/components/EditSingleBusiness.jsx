import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import businessServices from "../services/business.service";
import EditBusinessForm from "../Panels/edit-business/EditBusinessForm";
import Button from "../Element/Button";
import { Form } from "react-bootstrap";
import formInputs from "../utils/formInputs";
const SingleBusiness = () => {
  const [imgSign, setImgSign] = useState(false);
  const [data, setData] = useState({});
  const { _id } = useParams();
  useEffect(() => {
    console.clear();
  }, []);

  useEffect(() => {
    businessServices
      .getSingleBusiness(_id)
      .then((res) => setData(res.data.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (imgSign) {
        const formData = new FormData();
        const arrOfKeys = ["gsx$logo", "_id"];
        arrOfKeys.forEach((key) => formData.append(key, data[key]));

        var newData = await businessServices.updateBusImg(data._id, formData);
        console.log(newData);
      }

      var val = await businessServices.updateBus(data);
      console.log (val);
      // alert("העסק עודכן");
    } catch (err) {
      console.log(err);
      alert("לא ניתן לעדכן");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <div className="bg1 p-2 d-flex flex-column gap-1 justify-content-center align-items-center">
        <p className="bgc8 radius1 p-1 fs_color1">
          לחץ על שמירה בסוף כדי לשמור את הפרטים
        </p>
        <p className="fs_color1">---------------------------------------</p>

        {/* Name ------------------ */}
        {formInputs?.map((formItem, i) => {
          const servSignValue = data?.[formItem.servSign] ?? "";
          return (
            <EditBusinessForm
              setImgSign={setImgSign}
              details={data}
              imgSign={imgSign}
              setDetails={setData}
              formItem={formItem}
              servSignValue={servSignValue}
              key={i}
            />
          );
        })}

        <Button
          type="submit"
          className={` btn3 radius2 shadow`}
          btnText="הגש עסק"
          onClickHandler={handleSubmit}
        />
      </div>
    </Form>
  );
};

export default SingleBusiness;
