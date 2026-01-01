import type { Car } from "../types";


const formatData = (car: Car) => {

    const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

    // const arr = Object.entries(car).filter( ([key]) => accepted.includes(key) );
    // return arr;

      return Object.entries(car)
    .filter(([key]) => accepted.includes(key))
    .map(([key, value]) => {
      if (value === -1 || value === null || value === "") {
        return [key, "N/A"];
      }
      return [key, value];
    });
};

export default formatData;