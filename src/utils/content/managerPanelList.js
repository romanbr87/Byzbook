import BusinessPagePanel from "../../Panels/BusinessPagePanel";
import CommentsAdminPanel from "../../Panels/CommentsAdminPanel";
import ContactmessagesPanel from "../../Panels/ContactmessagesPanel";
import ImgsPanel from "../../Panels/ImgsPanel";
import ReportsPanel from "../../Panels/ReportsPanel";
import TypesPanel from "../../Panels/TypesPanel";

export const managerPanelList =[
    {
      text: "פתח פאנל קטגוריות",
      isOpen: false,
      component: <TypesPanel />, // Include your component here
    },

    {
      text: "פתח פאנל תגובות לעסקים",
      isOpen: false,
      component: <CommentsAdminPanel />, // Include your component here
    },
    {
      text: "פתח פאנל תמונות",
      isOpen: false,
      component: <ImgsPanel className="w_100"/>, // Include your component here
    },
    {
      text: "פתח פאנל דיווחים",
      isOpen: false,
      component: <ReportsPanel className="w_100" />, // Include your component here
    },
    {
      text: "פתח פאנל הודעות",
      isOpen: false,
      component: <ContactmessagesPanel />, // Include your component here
    },
    {
      text: "עריכת עסקים",
      isOpen: false,
      component: <BusinessPagePanel className={"row gap-1 align-items-center justify-content-center text-center align-self-center w_100"} />, // Include your component here
    },
]