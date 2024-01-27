import React, { useState } from "react";
import { isBrowser } from "react-device-detect";
import ContactForm from "../Panels/ContactForm";
import "../styles/style.css";

export default function Contact(props) {
  return (
    <div className="bg3 w_100 radius2 d-flex align-items-center">
      <div
        className={`${
          isBrowser ? "container" : "container-fluid"
        } w_100 d-flex align-items-center justify-content-center text-center`}
      >
        <div className="row w_100 align-items-center justify-content-center text-center mb-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
