<template>
    <div>
        <p>I'm made with Flow!</p>
        <p>{{wrongFunction(isAString)}}</p>
    </div>
</template>

<script>
    /* @flow */

    // below is a code with type error, which flow can't detect here
    const isAString: string = 'I am a string!';
    const foobar = (str: string): number => {
        const foo = str * 2;
        return '233';
    };
    foobar(isAString);

    export default {
        data() {
            return {
                isAString
            }
        },
        methods: {
            wrongFunction: function wrongFunction(iAmAString: string) {
                return 2 * iAmAString + isAString;
            }
        }
    }
</script>

<!-- simply use flow in script tag, can compile but doesn't detect error -->
