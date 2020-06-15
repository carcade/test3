import User from 'src/models/User';

export interface RootState {
    usersLoaded: boolean;
    users: User[];
    selectedUsers: User[];
}
