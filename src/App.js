import './App.css';
import Cards from './Components/Cards';
import Data from './Components/Data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <h1>Olx Cards Assignment</h1>

      <div className='Cards_Wrapper'>
        {
          Data.map((e,i)=>{
            return(
              <Cards 
              key={i}
              title = {e.ProductTitle}
              image = {e.ProductImage}
              price = {e.Price}
              area = {e.Location}
              time = {e.DaysOfPosted}
              />
            )
          })

        }
     
      </div>


    </div>
  );
}

export default App;
