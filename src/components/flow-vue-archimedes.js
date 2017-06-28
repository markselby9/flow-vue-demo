/* eslint-disable no-undef,no-console */
// @flow
import * as _ from 'lodash';

const values: Array<number> = [1, 2, 3];

const handle = (input: number): string => `It's ${input}, hahaha`;  // expect string return value

export default {
    computed: {
        options(): Array<SelectItemType> {  // use 'SelectItemType' decalred in custom...
            // `this` points to the vm instance
            const options = [];
            values.forEach((val) => {
                options.push({
                    value: val,
                    label: val.toString(),
                });
            });
            return options; // flow can detect the options type, try to modify the 'label' string
        },
    },
    data() {
        return {
            selected: '',
            output: '',
        };
    },
    methods: {
        useLodash() {
            console.log('using lodash');
            const array1: Array<number> = [1, 2, 3];
            const array2: Array<number> = [4, 5, 6];
            const mergedArrayWrong: Array<number> = _.merge(array1, array2);  //wrong type!
            const concatArray: Array<number> = _.concat(array1, array2);
            console.log('mergedArrayWrong', mergedArrayWrong);
            console.log('concatArray', concatArray);
        },
    },
};
