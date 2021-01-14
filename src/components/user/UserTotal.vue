<template>
    <div class="section">
        <div class="container">
            <p class="subtitle">
                {{ $t('views.home.usersTotal') + ' ' + usersTotal }}
            </p>
            <b-skeleton v-if="isLoading" />
            <b-progress v-else size="is-medium" show-value :max="usersTotal">
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
