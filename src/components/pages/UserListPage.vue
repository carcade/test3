<template>
    <div class="w-full md:w-8/12 flex">
        <div class="w-6/12 bg-blue-300 px-5 py-8">
            <user-list :items="users"></user-list>
        </div>
        <div class="w-6/12 bg-green-300 px-5 py-8">
            <user-list :items="selectedUsers"></user-list>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {State, Getter, Mutation} from 'vuex-class'
    import UserList from 'src/components/UserList.vue';

    @Component({
        components: {
            UserList,
        },
    })
    export default class UserListPage extends Vue {
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @State users
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @State selectedUsers
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Getter isUserSelected
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation selectUser
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation unselectUser
    }
</script>
