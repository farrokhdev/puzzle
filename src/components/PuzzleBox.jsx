import React, { useEffect, useState } from "react";
import { PuzzlePice } from "./puzzlePice/PuzzlePice";
import { BOX_SIZE, GRID_SIZE, PICE_COUNT } from "../sizes";
import { changePiceSize, shufflePices } from "../helpers/helpers";
import { Overlay } from "./Overlay";

export const PuzzleBox = () => {
  const [pices, setPices] = useState(shufflePices());
  const [piceNewSize, setPiceNewSize] = useState("80");
  const [boxNewSize, setBoxNewSize] = useState(piceNewSize);

  const boxStyle = {
    width: boxNewSize * 4,
    height: boxNewSize * 4,
  };

  useEffect(() => {
    if (!pices.every((n) => n.value === n.index + 1)) {
      return;
    } else {
      alert("winner");
    }
  });

  const movePices = (p) => {
    const emptyPice = pices.find((n) => n.value === PICE_COUNT).index;

    if (
      ![emptyPice - 1, emptyPice + 1, emptyPice - 4, emptyPice + 4].includes(
        p.index
      )
    ) {
      return;
    }

    const newPices = [...pices].map((number) => {
      if (number.index !== emptyPice && number.index !== p.index) {
        return number;
      } else if (number.value === PICE_COUNT) {
        return { value: PICE_COUNT, index: p.index };
      }

      return { value: p.value, index: emptyPice };
    });

    setPices(newPices);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 h-screen w-full ">
      <h1 className="font-bold capitalize ">Sliding puzzle</h1>
      <div
        // className={"grid grid-cols-4 relative bg-black  overflow-hidden"}
        className={" puzzle_box relative bg-black overflow-hidden"}
        style={boxStyle}
      >
        {/* <Overlay /> */}
        {pices.map((x, i) => (
          <PuzzlePice key={i} number={x} movePices={movePices} />
        ))}
      </div>
      <label htmlFor="pice">pice a size for tiles</label>
      <input
        name="pice"
        type="number"
        min={40}
        max={100}
        value={piceNewSize}
        onChange={(e) => setPiceNewSize(e.target.value)}
      />
      <button onClick={(e) => changePiceSize(e, piceNewSize, setBoxNewSize)}>
        change tile size
      </button>
      <button onClick={(e) => setPices(shufflePices())}>new game</button>
    </div>
  );
};
