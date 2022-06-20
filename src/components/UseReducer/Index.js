import React, { useReducer, useState } from 'react'

const ACTION_TYPES = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
}

const state = []; 

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
        case ACTION_TYPES.TOGGLE_TODO:
            return state.map((e, i) => {
                if (e.id === action.payload.id) {
                    return {...e, complete: !e.complete}
                }

                return e
            })
        case ACTION_TYPES.DELETE_TODO:
            return state.filter((e, i) => e.id !== action.payload.id)
        default:
            return state;
    }
}

const newTodo = name => {
    return {
        id: Date.now(),
        name,
        complete: false
    }
}

function Index() {
    const [state, disptach] = useReducer(reducer, []);
    const [name, setName] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        disptach({type: ACTION_TYPES.ADD_TODO, payload: {name}});
        setName("");
    }

    const handleOnToggle = id => {
        disptach({type: ACTION_TYPES.TOGGLE_TODO, payload: {id}});
    }

    const handleOnDelete = id => {
        disptach({type: ACTION_TYPES.DELETE_TODO, payload: {id}})
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {state.map((e, i) => 
                <div key={i} style={{display: 'flex', justifyContent: 'space-between', margin: '3rem'}}>
                    <p style={{color: e.complete ? 'black' : 'gray'}}>{e.name}</p>
                    <button onClick={() => handleOnToggle(e.id)}>Toggle</button>
                    <button onClick={() => handleOnDelete(e.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Index