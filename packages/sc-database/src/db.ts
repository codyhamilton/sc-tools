import Fuse from 'fuse.js';
import _db from './db.json';
import type { Ship } from './Ships';

interface Point {
  x: number;
  y: number;
  z: number;
}

export interface Queryable {
  readonly id: number;
}
export interface Body extends Queryable {
  readonly id: number;
  readonly name: string;
  readonly position: Point;
  readonly orbiting?: string;
}

export interface Commodity extends Queryable {
  readonly id: number;
  readonly name: string;
  readonly category: string;
  readonly buyPrice: number;
  readonly buyMax: number;
  readonly buyRefresh: number;
  readonly sellPrice: number;
  readonly sellMax: number;
  readonly sellRefresh: number;
}

export interface Location extends Queryable {
  readonly id: number;
  readonly name: string;
  readonly body?: string
  readonly position: Point;
  readonly hasPlatform: boolean;
  readonly hasMarker: boolean;
  readonly commodities?: Commodity[];
}

export interface DB {
  readonly ships: Ship[];
  readonly bodies: Body[];
  readonly locations: Location[];
}

export const db: DB = _db;

interface QueryOpts<T> {
  list: T[];
  keys: string[];
}

export class Query<T extends Queryable> {
  private fuse: Fuse<T>;
  private list: T[];

  constructor(opts: QueryOpts<T>) {
    this.list = opts.list;
    this.fuse = new Fuse(this.list, {
      includeScore: false,
      keys: opts.keys
    })
  }

  public find(name: string): Fuse.FuseResult<T>[] {
    const result = this.fuse.search(name);
    return result;
  }

  public getAll(): T[] {
    return this.list;
  }
}
