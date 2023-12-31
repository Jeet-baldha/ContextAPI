/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

export const TodoContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"Add message",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},

});

export const TodoContextProvider = TodoContext.Provider;

export  function useTodo(){
    return useContext(TodoContext);
}