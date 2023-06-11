import { PICE_COUNT } from "../sizes";

export const shufflePices = () => {
  return new Array(PICE_COUNT)
    .fill()
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .map((x, i) => {
      return { value: x, index: i };
    });
};

export const changePiceSize = (e, newSize, boxNewSize) => {
  e.preventDefault();
  boxNewSize(newSize);
  document.documentElement.style.setProperty("--pice_size", newSize + "px");
};
