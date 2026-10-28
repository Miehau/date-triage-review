import { mount } from 'svelte';
const pages = import.meta.glob('./routes/kb/**/+page.svx');
const path = window.location.pathname.replace(/\/$/, '');
const key = `./routes${path && path !== '/index.html' ? path : '/kb/incidents/4471-review'}/+page.svx`;
const load = pages[key];
if (!load) document.getElementById('app').textContent = 'Page not found';
else load().then(({ default: Page }) => mount(Page, { target: document.getElementById('app') }));
