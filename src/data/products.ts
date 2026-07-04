import bakedLaysImg from "../assets/products/baked-lays-bbq.jpeg";
import beefJerkyImg from "../assets/products/beef-jerky.jpeg";
import celsiusImg from "../assets/products/celsius.jpeg";
import fairlifeImg from "../assets/products/fairlife.webp";
import gatoradeImg from "../assets/products/gatorade.jpeg";
import kitKatImg from "../assets/products/kitkat.jpeg";
import mnmImg from "../assets/products/mnm.jpeg";
import muscleMilkImg from "../assets/products/muscle-milk.jpeg";
import questBarImg from "../assets/products/quest-bar.jpeg";
import questChipsImg from "../assets/products/quest-chips.jpeg";
import reesesImg from "../assets/products/reeses.jpeg";
import skinnyPopImg from "../assets/products/skinny-pop.jpeg";
import snickersImg from "../assets/products/snickers.jpeg";
import twixImg from "../assets/products/twix.jpeg";

export type ProductCategory =
  | "beverages"
  | "sweets"
  | "chips"
  | "nuts-fruit"
  | "pastries"
  | "snack-bars";

export interface ProductTab {
  id: ProductCategory;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  alt: string;
  image?: string;
}

export const productTabs: ProductTab[] = [
  { id: "beverages", label: "Beverages" },
  { id: "sweets", label: "Sweets" },
  { id: "chips", label: "Chips" },
  // { id: "nuts-fruit", label: "Nuts & Fruit" },
  { id: "snack-bars", label: "Snack Bars" },
];

export const products: Product[] = [
  {
    id: "b1",
    name: "Fairlife Nutrition Milk",
    category: "beverages",
    alt: "Fairlife Nutrition Plan high-protein milk shake bottle",
    image: fairlifeImg,
  },
  {
    id: "b2",
    name: "Celsius Energy Drink",
    category: "beverages",
    alt: "Celsius sparkling fitness energy drink can",
    image: celsiusImg,
  },
  {
    id: "b3",
    name: "Muscle Milk",
    category: "beverages",
    alt: "Muscle Milk Pro Series protein shake bottle",
    image: muscleMilkImg,
  },
  {
    id: "b4",
    name: "Gatorade",
    category: "beverages",
    alt: "Gatorade Thirst Quencher sports drink bottle",
    image: gatoradeImg,
  },
  {
    id: "s1",
    name: "Reese's Peanut Butter Cups",
    category: "sweets",
    alt: "Reese's Peanut Butter Cups milk chocolate candy package",
    image: reesesImg,
  },
  {
    id: "s2",
    name: "M&M's",
    category: "sweets",
    alt: "M&M's milk chocolate candies share-size package",
    image: mnmImg,
  },
  {
    id: "s3",
    name: "Kit Kat",
    category: "sweets",
    alt: "Kit Kat crispy wafer chocolate bar package",
    image: kitKatImg,
  },
  {
    id: "s4",
    name: "Twix",
    category: "sweets",
    alt: "Twix caramel cookie chocolate bar package",
    image: twixImg,
  },
  {
    id: "s5",
    name: "Snickers",
    category: "sweets",
    alt: "Snickers peanut caramel chocolate bar package",
    image: snickersImg,
  },
  {
    id: "c1",
    name: "Quest Protein Chips",
    category: "chips",
    alt: "Quest Nutrition high-protein potato chips bag",
    image: questChipsImg,
  },
  {
    id: "c2",
    name: "Baked Lays BBQ",
    category: "chips",
    alt: "Baked Lays BBQ flavored potato crisps bag",
    image: bakedLaysImg,
  },
  {
    id: "c3",
    name: "Skinny Pop",
    category: "chips",
    alt: "Skinny Pop original lightly salted popcorn bag",
    image: skinnyPopImg,
  },
  // { id: "n1", name: "Mixed Nuts", category: "nuts-fruit", alt: "..." },
  // { id: "n2", name: "Trail Mix", category: "nuts-fruit", alt: "..." },
  // { id: "n3", name: "Dried Mango", category: "nuts-fruit", alt: "..." },
  // { id: "n4", name: "Almonds", category: "nuts-fruit", alt: "..." },
  // { id: "n5", name: "Apple Slices", category: "nuts-fruit", alt: "..." },
  // { id: "n6", name: "Granola Bites", category: "nuts-fruit", alt: "..." },
  {
    id: "p1",
    name: "Quest Protein Bar",
    category: "snack-bars",
    alt: "Quest Nutrition high-protein snack bar",
    image: questBarImg,
  },
  {
    id: "p2",
    name: "Beef Jerky",
    category: "snack-bars",
    alt: "Savory beef jerky snack stick package",
    image: beefJerkyImg,
  },
];
