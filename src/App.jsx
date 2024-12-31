import Header from "./components/Header"
import MainBoard from "./components/MainBoard"



function App() {


  return (
   <>
   <Header/>
   <MainBoard/>
   <footer className='text-center text-gray-500 text-sm mt-4 fixed bottom-10 w-full'>
      {/* Write made with love by Saad srabon */}
      <p>Made with 💖 by Saad Srabon</p>
    </footer>
    </>
  )
}

export default App
