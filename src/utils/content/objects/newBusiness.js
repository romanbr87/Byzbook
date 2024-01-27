export const newBusiness = {
  name: `new-business`,
  form: {
    desc: {
      label: `תיאור קצר על העסק`,
      placeholder: `הכנס תיאור קצר`,
      required: true,
    },
    workHours: {
      title: `שעות עבודה`,
      name: `gsx$worktime`,
      inputs: [
        {
          title: `שורה 1`,
          input: `text`,
          placeholder: `הכנס שעות עבודה`,
          required: false,
        },
        {
          title: `שורה 2`,
          input: `text`,
          placeholder: `הכנס שעות עבודה`,
          required: false,
        },
        {
          title: `שורה 3`,
          input: `text`,
          placeholder: `הכנס שעות עבודה`,
          required: false,
        },
      ],
    },
    comment: [
      {
        label: `הערה 1`,
        input: `text`,
        placeholder: `הכנס הערה נוספת על העסק`,
        required: false,
        name: "gsx$comment",
      },
    ],
    links: [
      {
        label: `אתר אינטרנט`,
        input: `text`,
        placeholder: `הכנס כתובת אתר אינטרנט`,
        required: false,
        name: "gsx$web",
      },
      {
        label: `פייסבוק`,
        input: `text`,
        placeholder: `הכנס קישור לעמוד פייסבוק`,
        required: false,
        name: "gsx$facebook",
      },
      {
        label: `אינטסגרם`,
        input: `text`,
        placeholder: `הכנס קישור לעמוד אינסטגרם`,
        required: false,
        name: "gsx$instagram",
      },
    ],
    contact: [
      {
        label: `טלפון 1`,
        input: `tel`,
        placeholder: `הכנס מס' טלפון 1`,
        required: true,
        name: "gsx$phone",
      },
      {
        label: `טלפון 2`,
        input: `tel`,
        placeholder: `הכנס מס' טלפון 2`,
        required: false,
        name: "gsx$phone",
      },
      {
        label: `טלפון 3`,
        input: `tel`,
        placeholder: `הכנס מס' טלפון 3`,
        required: false,
        name: "gsx$phone",
      },
      {
        label: `וואסטאפ`,
        input: `tel`,
        placeholder: `הכנס מס' טלפון של הוואסטאפ`,
        required: false,
        name: "gsx$whatsapp",
      },
      {
        label: `אימייל`,
        input: `email`,
        placeholder: `הכנס אימייל תקני`,
        required: false,
        name: "gsx$email",
      },
    ],
  },
};
