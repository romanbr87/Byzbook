export const authContent = {
  name: `auth-content`,
  login: {
    form: [
      {
        label: `שם משתמש`,
        type: `text`,
        placeholder: `הכנס שם משתמש`,
        required: true,
        name: "username",
      },
      {
        label: `סיסמא`,
        type: `password`,
        placeholder: `הכנס סיסמא`,
        required: true,
        name: "password",
      },
    ],
  },
};
