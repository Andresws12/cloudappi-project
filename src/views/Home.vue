<template>
    <div class="home-view section">
        {{ users }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import { User } from '@/models/User';

@Component({
    name: 'Home',
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get users(): User[] {
        return this.mainStore.state.users;
    }
}
</script>

<style lang="scss" scoped></style>
