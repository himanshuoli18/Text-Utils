import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Textform from './Components/Textform'
import Alert from './Components/Alert'
import About from './Components/About'

function App() {
    const [darkMode, setDarkMode] = useState('light')
    const [darkModeButtonColor,setDarkModeButtonColor] = useState('dark')
    const [buttonText,setButtonText] = useState('Dark Mode')
    const [buttonColor,setButtonColor] = useState('dark')
    const [showAlert,setShowAlert] = useState(false)
    
    const toggleMode = () => {
        if(darkMode==='light') {
            setDarkMode('dark')
            setDarkModeButtonColor('light')
            setButtonText('Light Mode')
            document.body.style.backgroundColor='#0A0A0A'
            setButtonColor('light')
        }
        else{
            setDarkMode('light')
            setDarkModeButtonColor('dark')
            setButtonText('Dark Mode')
            document.body.style.backgroundColor='white'
            setButtonColor('dark')
        }
    }
    const toggleTheme = (color) => {
        if (darkMode=='dark'){
            switch (color) {
                case 'black':
                    document.body.style.backgroundColor = '#0A0A0A';
                    break;
                case 'grey':
                    document.body.style.backgroundColor = '#495057';
                    break;
                case 'dark-green':
                    document.body.style.backgroundColor = '#023020';
                    break;
                case 'red':
                    document.body.style.backgroundColor = '#8B0000';
                    break;
                default:
                    document.body.style.backgroundColor = 'white';
            }
        }
        else {
            setShowAlert(true)
        }
    };
    // const toggleContacts = (number) => {
    //     switch(number) {
    //         case 1:
    //             <a href="https://www.linkedin.com/in/himanshuoli/" target="_blank">I</a>
    //     }
    // }

    return (
        <>
            <Navbar mode={darkMode} toggleMode={toggleMode} text={buttonText} color={darkModeButtonColor} toggleTheme={toggleTheme}/>
            {showAlert && <Alert onClose={() => setShowAlert(false)} />}
            <Routes>
                <Route exact path="/" element={<Textform textboxText='Enter Text Here' mode={darkMode} btnColor={buttonColor}/>} />
                <Route path="/about" element={<About mode={darkMode}/>} />
                {/* <Route path='/contact' element={<Contact />} /> */}
            </Routes>
        </>
    )
}

export default App
