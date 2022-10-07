import {LoginForm} from './LoginForm'
const Image_URL = "https://images.unsplash.com/photo-1660836214775-e7e866ce9774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

export const LoginPage = () => {
  return(
  <div 
  className="row align-items-center justify-content-center bg-dark px-4 h-100">

  
  <div className="d-lg-block d-none col h-100 py-3">
    <img 
    style={{objectFit:'cover'}}
    className="d-lg-block d-none rounded h-100 w-100" 
    src={Image_URL} />
  </div>
  
  <div className="col">
    <LoginForm />
  </div>
  
  </div>
  )
}