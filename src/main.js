import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';
import Chip from 'primevue/chip';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Galleria from 'primevue/galleria';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InlineMessage from 'primevue/inlinemessage';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import vueCodeHighlight from 'vue-code-highlight';
import 'vue-highlight-code/dist/style.css';
import 'vue-code-highlight/themes/prism-coy.css';

const app = createApp(App);
app.component('PrimeChip', Chip) 
    .component('Galleria', Galleria)
    .component('Tag', Tag)
    .component('Card', Card)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    .component('InlineMessage', InlineMessage)
    .use(router)
    .use(vueCodeHighlight)
    .use(PrimeVue)
    .mount('#app');
