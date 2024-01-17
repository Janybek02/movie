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
      {close ?
        <div className=' absolute w-full top-1'>
          <Video />
        </div>
        : ""
      }
      <div>
        <Header />
        <div className=' bg-[#07050e] px-[3%]  '>
          <Link />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
