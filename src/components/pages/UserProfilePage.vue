<template>
    <div class="w-full md:w-8/12 flex">
        <div class="w-6/12 bg-blue-300 px-5 py-8">
            <button
                    class="rounded bg-white shadow px-5 py-1 text-blue-400 mb-5 focus:outline-none"
                    @click="$router.push('/')"
            >
                Назад
            </button>

            <user-profile
                    v-if="user"
                    :user="user"
            >
            </user-profile>
            <div
                    v-else
                    class="p-5 bg-white shadow-lg"
            >
                Пользователь не найден.
            </div>
        </div>
        <div class="w-6/12 bg-green-300 px-5 py-8">
            <user-list :items="selectedUsers"></user-list>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import User from 'src/models/User';
    import {State, Getter, Mutation} from 'vuex-class'
    import UserList from 'src/components/UserList.vue';
    import UserProfile from 'src/components/UserProfile.vue';

    @Component({
        components: {
            UserProfile,
            UserList,
        },
    })
    export default class UserProfilePage extends Vue {
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

        @Prop()
        public userId!: number;

        public user: User | null = null;

        @Getter('findUser')
        public findUser!: (userId: number) => User | undefined;

        private created(): void {
            const foundUser: User | undefined = this.findUser(this.userId);

            if (foundUser) {
                this.user = foundUser;
            }
        }
    }
</script>
