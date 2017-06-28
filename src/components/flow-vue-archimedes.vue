<template>
    <div>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.label }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
        <div></div>
        <button @click="useLodash">Use flow with lodash library?</button>
        <div>Output: {{output}}</div>
    </div>
</template>
<script src="./flow-vue-archimedes.js">
</script>