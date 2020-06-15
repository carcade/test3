<template>
    <div class="p-5 bg-white shadow-lg">
        <h2 class="text-xl mb-2">
            {{ user.name }}
        </h2>
        <p>Номер телефона: {{ user.phone }}</p>
        <p>Адрес: {{ user.address }}</p>
        <div class="w-full mt-3 flex justify-end">
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
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import User from 'src/models/User';
    import {Getter, Mutation} from 'vuex-class';

    @Component
    export default class UserProfile extends Vue {
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Getter isUserSelected
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation selectUser
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @Mutation unselectUser

        @Prop()
        public user!: User;
    }
</script>
