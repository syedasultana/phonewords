
import React from 'react';
import axios from "axios";


function App() {
  const [numInput, setNumInput] = React.useState('');
  const [letterCombosData, setletterCombosData] = React.useState();

  return (
    <div  
      style={{
        padding: "50px"
      }}>
      <h1>Phone Words</h1>

      <input 
        placeholder="e.g 234"
          onChange={(event) => {
              setNumInput(event.target.value);
          }}
          value={numInput}
      />

      <button onClick={async () => {
        axios
          .post(
              `http://localhost:8080/phonewords`, 
              { numericStr: numInput }
          )
          .then(response => {
              setletterCombosData(response.data.letterCombos);
          })
          .catch(err => {
              console.log(err)
          });
      }}>Get letter combinations</button>

     <div>
      {
        (letterCombosData?.length > 0)
          ? letterCombosData.map(combo => (<p>{combo}</p>))
          : null
      }
     </div>

    </div>
  );
}

export default App;
