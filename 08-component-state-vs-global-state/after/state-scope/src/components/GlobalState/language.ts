import {ref, computed} from 'vue';

export const texts = {
    en: {
        header: 'Hello Vue',
        about: 'An approachable, performant and versatile framework for building web user interfaces.'
    },
    he: {
        header: 'שלום ויו',
        about: 'ויו היא פריימוורק לפיתוח יישומי ווב'
    }
}

export const language = ref<keyof typeof texts>('en');
export const t = computed(() => texts[language.value]);
export const direction = computed(() => 
    language.value === 'he' ? 'rtl' : 'ltr'
)
