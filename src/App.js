
import { useEffect, useState } from 'react';
import './App.css';

function App() { 
  const [info, setInfo]  = useState([]);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch("http://localhost:3001/items")
    .then(res => res.json())
    .then(
      (result) => {
        setInfo(result)
      }
    )
  }
  console.log(info);
  window.onload = function () { 
    let count = document.getElementsByTagName("*");
    console.log("Elements total:" + count.length);
    const tagsCount = {};
    Array.prototype.forEach.call(document.getElementsByTagName("*"), function (a) {
      tagsCount[a.tagName] = (tagsCount[a.tagName] || 0 ) + 1;
    })
    console.log(tagsCount)
  }


  
  return (
    <div className="App">
      <div className='wrapper-main'>
        <div className='carousel-container'>
              <div className='btn left'>
                <svg viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
                  <path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/>
                </svg>
              </div>
              <div className='btn right'>
                <svg viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
                  <path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/>
                </svg>
              </div>
            <div className='carousel-content'>
              <h2>Featured Images </h2>
              <div className='main-item'>
                {info.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 5).map((item) => (
                  <div className='main-item-content' style={{backgroundImage: `url(${item.image})`}}>
                  <div className='desc'>
                    <h4>{item.title}</h4>
                    <div className='tags'>
                      {item.tags.map((t) =>(
                        <span><a href="#">{'#'+t}</a></span>
                      ))}
                    </div>
                  </div>
                </div>
                ))}
                
              </div>
            </div>
          </div>
          <div className="latest-c">
            <h2>Last Images</h2>
            {info.sort((c, d) => (c.id > d.id ? -1 : 1)).slice(0, 2).map((item) => (
              <div className='latest-item'>
                <img src={`${item.image}`} />
                <h4>{item.title}</h4>
                <div className='tags'>
                      {item.tags.map((t) =>(
                        <span><a href="#">{'#'+t}</a></span>
                      ))}
                </div>
              </div>
            ))}
              <div className='latest-item'>
                <h6>banner</h6>
              </div>
            </div>
        </div>
    
      </div>
  );
}

export default App;
