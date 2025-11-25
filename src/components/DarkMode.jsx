import '../styles/DarkMode.css';

const DarkMode = () => {
    let clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    }   else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'light');
            theme = lightTheme;
        }   else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
        }
    };

return (
    <div className='z-10 hover:border-sky-200/50 bg-sky-600/30 fixed border-2 border-sky-600/60 rounded-full p-1 mx-4 my-52 w-16 sm:w-28'>
        <div className='hover:border-sky-200/50 cursor-pointer border-2 border-sky-600/90 rounded-full p-0.5 bg-sky-600/50 hover:bg-zinc-950/50'>
            <div className='bg-gradient-to-r from-orange-400 to-black items-center rounded-full flex flex-col'>
                <button className={theme === "dark" ? clickedClass : ''} id='darkMode' onClick={(e) => switchTheme(e)}/>
            </div>
        </div>
    </div>
    );
};

export default DarkMode;