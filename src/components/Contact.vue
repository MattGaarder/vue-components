<template>
    <div class="bg-info rounded p-1 p-4 m-2">
        <div class="row">
            <div class="col-5">
                <h3>Name: {{ named }}</h3>
                <p>Email: {{ email }}</p>
                <p>Phone: {{ phone }}</p>
            </div>
            <div class="col-2">
                <button @click="emit('update-favourite', { isFavourite: props.isFavourite, named: props.named });" :class="[isFavourite ? 'btn btn-warning form-control' : 'btn btn-success form-control']">
                    {{ isFavourite  ? "Remove from" : "Add to"  }} favourite
                </button>
            </div>
            <div class="col-2">
                <LuckyNumberOld :maxNumberOld="maxLuckyNumberOld"></LuckyNumberOld>
            </div>
            <div class="col-2">
                <LuckyNumber></LuckyNumber>
            </div>
        </div>
        <span class="float-end small" v-if="ownername != ''">*this contact info belongs to {{ ownername }}</span>
    </div>
</template>
<script setup>

import { ref, defineProps }  from "vue";

import LuckyNumberOld from "./LuckyNumberOld.vue";
import LuckyNumber from "./LuckyNumber.vue";

// const email = ref("");

const props = defineProps({
    named: { type: String, required : true},
    phone: Number,
    ownername: String,
    email: {type: String, required: false, default: "~n/a~"},
    isFavourite: Boolean,
    maxLuckyNumberOld: Number,
});

const emit = defineEmits(["update-favourite"]);

// function toggleFavourite(){
//     emit("update-favourite", { isFavourite: props.isFavourite, named: props.named });
// };

</script>