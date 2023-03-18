import { atom } from "recoil";

export const selectedCategory = atom({
  key: "selectedCategory",
  default: "select category...", 
});

export const categoryError = atom({
  key: 'categoryError',
  default: false, 
});
export const isCardFlipped = atom({
  key: 'isFlipped',
  default: false, 
});
