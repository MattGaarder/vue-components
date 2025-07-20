<template>
    <div class="float-end">
        <button class="btn btn-outline-danger" @click="generateLuckyNumber()">
            <span v-if="luckyNumberOld === 0">
                Generate Lucky Number Old <br/>
                Range (1 - {{ maxNumberOld }})</span>
            <span v-else>Lucky Number Old: {{ luckyNumberOld }}<br/>
                Click to generate new lucky number old
            </span>
        </button>
    </div>
</template>

<script setup>

    import { ref } from "vue";

    let luckyNumberOld = ref(0);

    const props = defineProps({
        maxNumberOld: { type: Number, default: 100},
    });

    function generateLuckyNumber(){
        luckyNumberOld.value = Math.floor(Math.random() * props.maxNumberOld);
        console.log(luckyNumberOld.value)
    }

</script>