// @flow
/*
<template>
    <div>
        <p>flow-three</p>
        <p>{{foo()}} <!-- Type error --></p>
    </div>
</template>
*/
//<script>
    const flowIt = (a: number): number => {
        return a * 123; // Type error
    };

    // Vue component
    export default {
        methods: {
            foo(x) {
                flowIt(x); // Type error
                return flowIt('asdf'); // Type error
            },
        },

        created() {
            flowIt([]) // Type error
        }
    }
//</script>