import { makeAutoObservable } from "mobx";

export default class StateManager<AttributeType> {
    public value: AttributeType;

    constructor(initialValue: AttributeType) {
        makeAutoObservable(this);
        this.value = initialValue;
    }

    public setValue = (newValue: AttributeType) => {
        this.value = newValue;
    };
}
