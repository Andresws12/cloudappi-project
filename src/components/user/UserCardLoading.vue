<template>
    <div>
        <div class="card user-card">
            <div class="card-image user-card_image">
                <figure class="image is-4by3" />
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <b-skeleton circle width="48px" height="48px" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            <b-skeleton />
                        </p>
                        <p class="subtitle is-6">
                            <b-skeleton />
                        </p>
                    </div>
                </div>

                <div class="content">
                    <b-skeleton />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'UseCard',
})
export default class UseCard extends Vue {}
</script>

<style lang="scss" scoped>
.user-card {
    min-height: 400px;
    &_image {
        background-color: $main-color-dark;
    }
}
</style>
