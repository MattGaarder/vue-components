<template>
    <div class="col-4 bg-white text-center p-4">
        <h4 class="text-success">Random Number Generator</h4>
        <hr />
        Max Range:
        <input v-model.number="maxNumberV2" class="rounded" type="number"/>
        <br/><br/>
        <button class="btn btn-danger text-black" @click="generateLuckyNumber()">
            <span v-if="luckyNumberV2 === 0">
                Generate Lucky Number <br/>
                Range (1 - {{ maxNumberV2 }})</span>
            <span v-else>Lucky Number V2: {{ luckyNumberV2 }}<br/>
            Click to generate new lucky number
            </span>
        </button>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    let luckyNumberV2 = ref(0);
    const maxNumberV2 = ref(100);

    function generateLuckyNumber(){
        luckyNumberV2.value = Math.floor(Math.random() * maxNumberV2.value);
        console.log(luckyNumberV2.value)
    }
</script>