import myWonderfulImage from './imageInSrc.jpg';
import './App.css';
import './style.css';


function App() {
  return (
   <div>
   <div style ={{border:" solid 1px black",maxWidth:"100vw"}}>
 <h1 className="title red">Hazem Maaouia</h1>
 <img src={myWonderfulImage} alt="imageinsrc"/>
 <img src={"/imageInPublic.jpeg"} alt="imageinpublic"/>
 </div>

 <video width="320" height="240" controls >
<source src={"/video.mkv"} type="video/mp4"/>
</video>

</div>

  );
}

export default App;
