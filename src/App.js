
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ImageCard1 from './components/image-cards/ImageCard1';
import ImageCard3 from './components/image-cards/ImageCard3';
import ImageCard5 from './components/image-cards/ImageCard5';
import Navbar from './components/navbar/Navbar';
import TextSection from './components/text-section/TextSection';
import {textContent} from './components/text-section/textSectionContent'
import VideoSection from './components/video-section/VideoSection';

function App() {
  const {p1,p2,p3,p4,p5,p6} = textContent;
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <TextSection key={p1.key} title={p1.title} body={p1.body}/>
      {/* <ImageCard1/> */}
      <TextSection key={p2.key} title={p2.title} body={p2.body}/>
      <VideoSection/>
      <TextSection key={p3.key} title={p3.title} body={p3.body}/>
      {/* <ImageCard2/> */}
      <TextSection key={p4.key} title={p4.title} body={p4.body}/>
      <ImageCard3/>
      <TextSection key={p5.key} title={p5.title} body={p5.body}/>
      {/* ImageCard4 */}
      <TextSection key={p6.key} title={p6.title} body={p6.body}/>
      <ImageCard5/>
      <Footer/>
    </div>
  );
}

export default App;
