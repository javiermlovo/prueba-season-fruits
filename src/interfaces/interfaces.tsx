export interface Fruit {
    fruit:       FruitInfo;
}
export interface Fruits {
    fruit:       FruitInfo[];
}
export interface FruitInfo{
    name:       string;
    id:         number;
    family:     string;
    order:      string;
    genus:      string;
    nutritions: Nutritions;
    favorite?:  boolean;
}
export interface Nutritions {
    calories:      number;
    fat:           number;
    sugar:         number;
    carbohydrates: number;
    protein:       number;
}