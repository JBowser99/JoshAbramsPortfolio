// App.jsx
import './styles/App.css';
import './styles/Scroll.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components from your components folder
import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  DarkMode,
  Linkedln,
} from './components';

// Import the Resume page
import Resume from './pages/Resume'; // ✅ Make sure this path matches your project

//<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">
//  Linkedin icons created by Picons - Flaticon
//</a>

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Resume page route */}
        <Route path="/resume" element={<Resume />} />

        {/* ✅ Main portfolio route (default "/") */}
        <Route
          path="/"
          element={
            <>
              {/* Main container */}
              <div className="w-full h-full my-auto mx-auto">
                <Navbar />

                {/* Hero section with background card */}
                <div className="max-w-[85vw] max-h-[70vh] bg-sky-200/20 border border-slate-500 rounded-xl backdrop-blur-xl mx-auto flex flex-col overflow-hidden mt-32">
                  <Linkedln />
                  <Hero />

                  {/* Resume Button — goes to /resume */}
                  <a
                    href="/resume"
                    className="z-10 hover:border-sky-200/50 bg-sky-600/30 fixed border-2 border-sky-600/60 rounded-full my-32 mx-4 h-16 w-16 sm:w-28 text-white text-[10px] md:text-sm font-bold uppercase text-center flex items-center justify-center"
                  >
                    Resume
                  </a>

                  <DarkMode />
                </div>
              </div>

              {/* Main content sections below the hero */}
              <div className="mx-auto my-auto">
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
