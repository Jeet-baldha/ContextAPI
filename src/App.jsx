import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeButton from "./componenets/ThemeButton";
import Card from "./componenets/Card";


function App() {

  const [themeMode,setThemeMode] = useState();

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect( () => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton></ThemeButton>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
