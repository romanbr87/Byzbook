export const menuContent = {
  name: `menu`,
  navList: [
    {
      href: `/`,
      text: `דף הבית`,
    },
    {
      href: `/contact`,
      text: `יצירת קשר`,
    },
    {
      href: `/newBusiness`,
      text: `עסק חדש`,
    },
    {
      href: `/login`,
      text: `התחברות`,
      unLoggedOnly: true,
    },
    {
      href: `/logout`,
      text: `התנתקות`,
      loggedOnly: true,
    },

    {
      href: `/about`,
      text: `אודות`,
    },
    {
      href: `/manager`,
      text: `פאנל ניהול`,
      managerOnly: true, 
         loggedOnly: true,
    },
  ],
};

// navList: [
//   {
//     href: `/`,
//     text: `דף הבית`,
//     status: "always",
//   },
//   {
//     href: `/about`,
//     text: `יצירת קשר`,
//     status: "always",
//   },
//   {
//     href: `/newBusiness`,
//     text: `עסק חדש`,
//     status: "always",
//   },
//   {
//     href: `/login`,
//     text: `התחברות`,
//     status: "unlogged",
//   },
//   {
//     href: `/logout`,
//     text: `התנתקות`,
//     status: "logged",
//   },

//   {
//     href: `/business-panel`,
//     text: `רשימת עסקים`,
//     status: "always",
//   },
//   {
//     href: `/about`,
//     text: `אודות`,
//     status: "always",
//   },
//   {
//     href: `/manager`,
//     text: `פאנל ניהול`,
//     status: "logged",
//   },
// ]
