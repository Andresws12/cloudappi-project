<template>
    <div class="container user-cards-view">
        <p class="title has-text-centered">{{ $t('views.home.users') }}</p>
        <div class="columns" v-if="isLoading">
            <user-card-loading
                v-for="index in 4"
                :key="index"
                class="column is-multiline is-mobile"
            />
        </div>
        <div class="columns" v-else>
            <user-card
                v-for="user in users"
                :key="user.id"
                :id="user.id"
                :userName="user.name"
                :email="user.email"
                class="column is-multiline is-mobile"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { User } from '@/models/User';

import UserCard from '@/components/user/UserCard.vue';
import UserCardLoading from '@/components/user/UserCardLoading.vue';

@Component({
    name: 'UserCards',
    components: {
        UserCard,
        UserCardLoading,
    },
})
export default class UserCards extends Vue {
    @Prop(Array) private users: User[];
    @Prop(Boolean) private isLoading: boolean;
}
</script>

<style lang="scss" scoped></style>
