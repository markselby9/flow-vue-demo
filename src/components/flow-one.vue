<template>
    <div>
        <p>I'm made with Flow!</p>
        <p>{{wrongFunction(isAString)}}</p>
    </div>
</template>

<script>
    /* @flow */

    const isAString: string = 'I am a string!';

    export default {
        data() {
            return {
                isAString
            }
        },
        methods: {
            wrongFunction(iAmAString: string) {
                return 2 * iAmAString + isAString;
            }
        }
    }
</script>