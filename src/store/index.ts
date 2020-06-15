import Vuex, {ActionTree, GetterTree, MutationTree} from 'vuex';
import {RootState} from 'src/store/types';
import User from 'src/models/User';
import Vue from 'vue';
Vue.use(Vuex);

export const state: RootState = {
    usersLoaded: false,
    users: [],
    selectedUsers: [],
};

export const getters: GetterTree<RootState, RootState> = {
    findUser(state: RootState): (userId: number) => User | undefined {
        return (userId: number): User | undefined => {
            return state.users.find(item => item.id === userId);
        }
    },
    isUserSelected(state: RootState): (user: User) => boolean {
        return (user: User): boolean => {
            return state.selectedUsers.findIndex(item => item.id === user.id) > -1;
        }
    },
};

export const mutations: MutationTree<RootState> = {
    setUsersLoaded(state: RootState, loaded: boolean): void {
        state.usersLoaded = loaded;
    },
    setUsers(state: RootState, users: User[]): void {
        state.users = users;
    },
    selectUser(state: RootState, user: User): void {
        if (!state.selectedUsers.find(item => item.id === user.id)) {
            state.selectedUsers.push(user);
        }
    },
    unselectUser(state: RootState, user: User): void {
        state.selectedUsers = state.selectedUsers.filter(item => item.id !== user.id);
    },
};

export const actions: ActionTree<RootState, RootState> = {
    async loadUsers(context): Promise<void> {
        const users: User[] = await (new Promise<User[]>(resolve => {
            const remoteUsers: User[] = [
                {id: 1, name: 'Иван Иванов', phone: '+7 (800) 555-35-35', address: 'Россия, г. Москва, ул. Ленина'},
                {id: 2, name: 'Игорь Некрасов', phone: '+7 (900) 444-33-33', address: 'Россия, г. Москва, ул. Карла-Маркса'},
                {id: 3, name: 'Олег Петров', phone: '+7 (999) 111-22-11', address: 'Россия, г. Москва, ул. Пушкина'},
            ];

            setTimeout(_ => resolve(remoteUsers), 2000);
        }));

        context.commit('setUsers', users);
        context.commit('setUsersLoaded', true);
    },
};

const store = new Vuex.Store<RootState>({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
});

export default store;

