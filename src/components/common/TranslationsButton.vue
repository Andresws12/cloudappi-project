<template>
    <b-button
        type="is-info"
        icon-left="globe"
        class="translation-button"
        @click="changeLanguage()"
        data-cy="translation-button"
    >
        {{ currentLanguage }}
    </b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'TranslationsButton',
    components: {},
})
export default class TranslationsButton extends Vue {
    private mainStore = mainStore.context(this.$store);

    private changeLanguajeToSpanish(): void {
        this.mainStore.actions.changeLanguajeToSpanish();
    }

    private changeLanguajeToEnglish(): void {
        this.mainStore.actions.changeLanguajeToEnglish();
    }

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguage(): void {
        this.currentLanguage === 'es'
            ? this.changeLanguajeToEnglish()
            : this.changeLanguajeToSpanish();
    }
}
</script>

<style lang="scss" scoped>
.translation-button {
    top: 20px;
    left: 20px;
    position: fixed;
    text-transform: uppercase;
    z-index: 100;
    &_icon {
        margin-right: 3px;
    }
    @include mobile {
        top: 10px;
        left: 10px;
    }
}
</style>
