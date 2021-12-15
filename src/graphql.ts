
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Set {
    id: number;
    name?: Nullable<string>;
    year?: Nullable<number>;
    numParts?: Nullable<number>;
}

export abstract class IQuery {
    abstract allSets(): Nullable<Nullable<Set>[]> | Promise<Nullable<Nullable<Set>[]>>;
}

export abstract class IMutation {
    abstract addSet(name?: Nullable<string>, year?: Nullable<string>, numParts?: Nullable<number>): Nullable<Set> | Promise<Nullable<Set>>;
}

type Nullable<T> = T | null;
