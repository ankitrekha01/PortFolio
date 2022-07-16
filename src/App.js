import React, { useState} from "react";
import './App.css';
import { ThemeProvider } from "styled-components";
// import { settings } from "./portfolio";
import { themes } from "./theme"; 
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import Main from "./mainContainer/Main";

function App() {
  // Default theme
  // Saved in local storage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  // const useCursor = settings.useCustomCursor;
  const useCursor = {
    useCustomCursor: true, // Change this to false if you want the good'ol cursor
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
        {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
