import store from 'redux/stores/MainStore';

export default function reducer(state = store, action) {
    switch (action.type) {
        case 'SET_COUNT':
            return Object.assign({}, state, {
                count: state.count + 1
            });
        default:
            return state;
    }
}
