<template>
    <button @click="increment">Clicked {{ count }} Increment.</button>
    <button @click="decrement">Clicked {{ count }} Decrement.</button>
</template>

<script setup>
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted }  from "vue";

    import { useCounter } from "../composibles/useCounter";
    
    const { count, increment, decrement } = useCounter();

    onBeforeMount(() => {
        console.log("onBeforeMount - ButtonCounter.vue")
    });

    onMounted(() => {
        console.log("onMounted - ButtonCounter.vue")
    });

    onBeforeUpdate(() => {
        console.log("onBeforeUpdate - ButtonCounter.vue")
    });

    onUpdated(() => {
        console.log("onUpdated - ButtonCounter.vue")
    });

    onBeforeUnmount(() => {
        console.log("onBeforeUnmount - ButtonCounter.vue")
    });

    onUnmounted(() => {
        console.log("onUnmounted - ButtonCounter.vue")
    });


</script>


