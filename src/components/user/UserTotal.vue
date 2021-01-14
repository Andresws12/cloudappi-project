<template>
    <div class="section user-total-overview" data-cy="users-total-overview">
        <div class="container">
            <p class="subtitle" data-cy="users-total-subtitle">
                {{ $t('views.home.usersTotal') + ' ' + usersTotal }}
            </p>
            <div v-if="isLoading" data-cy="users-total-loading">
                <b-skeleton />
            </div>
            <div v-else data-cy="users-total-progress-bar">
                <b-progress size="is-medium" show-value :max="usersTotal">
                    <template #bar>
                        <b-progress-bar :value="totalWomen" type="is-primary">
                            {{ totalWomen + ' ' + $t('views.home.women') }}
                        </b-progress-bar>
                        <b-progress-bar :value="totalMen" type="is-info">
                            {{ totalMen + ' ' + $t('views.home.men') }}
                        </b-progress-bar>
                    </template>
                </b-progress>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'UserTotal',
})
export default class UserTotal extends Vue {
    @Prop(Number) private totalMen: number;
    @Prop(Number) private usersTotal: number;
    @Prop(Number) private totalWomen: number;
    @Prop(Boolean) private isLoading: boolean;
}
</script>

<style lang="scss" scoped></style>
