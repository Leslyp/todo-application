import * as actionTypes from './actions';

const initialState = {
    todos: [
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Build a todo app",
            isCompleted: false
        },
        {
            text: "Run through code review for todo app",
            isCompleted: false
        }
    ]
};

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_TODO:
            const UpdatedAfterRemove = state.todos.filter((todo, index) => index !== action.todoId);
            return {
                ...state,
                todos: UpdatedAfterRemove
            };
        case actionTypes.ADD_TODO:
            const UpdatedAfterAdd = state.todos.concat({
                text: action.todoValue,
                isCompleted: false
            });
            return {
                ...state,
                todos: UpdatedAfterAdd
            };
        case actionTypes.COMPLETE_TODO:
            const UpdatedAfterCompleted = state.todos.map((todo, index) => {
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
