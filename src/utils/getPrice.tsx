import type { Car } from "../types";

/**
 * Calculates estimated daily rental price for a car
 * based on real-world rental market assumptions.
 */
export const getPrice = (car: Car): number => {
  // Base daily price for an economy car
  let price = 50;

  /**
   * Year factor
   * Newer cars are slightly more expensive.
   * We only add price for cars newer than 2015.
   */
  const year = parseInt(car.year);
  if (!isNaN(year) && year > 2015) {
    price += (year - 2015) * 1.5; // ~$1.5 per newer year
  }

  /**
   * Engine displacement factor (liters)
   * Bigger engines usually belong to higher class vehicles.
   */
  if (car.displ) {
    if (car.displ >= 3.0) {
      price += 20;
    } else if (car.displ >= 2.0) {
      price += 10;
    }
  }

  /**
   * Drivetrain factor
   * AWD / 4WD vehicles are more expensive to rent.
   */
  if (car.drive && car.drive.toLowerCase().includes("all-wheel")) {
    price += 15;
  }

  /**
   * Transmission factor
   * Automatic transmission usually costs more.
   */
  if (car.trany && car.trany.toLowerCase().includes("auto")) {
    price += 7;
  }

  /**
   * Fuel type factor
   * Electric vehicles usually have a premium price.
   */
  if (car.fueltype && car.fueltype.toLowerCase().includes("electric")) {
    price += 25;
  }

  // Round to whole number for display
  return Math.round(price);
};
