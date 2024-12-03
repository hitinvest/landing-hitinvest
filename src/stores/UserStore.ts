import { makeAutoObservable } from "mobx";

export class UserStore {
    public loader = false;

    constructor() {
        makeAutoObservable(this);
    }
}
