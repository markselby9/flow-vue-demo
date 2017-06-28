// @flow
/* @flow
<style>
</style>
<template>
    <div>
        <p>flow-two component</p>
        <p>{{flowIt(123)}}</p>
        <p>{{flowIt('aaa')}}</p> <!--wrong!-->
    </div>
</template>
*/
//<script>

    // below is a code with type error, which flow CAN detect here
    const isAString: string = 'I am a string!';
    const foobar = (str: string): number => {
        const foo = str * 2;
        return '233';
    };
    foobar(isAString);

    export default {
        methods: {
            flowIt (a: number): number {
                return a * 10
            }
        },

        mounted: function () {
            this.flowIt(20);
            this.flowIt('bah'); // Flow won't detect error, as flowIt is attached to 'this'.
        }
    }
    // </script>
