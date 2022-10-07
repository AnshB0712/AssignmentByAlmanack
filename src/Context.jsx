import { useReducer,createContext,useContext } from 'react'

const Context = createContext()

const reducer = (state,action) => {
  const {type,payload} = action
  
  if(type==="LOGIN"){
    
    const isOldUser = state.users.some(user => user.email===payload.email)
    const currentUser = state.users.find(user => user.email===payload.email)
    
    return ({
      ...state,
      users: isOldUser ? [...state.users]:[...state.users,{...payload,events:[]}],
      currentUser: payload.email
      })
  }
  
  if(type==="ADD_EVENT"){
    
    const currentUserData = state.users.find(user => user.email===state.currentUser)
    
    const nonCurrentUsers = state.users.filter(user => user.email!==state.currentUser)
    
    return ({
      ...state,
      users: [
        ...nonCurrentUsers,{
        ...currentUserData,
        events:[
          ...currentUserData.events,payload
        ]
      }]
      })
  }
  
  if(type==="EDIT_EVENT"){
    
    const currentUserData = state.users.find(user => user.email===state.currentUser)
    
    const nonCurrentEvents = currentUserData.events.filter(event => event.id !== payload.id)
    
    const nonCurrentUsers = state.users.filter(user => user.email!==state.currentUser)
    
    return {
    ...state,
    users: [...nonCurrentUsers,{
      ...currentUserData,
      events: [...nonCurrentEvents,payload]
    }]
    }
  }
  
  return state
}

export const useAppContext = () => useContext(Context)

export const Provider = ({children}) =>
{
  
  const [state,dispatch] = useReducer(reducer,{
    users: [],
    currentUser: null
  })
  
  return (
  <Context.Provider
  value={{ state,dispatch }}
  >
  {children}
  </Context.Provider>
  )
}