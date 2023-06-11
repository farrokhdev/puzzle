import React from "react";

import "./puzzle_pice.css";

export const PuzzlePice = ({ number, movePices }) => {
  return (
    <>
      <div
        className={
          "puzzle_pice absolute flex justify-center items-center text-white cursor-pointer " +
          `slot__${number.index} ${
            number.value === 16
              ? "disabled"
              : number.value === number.index + 1
              ? "bg-green-500"
              : "bg-blue-500 "
          }`
        }
        onClick={() => movePices(number)}
      >
        {number.value === 16 ? "" : number.value}
      </div>
    </>
  );
};
