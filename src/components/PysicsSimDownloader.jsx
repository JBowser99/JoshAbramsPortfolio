const App = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
    
        // using Java Script method to get PDF file
        fetch("/src/assets/PysicsSim Download Guide.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "PysicsSim Download Guide.pdf";
                alink.click();
            });
        });
    };
    return (
    <>
    <button className='underline text-blue-400 text-lg' onClick={onButtonClick}>Download Project</button>
    </>
    );
};

export default App;