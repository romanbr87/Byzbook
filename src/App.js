import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/slices/user-slice";
import { useOnlineNotification } from "./hooks/useOnline";
import "react-notifications/lib/notifications.css";
import Header from "./components/layout/Header";
import NavRoutes from "./components/nav-routes/NavRoutes";
export default function App() {
  const dispatch = useDispatch();

  useOnlineNotification();
  useEffect(() => {
    console.clear ();
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div
        dir="rtl"
        className="d-flex flex-column w_100 align-items-center justify-content-center text-center"
      >
        <Header />
        <NotificationContainer />
      </div>

      <NavRoutes />
    </>
  );
}
