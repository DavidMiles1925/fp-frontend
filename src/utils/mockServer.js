const whiteTShirtImage = require("../images/merch/white-t.png");
const blackTShirtImage = require("../images/merch/black-t.png");
const whiteHatImage = require("../images/merch/white-hat.png");
const blackHatImage = require("../images/merch/black-hat.png");
const whiteHoodieImage = require("../images/merch/white-hoodie.png");

const database = {
  users: [
    {
      _id: "001",
      admin: "false",
      email: "user@host.com",
      password: "password",
      name: "Ben Miles",
      phone: "1234567890",
      address: {
        street: "1600 Pennsylvania Ave",
        apt: "42",
        city: "The Shire",
        state: "Florida",
        zip: "80085",
      },
      cart: ["002", "003"],
    },
    {
      _id: "002",
      admin: "true",
      email: "frodobaggins@hobbitbook.com",
      password: "password",
      name: "Frodo Baggins",
      phone: "1234567890",
      address: {
        street: "1600 Pennsylvania Ave",
        apt: "42",
        city: "The Shire",
        state: "Florida",
        zip: "80085",
      },
      cart: [],
    },
  ],
  products: [
    {
      _id: "001",
      name: "Ben Miles & The Dad White T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: whiteTShirtImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "002",
      name: "Ben Miles & The Dad Black T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: blackTShirtImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "003",
      name: "Ben Miles & The White Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: whiteHatImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "004",
      name: "Ben Miles & The Dad Black Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: blackHatImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "005",
      name: "Ben Miles & The Dad White Hoodie",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "39.99",
      image: whiteHoodieImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hoodies",
    },
  ],
};

export { database };
