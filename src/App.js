
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ImageCard1 from './components/image-cards/ImageCard1';
import Navbar from './components/navbar/Navbar';
import TextSection from './components/text-section/TextSection';
import {textContent} from './components/text-section/textSectionContent'

function App() {
  const {p1,p2,p3,p4,p5,p6} = textContent;
  const test = () => {
    console.log("");
    
  }
  return (
    <div>
      <Navbar/>
      <Header/>
      <TextSection key={p1.key} title={p1.title} body={p1.body}/>
      <ImageCard1/>
      <TextSection key={p2.key} title={p2.title} body={p2.body}/>
      <TextSection key={p3.key} title={p3.title} body={p3.body}/>
      <TextSection key={p4.key} title={p4.title} body={p4.body}/>
      <TextSection key={p5.key} title={p5.title} body={p5.body}/>
      <TextSection key={p6.key} title={p6.title} body={p6.body}/>
      <Footer/>
    </div>
  );
}

export default App;
// p={textContentBody.p1}