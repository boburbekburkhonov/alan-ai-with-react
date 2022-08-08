import { useState, useEffect } from 'react'
import Faq from './Main/Faq';
import Header from './Main/Header'
import alanBtn from "@alan-ai/alan-sdk-web"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alanBtn({
      key: 'f6cc24d2f6e07d44eec4fa264c84b5d62e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App
