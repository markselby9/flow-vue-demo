/* eslint-disable no-undef */
// @flow

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
        silly(input: number): string {
            this.output = handle(`input:${input}`);
            return 123;
            // Vue's method doesn't always need a method, so it's not a best place to use flow
        },
        clever() {
            debugger;
            if (typeof this.selected !== 'number') {
                console.warn('expect a number to be selected!');
                return;
            }
            // console.assert(typeof this.selected === 'number', 'input is a number');
            // manually assert type?
            this.output = handle(this.selected);
        },
    },
};
