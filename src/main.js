import { createApp } from 'vue';
import App from "./App.vue";

import ButtonCounter from './components/ButtonCounter.vue';


// if you want to import a component globally we use import in main.js as follows
import Contact from './components/Contact.vue';

// but first we need to break the original set up of createApp(App).mount('#app') into pieces

const app = createApp(App);

// before we mount this we can mount additional components, as follows:

// app.component("contact", Contact);

// takes 2 parameters, first is the name of component (used when consuming component - typically kebab-case)
// now because it is registered globally you can go to App.vue - and use contanct-us as an html element/property
// i.e. <contact-us></contact-us> (can be used and reused multiple times)

app.mount("#app");


