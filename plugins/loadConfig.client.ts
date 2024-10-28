import config from '~/developer.json';

export default defineNuxtPlugin((nuxtApp) => {
    console.log(config)
    nuxtApp.provide('devConfig', config);
});