import React, { useReducer, createContext } from 'react'
const AuthContext = createContext()
const intialState = { isAuthenticated: false }
const reducer = (state, { type }) => {

    switch (type) {
        case "LOGIN":
            return Object.assign({}, { isAuthenticated: true })
        case "LOGOUT":
            return Object.assign({}, { isAuthenticated: false })
        default:
            return state
    }

}

export default function AuthContextsProvider(props) {
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}
