<template>
    <div id="app">
        <router-view />
        <GithubButton />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import GithubButton from '@/components/GithubButton.vue';

import Axios from 'axios';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'App',
    components: {
        GithubButton,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    public async created(): Promise<void> {
        this.$i18n.locale = this.currentLanguage;
        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;

        this.mainStore.actions.getUsers();
    }

    @Watch('currentLanguage')
    private onChangeLanguage() {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="scss" scoped></style>
