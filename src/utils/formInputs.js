const formInputs = [
    {
      labelTxt: `שם עסק`,
      servSign: `gsx$name`,
      type: `text`,
    },
    {
      labelTxt: `מצב עסק`,
      servSign: `gsx$active`,
      type: `toggle`,
    },
    {
      labelTxt: `כתובת`,
      servSign: `gsx$address`,
      type: `text`,
    },
    {
      labelTxt: `עיר`,
      servSign: `gsx$city`,
      type: `city`,
    },
    {
      labelTxt: `אימייל`,
      servSign: `gsx$email`,
      type: `email`,
    },
    {
      labelTxt: `מס' טלפון`,
      servSign: `gsx$phone`,
      type: `phone`,
    },
    {
      labelTxt: `לינקים`,
      type: `links`,
      inputs: [
        {
          servSign: `gsx$facebook`,
          labelTxt: `Facebook`,
          type: `text`,
        },
        {
          servSign: `gsx$instagram`,
          labelTxt: `Instagram`,
          type: `text`,
        },
        {
          servSign: `gsx$website`,
          labelTxt: `Website`,
          type: `text`,
        },
      ],
    },
    {
      labelTxt: `שעות עבודה`,
      servSign: `gsx$worktime`,
      type: `workArray`,
      sign: `3 blank text`,
    },
    {
      labelTxt: `תגיות`,
      servSign: `gsx$tags`,
      type: `tags`,
    },
    {
      labelTxt: `תמונה`,
      servSign: `gsx$logo`,
      type: `img`,
    },
    {
      labelTxt: `תיאור`,
      servSign: `gsx$desc`,
      type: `textarea`,
    },
  ];
  module.exports = formInputs