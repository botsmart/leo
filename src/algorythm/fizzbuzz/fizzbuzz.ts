export class FizzBuzz<T>{
    predicts: Array<[(value: T | number) => boolean, () => void]>;

    apply(value: T) {
        this.predicts.forEach((predict) => {
            predict[0](value) ? predict[1]() : "";
        });
    }


    applyAll(values: T[]) {
        values.forEach((value) => {
            this.apply(value);
        });
    }

    original(value: number) {
        for (let index = 0; index < value; index++) {
            this.predicts.find((predict) => predict[0](index))[1]();
        }
    }
}