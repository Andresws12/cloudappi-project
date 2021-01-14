<template>
    <div class="section user-table-overview" data-cy="users-table-overview">
        <div class="container">
            <p class="subtitle" data-cy="users-table-subtitle">
                {{ $t('views.home.table') }}
            </p>
            <b-table
                :data="users"
                :loading="isLoading"
                striped
                bordered
                hoverable
                :mobile-cards="false"
                paginated
                pagination-position="bottom"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                data-cy="users-table"
            >
                <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    numeric
                    v-slot="props"
                >
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column
                    field="name"
                    :label="$t('views.home.name')"
                    v-slot="props"
                >
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column
                    field="email"
                    :label="$t('views.home.email')"
                    v-slot="props"
                >
                    {{ props.row.email }}
                </b-table-column>
            </b-table>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { User } from '@/models/User';

@Component({
    name: 'UserTable',
})
export default class UserTable extends Vue {
    @Prop(Array) private users: User[];
    @Prop(Boolean) private isLoading: boolean;
}
</script>

<style lang="scss" scoped></style>
