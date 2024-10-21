const products = [
  {
    id: 1,
    title: "Sleek Wireless Earbuds",
    category: "electronics",
    price: 129.99,
    rating: 4.5,
    description:
      "Experience crystal-clear audio with these comfortable, long-lasting wireless earbuds.",
    image: "sleek-wireless-earbuds.png",
  },
  {
    id: 2,
    title: "Ergonomic Office Chair",
    category: "furniture",
    price: 249.99,
    rating: 4.2,
    description:
      "Improve your posture and comfort with this adjustable, breathable mesh office chair.",
    image: "ergonomic-office-chair.png",
  },
  {
    id: 3,
    title: "Stainless Steel Water Bottle",
    category: "kitchen",
    price: 24.99,
    rating: 4.7,
    description:
      "Stay hydrated with this durable, leak-proof water bottle that keeps drinks cold for hours.",
    image: "stainless-steel-water-bottle.png",
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    category: "clothing",
    price: 19.99,
    rating: 4.3,
    description:
      "Feel comfortable and eco-friendly in this soft, breathable organic cotton tee.",
    image: "organic-cotton-t-shirt.png",
  },
  {
    id: 5,
    title: "Smart Home Security Camera",
    category: "electronics",
    price: 79.99,
    rating: 4.4,
    description:
      "Monitor your home 24/7 with this easy-to-install, Wi-Fi-enabled security camera.",
    image: "smart-home-security-camera.png",
  },
  {
    id: 6,
    title: "Leather Messenger Bag",
    category: "accessories",
    price: 89.99,
    rating: 4.6,
    description:
      "Carry your essentials in style with this durable, spacious leather messenger bag.",
    image: "leather-messenger-bag.png",
  },
  {
    id: 7,
    title: "Yoga Mat",
    category: "fitness",
    price: 34.99,
    rating: 4.8,
    description:
      "Practice yoga comfortably on this non-slip, eco-friendly mat with excellent cushioning.",
    image: "yoga-mat.png",
  },
  {
    id: 8,
    title: "Ceramic Plant Pot Set",
    category: "home-decor",
    price: 39.99,
    rating: 4.1,
    description:
      "Add a touch of elegance to your indoor plants with this set of three ceramic pots.",
    image: "ceramic-plant-pot-set.png",
  },
  {
    id: 9,
    title: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 59.99,
    rating: 4.3,
    description:
      "Enjoy your music anywhere with this compact, waterproof Bluetooth speaker.",
    image: "portable-bluetooth-speaker.png",
  },
  {
    id: 10,
    title: "Stainless Steel Cookware Set",
    category: "kitchen",
    price: 199.99,
    rating: 4.7,
    description:
      "Upgrade your kitchen with this durable, dishwasher-safe 10-piece cookware set.",
    image: "stainless-steel-cookware-set.png",
  },
  {
    id: 11,
    title: "Wireless Gaming Mouse",
    category: "electronics",
    price: 69.99,
    rating: 4.5,
    description:
      "Enhance your gaming experience with this responsive, ergonomic wireless mouse.",
    image: "wireless-gaming-mouse.png",
  },
  {
    id: 12,
    title: "Leather Wallet",
    category: "accessories",
    price: 44.99,
    rating: 4.4,
    description:
      "Keep your cards and cash organized in this slim, genuine leather wallet.",
    image: "leather-wallet.png",
  },
  {
    id: 13,
    title: "Adjustable Dumbbell Set",
    category: "fitness",
    price: 299.99,
    rating: 4.6,
    description:
      "Save space and customize your workouts with this versatile adjustable dumbbell set.",
    image: "adjustable-dumbbell-set.png",
  },
  {
    id: 14,
    title: "Scented Soy Candle",
    category: "home-decor",
    price: 19.99,
    rating: 4.2,
    description:
      "Create a cozy atmosphere with this long-lasting, naturally scented soy candle.",
    image: "scented-soy-candle.png",
  },
  {
    id: 15,
    title: "Wireless Charging Pad",
    category: "electronics",
    price: 29.99,
    rating: 4.3,
    description:
      "Charge your compatible devices effortlessly with this sleek wireless charging pad.",
    image: "wireless-charging-pad.png",
  },
  {
    id: 16,
    title: "Insulated Travel Mug",
    category: "kitchen",
    price: 24.99,
    rating: 4.5,
    description:
      "Keep your drinks hot or cold for hours with this leak-proof, stainless steel travel mug.",
    image: "insulated-travel-mug.png",
  },
  {
    id: 17,
    title: "Polarized Sunglasses",
    category: "accessories",
    price: 79.99,
    rating: 4.4,
    description:
      "Protect your eyes in style with these durable, UV-blocking polarized sunglasses.",
    image: "polarized-sunglasses.png",
  },
  {
    id: 18,
    title: "Smart Digital Scale",
    category: "fitness",
    price: 49.99,
    rating: 4.1,
    description:
      "Track your fitness progress with this Wi-Fi-enabled scale that measures weight, body fat, and more.",
    image: "smart-digital-scale.png",
  },
  {
    id: 19,
    title: "Throw Pillow Set",
    category: "home-decor",
    price: 34.99,
    rating: 4.3,
    description:
      "Add comfort and style to your living space with this set of four decorative throw pillows.",
    image: "throw-pillow-set.png",
  },
  {
    id: 20,
    title: "Portable Power Bank",
    category: "electronics",
    price: 39.99,
    rating: 4.6,
    description:
      "Never run out of battery with this high-capacity, fast-charging portable power bank.",
    image: "portable-power-bank.png",
  },
];

export function getProducts() {
  return products.filter((p) => p);
}
