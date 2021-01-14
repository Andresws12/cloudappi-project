<template>
    <div>
        <div class="card user-card">
            <div class="card-image user-card_image">
                <figure class="image is-4by3">
                    <img
                        src="../../assets/img/userWomanWithSpace.svg"
                        alt="User Woman"
                        v-if="isWoman"
                    />
                    <img
                        src="../../assets/img/userManWithSpace.svg"
                        alt="User Men"
                        v-else
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img
                                src="../../assets/img/userWoman.svg"
                                alt="User Woman"
                                v-if="isWoman"
                            />
                            <img
                                src="../../assets/img/userMan.svg"
                                alt="User Man"
                                v-else
                            />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            {{ userName }}
                        </p>
                        <p class="subtitle is-6">@{{ nickName }}</p>
                    </div>
                </div>

                <div class="content">
                    {{ email }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'UseCard',
})
export default class UseCard extends Vue {
    @Prop(Number) private id: number;
    @Prop(String) private email: string;
    @Prop(String) private userName: string;

    private get nickName(): string {
        return `${
            this.userName.split(' ')[0] +
            this.userName.split(' ')[1].slice(0, 2)
        }`;
    }

    private get isWoman(): boolean {
        return this.id === 1 || this.id === 3 ? true : false;
    }
}
</script>

<style lang="scss" scoped>
.user-card {
    min-height: 400px;
    &_image {
        background-color: $main-color-dark;
    }
}
</style>
