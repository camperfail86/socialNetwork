import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Profile from './components/main/profile/profile';
import Navbar from './components/navbar/navbar';
import Dialogs from './components/main/dialogs/dialogs';
import News from './components/main/news/news';
import Music from './components/main/music/music';
import Settings from './components/main/settings/settings';


function App() {
  return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/"        element={<Profile/>}/>
            <Route path="/dialogs/*" element={<Dialogs/>}/>
            <Route path="/news"    element={<News/>}/>
            <Route path="/music"   element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </main>
      </div>
  );
}

export default App;
