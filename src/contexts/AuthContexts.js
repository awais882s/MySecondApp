import React, { useReducer, createContext, useContext } from 'react'
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
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}