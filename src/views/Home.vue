<template>
    <div class="home-view section">
        <translations-button />
        <user-cards :users="users" :isLoading="isLoading" />
        <user-total
            :isLoading="isLoading"
            :totalMen="totalMen"
            :totalWomen="totalWomen"
            :usersTotal="usersTotal"
        />
        <user-table :users="users" :isLoading="isLoading" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import { User } from '@/models/User';

import UserCards from '@/components/user/UserCards.vue';
import UserTable from '@/components/user/UserTable.vue';
import UserTotal from '@/components/user/UserTotal.vue';
import TranslationsButton from '@/components/common/TranslationsButton.vue';

@Component({
    name: 'Home',
    components: {
        UserCards,
        UserTable,
        UserTotal,
        TranslationsButton,
    },
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get users(): User[] {
        return this.mainStore.state.users;
    }

    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    private get usersTotal(): number {
        return this.users.length;
    }

    private get totalMen(): number {
        return this.mainStore.getters.totalMen;
    }

    private get totalWomen(): number {
        return this.mainStore.getters.totalWomen;
    }
}
</script>

<style lang="scss" scoped></style>
