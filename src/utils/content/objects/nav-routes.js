export const navRoutes = {
  name: "nav-routes",
  routes: [
    {
      path: "/",
      component: "HomePage",
    },
    {
      path: "/login",
      component: "Login",
    },
    {
      path: "/newBusiness",
      component: "NewBusiness",
    },
    {
      path: "/business-panel",
      component: "BusinessPagePanel",
    },
    {
      path: "/edit-business/:_id",
      component: "EditSingleBusiness",
    },
    {
      path: "/business/:_id",
      component: "SingleBusinessPage",
    },
    {
      path: "/about",
      component: "About",
    },
    {
      path: "/contact",
      component: "Contact",
    },
    {
      path: "/manager",
      component: "Manager",
    },
  ],
};
