import City from "../../components/business-detail-item/City";
import Comment from "../../components/business-detail-item/Comment";
import Contact from "../../components/business-detail-item/Contact";
import Image from "../../components/business-detail-item/Image";
import Links from "../../components/business-detail-item/Links";
import Name from "../../components/business-detail-item/Name";
import WorkHours from "../../components/business-detail-item/WorkHours";

export const detailsContentFields = [
    {
      component: Name,
    },
    {
      component: Image,
    },
    {
        sign:`desc`
    },
    {
      component: Contact,
    },
    {
      component: Links,
    },
    {
      component: WorkHours,
    },
    {
      component: City,
    },
    {
      component: Comment,
    },
  ];