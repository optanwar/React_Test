import Cards from "./Componet/Cards";
import Contact from "./Componet/Contact";
import Footer from "./Componet/Footer";
import Main_section from "./Componet/Main_section";
import Nav from "./Componet/Nav";
import News from "./Componet/News";
import Our_store from "./Componet/Our_store";
import Testimonials from "./Componet/Testimonials";
import View from './Componet/View_item'

function App() {
  return (
    <div>
      <Nav />
      <Main_section/>
      <Our_store/>
      <View/>
      <Cards/>
      <Testimonials/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
