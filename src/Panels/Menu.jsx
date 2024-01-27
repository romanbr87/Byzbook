import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/user-slice";
import { getPost } from "../api";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import { content } from "../utils/content/content";
import { useMediaQuery } from 'react-responsive';
import { apiRouteList } from "../utils/api-routes";
import { isBrowser } from "react-device-detect";
export default function Menu() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [resMsg, setResMsg] = useState({ show: false, text: `` });
  const [showMenu, setshowMenu] = useState(isMobile ?  false:true);
  const user = useSelector((state) => state.user);
  // const { businesses, businesstypes, reports, messages, images, comments } =
  //   useSelector((state) => state.panelData);
  const menuContent = content.find((item) => item.name === `menu`);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logoutFunc = (e) => {
    e.preventDefault();
    getPost(`${apiRouteList.auth}logout`)
      .then((data) => {
        dispatch(logout);
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
        alert("לא ניתן להתנתק");
      });
  };

  const me = (e) => {
    e.preventDefault();
    getPost(`${apiRouteList.auth}/user`)
      .then((data) => {
        console.log(``);
      })
      .catch((err) => {
        console.log(err);
        alert("לא ניתן לקבל משתמש");
      });
  };
  return (
    <div className="text-center w_100 d-flex gap-2 flex-column align-items-center justify-content-center text-center ">
      {isMobile &&<button
        onClick={() => setshowMenu((s) => !s)}
        className={`btn1 p-2 mt-1 radius4 fs_15 ${!showMenu && "mb-1"}`}
      >
        <AiOutlineMenuFold size={33} />
        פתח תפריט
      </button>
}
      {resMsg.show && (
        <span> 
          <div className="loader1"></div>;
          {/* spinner */}
        </span>
      )}

      {showMenu && (
        <nav className={`d-flex text-center align-items-center justify-content-end w_100 
        ${isBrowser && "mt-3 mb-0 p-0"}`}>
          <ul className="row gap-2 w_100">
            {menuContent.navList?.map((navItem, navIndex) => {
              if (navItem.loggedOnly) {
                if (user.role === "") {
                  return;
                }
              } else if (navItem.unLoggedOnly) {
                if (user.role !== "") {
                  return;
                }
              }

             
              return (
                <li
                  onClick={(e) => navItem.href === `/logout` && logoutFunc(e)}
                  style={{ listStyle: `none` }}
                  key={navIndex}
                  className="bgc2 col-sm p-1 radius1 text-center"
                >
                  <a
                    className="dec-off fs_color1  w_100  fs_18 "
                    href={navItem.href}
                  >
                    {navItem.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
