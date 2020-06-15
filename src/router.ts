import VueRouter from 'vue-router';
import UserListPage from 'src/components/pages/UserListPage.vue';
import UserProfilePage from 'src/components/pages/UserProfilePage.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/users', alias: '/', name: 'users', component: UserListPage},
        {
            path: '/user/:userId',
            name: 'user',
            component: UserProfilePage,
            props: (route): Record<string, unknown> => {
                const userId = Number.parseInt(route.params.userId, 10)
                return {userId};
            },
        },
    ],
});

export default router;
