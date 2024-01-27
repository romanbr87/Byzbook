import React, { useState, useEffect } from "react";
import { fetchData } from "../api";
import { Form } from "react-bootstrap";
import Button from "../Element/Button";
const initialObject = {
  gsx$title: "",
  gsx$name: "",
  gsx$contactEmail: "",
  gsx$message: "",
  gsx$contactPhone: "",
};
export default function ContactForm(props) {
  const [data, setData] = useState(initialObject);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData("/addmessage", "post", { data: data })
      .then((data) => {
        setData(initialObject);
        alert("ההודעה נשלחה בהצלחה");
      })
      .catch((err) => alert("לא ניתן לשלוח את ההודעה"));
  };
  const listOfObj = [
    {
      label: "נושא",
      inputType: "text",
      required: false,
      placeholder: "יצירת קשר",
      propName: "gsx$title",
    },
    {
      label: "שם",
      inputType: "text",
      required: false,
      placeholder: "מייקל ג'קסון",
      propName: "gsx$name",
    },
    {
      label: "אימייל",
      inputType: "email",
      required: false,
      placeholder: "example@gmail.com",
      propName: "gsx$contactEmail",
    },
    {
      label: "טלפון",
      inputType: "tel",
      required: false,
      placeholder: "050-7123-999",
      propName: "gsx$contactPhone",
    },
    {
      label: "הודעה",
      inputType: "textarea",
      required: true,
      placeholder: "בבקשה תצרו איתי קשר",
      propName: "gsx$message",
    },
  ];
  const handleInputChange = (e, objectKey) => {
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [objectKey]: value,
    }));
  };

  return (
    <div
      className="w_100 align-items-center justify-content-center text-center d-flex"
      {...props}
    >
      <div className="mt-5 w_100 d-flex align-items-center justify-content-center text-center">
        <div className=" w_100 d-flex align-items-center justify-content-center text-center">
          <Form
            className="w_100 d-flex align-items-center justify-content-center text-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group w_100 form-group-sm bgc1 p-2 radius1 d-flex flex-column align-items-center justify-content-center gap-2">
              <div className="panel-heading">
                <h1 className=" fs_33 ls5 btn2 cursor-off p-2 radius2 text-white">
                  יצירת קשר
                </h1>
              </div>

              {listOfObj.map((obj, index) => (
                <div className="w_100" key={index}>
                  <label
                    className=" mb-1 p-2 radius2 ls3 fw-bold text-secondary bgc2 w_100 control-label label1"
                    htmlFor="title"
                  >
                    {obj.label}
                  </label>
                  {obj?.inputType !== "textarea" ? (
                    <input
                      type={obj.inputType}
                      defaultValue={initialObject[obj?.propName]}
                      value={data[obj?.propName]}
                      className="form-control input-sm p-1 ls3"
                      placeholder={obj?.placeholder}
                      onChange={(e) => handleInputChange(e, obj.propName)}
                    />
                  ) : (
                    <textarea
                      className="form-control input-sm"
                      placeholder={obj.placeholder}
                      defaultValue={initialObject[obj?.propName]}
                      value={data[obj.propName]}
                      onChange={(e) => handleInputChange(e, obj.propName)}
                    />
                  )}
                </div>
              ))}

              <Button
                type="submit"
                className={`mt-2 btn5 p-2 w_50 shadow  radius2`}
                btnText={"לשלוח"}
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
