<template>
    <div>
        <input
                type="text"
                class="px-5 py-2 bg-white w-full mb-5 focus:outline-none shadow-lg"
                placeholder="Введите имя..."
                @input="onSearchTextInput($event.target.value)"
        >
        <div
                v-for="user in filteredUserList"
                :key="user.id"
                class="bg-white shadow px-5 py-1 mb-3 flex"
        >
            <div
                    class="flex-grow cursor-pointer"
                    @click="$router.push({ name: 'user', params: { userId: user.id } })"
            >
                {{ user.name }}
            </div>
            <div class="flex-shrink-0 flex-grow-0 ml-5">
                <button
                        v-show="!isUserSelected(user)"
                        class="focus:outline-none hover:text-blue-400 text-blue-700"
                        @click="selectUser(user)"
                >
                    <i class="fas fa-plus "></i>
                </button>
                <button
                        v-show="isUserSelected(user)"
                        class="focus:outline-none hover:text-red-400 text-red-700"
                        @click="unselectUser(user)"
                >
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import User from 'src/models/User';
    import * as _ from 'lodash';
    import {
        Getter,
        Mutation,
    } from 'vuex-class'

    @Component
    export default class UserList extends Vue {
        @Prop()
        public items!: User[];

        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Getter isUserSelected
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation selectUser
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation unselectUser

        public searchText: string = '';

        public onSearchTextInput: any = _.debounce(function (this: UserList, text: string) {
            this.searchText = text;
        }, 300);

        public get filteredUserList(): User[] {
            return this.items.filter(item => item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        }
    }
</script>
