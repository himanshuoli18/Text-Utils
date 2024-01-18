import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, Router,Routes} from 'react-router-dom'
import Textform from './Components/Textform.jsx'
import About from './Components/About.jsx'


const AppWithRoutes = () => {
    const initialDarkMode = 'light';
    const initialButtonColor = 'dark';
    return (
        <Routes location={location}>
            <Route path='/' element={<App />}>
                <Route path='/home' element={<Textform textboxText='Enter Text Here' mode={initialDarkMode} btnColor={initialButtonColor}/>}/>
                <Route path='/about' element={<About mode={initialDarkMode}/>}/>
            </Route>
        </Routes>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>            
        <Router>
            <AppWithRoutes />
        </Router>
    </React.StrictMode>,
)
