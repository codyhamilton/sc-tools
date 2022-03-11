import { Query, db } from './db';
import type { Queryable } from './db';


/**
 * Represents a ship
 *
 * Is a subset of available data from SC DB
 */
export interface Ship extends Queryable {
  readonly id: number;
  readonly name: string;
  readonly quantum: number;
  readonly hydrogen: number;
  readonly weight: number;
  readonly capacity: number;
  readonly scm: number;
  readonly afterburner: number;
}

/**
 * Queryable ship database
 *
 * Alows searching by name or manufacturer
 */
class ShipDB extends Query<Ship> {
  constructor() {
    super({
      list: db.ships,
      keys: ["name", "manufacturer"]
    });
  }
}

export const Ships = new ShipDB();
