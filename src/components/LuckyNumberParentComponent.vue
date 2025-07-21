<template>
    <div class="bg-black text pt-3" :style="{ height: '100vh' }">
        <h1 class="text-center text-success">Learn Slots</h1>
        <div class="container text-center bg-white">
            <slot></slot>
            <button class="btn btn-primary text-white m-2" @click="newVersion=!newVersion">Toggle Component</button>
            <slot name="moreInfo"></slot>
            <button class="btn btn-primary text-white m-2" @click="newVersion=false">Lucky Number V1</button>
            <button class="btn btn-primary text-white m-2" @click="newVersion=true">Lucky Number V2</button>
            <br />
            <slot name="learnSlot"></slot>
            <br />

            <keep-alive include="['LuckyNumberV2', 'LuckyNumberV1']"> 
                <component :is="currentComponent" class="border"/>
            </keep-alive>
        </div>
    </div>

</template>

<script setup>
    import { reactive, ref, provide, computed } from "vue";

    import LuckyNumberV2 from "./LuckyNumberV2.vue";
    import LuckyNumberV1 from "./LuckyNumberV1.vue";

    const newVersion = ref(true);

    const currentComponent = computed(() => {
        return newVersion.value ? LuckyNumberV2 : LuckyNumberV1;
    });
</script>

<style scoped>
    h1 {
        background-color: green;
    }
</style>