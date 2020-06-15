<template>
    <div class="w-full min-h-screen flex items-stretch justify-center text-sm">
        <router-view
                v-if="usersLoaded"
                :key="$route.fullPath"
        >
        </router-view>
        <spinner :value="!usersLoaded"></spinner>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {State} from 'vuex-class';
    import Spinner from 'src/components/Spinner.vue';
    @Component({
        components: {Spinner},
    })
    export default class App extends Vue {
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        @State usersLoaded

        private created(): void {
            this.$store.dispatch('loadUsers');
        }
    }
</script>
