import {
  WHITE_HAT_IMAGE,
  BLACK_HAT_IMAGE,
  WHITE_SHIRT_IMAGE,
  BLACK_SHIRT_IMAGE,
  WHITE_HOODIE_IMAGE,
} from "../images/base64/base64Images";

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
        zip: "07734",
      },
      cart: ["002", "003"],
      cartTotal: "59.58",
    },
  ],
  products: [
    {
      _id: "001",
      name: "Ben Miles & The Dad White T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: WHITE_SHIRT_IMAGE,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "002",
      name: "Ben Miles & The Dad Black T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: BLACK_SHIRT_IMAGE,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "003",
      name: "Ben Miles & The White Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: WHITE_HAT_IMAGE,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "004",
      name: "Ben Miles & The Dad Black Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: BLACK_HAT_IMAGE,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "005",
      name: "Ben Miles & The Dad White Hoodie",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "39.99",
      image: WHITE_HOODIE_IMAGE,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hoodies",
    },
  ],
};

export { database };
