import React from "react";
import { PICE_COUNT } from "../sizes";

export const Overlay = () => {
  return (
    <>
      {new Array(PICE_COUNT).fill().map((_, i) => (
        <div key={i} className="overlay  z-[100] pointer-events-none" />
      ))}
    </>
  );
};
