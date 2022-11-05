
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Championss from './components/Championss';
import Contactus from './components/Contactus';
import Deirclub from './components/Deirclub';
import Gazaclub from './components/Gazaclub';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Portfolio1 from './components/Portfolio1';
import Portfoliodetai from './components/Portfoliodetai';
import Portfoliodetai1 from './components/Portfoliodetail1';
import Rafah from './components/Rafah';

 const App = () => {


   return (
   <div className='app'>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/about-us' element={<Aboutus/>} />
      <Route path='/contact-us' element={<Contactus/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/portfolio1' element={<Portfolio1/>} />
      <Route path='/rafah' element={<Rafah/>} />
      <Route path='/gaza-club' element={<Gazaclub/>}/>
      <Route path='/deir-club' element={<Deirclub/>} />
      <Route path='/champions' element={<Championss/>} />
      <Route path='/PortfolioDetail/:id' element={<Portfoliodetai/>} />
      <Route path='/PortfolioDetail1/:id' element={<Portfoliodetai1/>} />
     </Routes>
     </BrowserRouter>
     
     </div>
   
   )

}
export default App;
