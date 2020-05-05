import * as actionTypes from './actions';

const initialState = {
    todos: [
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]
};

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_TODO:
            const UpdatedAfterRemove = state.todos.filter((todo, index) => index !== action.todoId); // filter creates new array with all elements that pass the test implemented by the provided function
            return {
                ...state,
                todos: UpdatedAfterRemove
            };
        case actionTypes.ADD_TODO:
            const UpdatedAfterAdd = state.todos.concat({ // concat returns new array with added item, this way og array is not modified
                text: action.todoValue,
                isCompleted: false
            });
            return {
                ...state,
                todos: UpdatedAfterAdd
            };
        case actionTypes.COMPLETE_TODO:
            const UpdatedAfterCompleted = state.todos.map((todo, index) => { //  map creates new array populated with the results of calling a function on every element in array
                if (index === action.todoIndex) {
                    todo.isCompleted = true
                    return todo
                }
                return todo
            })
            return {
                ...state,
                todos: UpdatedAfterCompleted
            };
    }
    return state;
};

export default reducer;
