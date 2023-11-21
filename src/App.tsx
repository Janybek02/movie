import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Popular } from './components/popular/Popular';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { Series } from './components/series/Series';
import { Genre } from './components/genre/Genre';
import { Footer } from './components/footer/Footer';
import { Id_list } from './components/id_list/Id_list';
import { useAppSelectore } from './hooks/Hooks';
import { Video } from './components/home/trailer/video/Video';
const Link = () => {


  return (<>

    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/popular"} element={<Popular />} />
      <Route path={"/series"} element={<Series />} />
      <Route path={"/genre"} element={<Genre />} />
      <Route path={"/:id"} element={<Id_list />} />
    </Routes>
    {/* </BrowserRouter> */}
  </>)
}

function App() {
  const { close, } = useAppSelectore(state => state.trailerReducer)

  return (
    <div className="App ">
      <Header />
      <div className=' bg-[#101616] px-16  '>
        <Link />
      </div>
      {close ?
        <div className=' absolute w-full h-[210vh] top-1'>
          <Video />
        </div>
        : ""
      }
      {/* <Footer/> */}
    </div>
  );
}

export default App;
