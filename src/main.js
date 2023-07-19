import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Chip from 'primevue/chip';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Galleria from 'primevue/galleria';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InlineMessage from 'primevue/inlinemessage';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import CodeBlock from 'vue3-code-block';
import BlockPagination from '@/components/BlockPagination.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';

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
    .component('CodeBlock', CodeBlock)
    .component('BlockPagination', BlockPagination)
    .component('Button', Button)
    .component('LoaderComponent', LoaderComponent)
    .component('InputText', InputText)
    .use(router)
    .use(PrimeVue)
    .mount('#app');
