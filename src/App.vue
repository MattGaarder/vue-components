<template>
    <div class="bg-black text pt-3" :style="{ height: '100vh' }">
        <div class="text-center text-success">ContactOPedia</div>
        <div>{{ message }}</div>  
        <div class="container">
            <div class="row text-white p-2 mb-2">
                <div class="col-4">
                    Contact Owner Name : <input v-model="ownerName" />
                </div>
                <div class="col-4 text-end">
                    Max Lucky Number Old: <input v-model.number="maxNumberOld" />
                </div>
                <div class="col-4 text-end">
                    Max Lucky Number New: <input v-model.number="maxNumber" />
                </div>
            </div>
            <br /><br />
            <!-- <AddContact @add-contact="onAddContact"></AddContact> -->
             <AddContact :onAddContact="onAddContact"></AddContact>
            <div class="row">
                <div class="col-12" v-for="contact in contacts" :key="contact.named">
                    <Contact
                        :named="contact.named"
                        :phone="contact.phone"
                        :ownername="contact.ownername"
                        :email="contact.email"
                        :isFavourite="contact.isFavourite" 
                        :maxLuckyNumberOld="maxNumberOld"
                        @update-favourite="contact.isFavourite = updateIsFavourite($event, contact.phone)"
                    >
                    </Contact>
                </div>
            </div>
            <LuckyNumberOld :maxNumberOld="10"></LuckyNumberOld>
            <ButtonCounter></ButtonCounter>
            <ButtonCounter></ButtonCounter>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref, provide } from "vue";
    import ButtonCounter from './components/ButtonCounter.vue';
    import Contact from './components/Contact.vue';
    import AddContact from "./components/AddContact.vue";
    import LuckyNumberOld from "./components/LuckyNumberOld.vue";
    import LuckyNumber from "./components/LuckyNumber.vue";



    const message = "Hello World";
    const ownerName = ref("Gaaredr");

    const maxNumberOld = ref(100);
    const maxNumber = ref(100);

    provide("maxLuckyNumber", maxNumber);

    const contacts = reactive([
        {
            named: "matt",
            phone: "07498658031", 
            ownername: ownerName,
            isFavourite: false,
        },
        {
            named: "bella",
            phone: "2323526623t", 
            ownername: ownerName.value,
            isFavourite: true,
        },
        {
            named: "ben",
            phone: "5632263475743748", 
            ownername: ownerName,
            isFavourite: false,
        },
        {
            named: "squancj",
            phone: "92326344574686588754", 
            ownername: ownerName.value,
            isFavourite: true,
        }
    ]);

    function onAddContact(contact) {
        contact.ownername = ownerName.value;
        contact.isFavourite = false;
        contacts.push(contact);
    };


    function updateIsFavourite(oldValuesFromChildComponent, phoneNumberFromParent){
        console.log(phoneNumberFromParent);  // this is being passed from parent App component
        console.log(oldValuesFromChildComponent); // will also log name as well as favourite boolean from child component  
        return !oldValuesFromChildComponent.isFavourite;
    };
</script>

<!-- <style>
</style> -->