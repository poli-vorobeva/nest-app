
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoffeeType {
    ARABICA = "ARABICA",
    ROBUSTA = "ROBUSTA"
}

export class UpdateCoffeeInput {
    name?: Nullable<string>;
    brand?: Nullable<string>;
    flavors?: Nullable<string[]>;
    type?: Nullable<CoffeeType>;
}

export class CreateCoffeeInput {
    name: string;
    brand: string;
    flavors: string[];
    type: CoffeeType;
}

export interface Drink {
    name: string;
}

export class Tea implements Drink {
    name: string;
}

export class Coffee implements Drink {
    id: number;
    name: string;
    brand: string;
    flavors?: Nullable<Flavor[]>;
    createdAt?: Nullable<Date>;
    type?: Nullable<CoffeeType>;
}

export class Flavor {
    id: number;
    name?: Nullable<string>;
}

export abstract class IQuery {
    coffees: Coffee[];
    coffee?: Coffee;
    drinks: Nullable<DrinksResult>[];
}

export abstract class IMutation {
    createCoffee?: Coffee;
    updateCoffee?: Coffee;
    removeCoffee?: Coffee;
}

export abstract class ISubscription {
    coffeeAdded: Coffee;
}

export type DrinksResult = Coffee | Tea;
type Nullable<T> = T | null;
