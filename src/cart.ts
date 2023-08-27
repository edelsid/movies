import Movie from "./domain/movies";

export default class Cart {
    private _items: Movie[] = []; 

    add(item: Movie): void {
        this._items.push(item);
    }

    get items(): Movie[] {
        return [...this._items]
    }
}