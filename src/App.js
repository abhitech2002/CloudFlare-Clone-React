// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTop from './header1';
import BodyTop from './body1';
import Cards from './card1';
import Cards2 from './card2';
import Analyst1 from './analyst';
import Body2 from './body2';
import ImageGallery1 from './imagegallary';
import ExploreProduct from './explore';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <BodyTop/>
      <Cards/>
      <Cards2/>
      <Analyst1/>
      <Body2/>
      <ImageGallery1/>
      <ExploreProduct/>
    </div>
  );
}

export default App;
