import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {LoginPage} from './pages/Login '
import {EventsPage} from './pages/EventsPage'
import {SingleEventPage} from './pages/SingleEventPage'
import {AddEventPage} from './pages/AddTaskPage'
import {EditEventPage} from './pages/EditEventPage'

function App() {
  return (
  <BrowserRouter>
  <Routes>
  
  <Route path="/" 
  element={<LoginPage />} />
  <Route path="/events" 
  element={<EventsPage />} />
  <Route path="/addevent" 
  element={<AddEventPage />} />
  <Route path="/editevent/:eventID" 
  element={<EditEventPage />} />
  <Route path="/:eventID" 
  element={<SingleEventPage />} />
  
  </Routes>
  </BrowserRouter>
  )
}

export default App
