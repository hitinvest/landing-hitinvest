import { makeAutoObservable, runInAction } from "mobx";

export default class FormManager<FormData> {
    private values: FormData;

    constructor(initialValues: FormData) {
        this.values = initialValues;
        makeAutoObservable(this);
    }

    public handleChange =
        (field: keyof FormData) => (element: { target: { value: string } }) => {
            runInAction(
                () =>
                    (this.values = {
                        ...this.values,
                        [field]: element.target.value,
                    })
            );
        };

    public field = (field: keyof FormData) => ({
        name: field,
        onChange: this.handleChange(field),
        value: this.values[field],
    });

    public getAllValues = () => this.values;

    public getOneField = (field: keyof FormData) => this.values[field];
}
