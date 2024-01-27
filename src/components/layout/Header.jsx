import React, { useState } from "react";
import Menu from "../../Panels/Menu";

export default function Header() {
  return (
    <div className="bg-dark p-2 radius3 d-flex align-items-center justify-content-center w_100 text-center">
      <Menu />
    </div>
  );
}
