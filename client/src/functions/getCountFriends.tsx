export function getCountFriends() {
    try {
        const countFriends = sessionStorage.getItem('@App:countFriends');
        return countFriends ? countFriends : 0;
    } catch (err) {
        console.log('Ops:', err);
    }
};


export function setCountFriends(count: any) {
    try {
        sessionStorage.setItem('@App:countFriends', count);
    } catch (err) {
        console.log('Ops:', err);
    }
};