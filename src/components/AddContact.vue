<template>

    <div class="container border rounded p-2">
        <div class="text-center text-white">Add New Contact</div>
        <form @submit.prevent="addContact">
            <div class="row">
                <div class="col-4">
                    <input type="text" class="form-control" v-model="contact.named" placeholder="Name" />
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-model="contact.email" placeholder="Email" />
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-model.number="contact.phone" placeholder="Phone" />
                </div>
                <div class="col-6 offset-3 p-2">
                    <button type="submit" class="btn btn-secondary w-100">
                        Add Contact
                    </button>
                </div>
            </div>
        </form> 
    </div>

</template>


<script setup>
    import { reactive, defineEmits, defineProps } from 'vue';

    // const emit = defineEmits(["add-contact"]);

    const props = defineProps({ onAddContact: Function });

    const contact = reactive({
        named: "",
        email: "",
        phone: "",
    });

    function addContact() {
        props.onAddContact({
            named: contact.named,
            email: contact.email,
            phone: contact.phone,
        });
        console.log(contact);
        contact.named= "";
        contact.email= "";
        contact.phone = "";
    };

    // function addContact() {
    //     emit("add-contact", {
    //         named: contact.named,
    //         email: contact.email,
    //         phone: contact.phone,
    //     });
    //     console.log(contact);
    //     contact.named= "";
    //     contact.email= "";
    //     contact.phone = "";
    // };

    // function onAddContact(contact){
    //     contact.ownerName = ownerName.value;
    //     contact.isFavourite = false;
    //     return contacts.push(contact);
    // }


</script>