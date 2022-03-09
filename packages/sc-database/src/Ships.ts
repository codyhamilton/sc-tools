import { Query, db } from './db';
import type { Queryable } from './db';


export interface Ship extends Queryable {
  readonly id?: number;
  readonly name: string;
  readonly quantum: number;
  readonly hydrogen: number;
  readonly weight: number;
  readonly capacity: number;
  readonly scm: number;
  readonly afterburner: number;
}

export const Ships = new Query<Ship>({
  list: db.ships,
  keys: ["name", "manufacturer"]
});
