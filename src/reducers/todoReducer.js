const todoReducer = (state, action) => {

    switch (action.type) {
        case 'fill':
            return action.payload;
        
        case 'add':
            return [
                ...state,
                action.payload
            ];
        
        case 'delete':
            return state.filter(item => item.id !== action.payload);

        case 'update':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, title: action.payload.title };
                }
                return item;
            });

        case 'toggleDone':
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, done: !item.done };
                }
                return item;
            });

        default:
            throw new Error('Undefined action');
    }
}

export default todoReducer;