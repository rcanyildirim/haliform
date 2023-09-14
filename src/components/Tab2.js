import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function Tab2({ selectedOption2, handleOptionChange }) {
  return (
    <Tab.Pane>
      <div className='haliana'>
        <label id='howmt'>Kaç metrekare halı yıkanacak?</label>
        <p id='bilgi'>Büyük oda halıları 6m2'dir ve çoğu halı 1 ila 6m2<br/>arasındadır. En yakın seçeneği seçmen yeterli.</p>
        <table className='mtsec'>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "10" ? 'secili' : ''}`} onClick={() => handleOptionChange("10", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "10"} type='radio'/> 10</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "15" ? 'secili' : ''}`} onClick={() => handleOptionChange("15", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "15"} type='radio'/> 15</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "20" ? 'secili' : ''}`} onClick={() => handleOptionChange("20", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "20"}  type='radio'/> 20</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "25" ? 'secili' : ''}`} onClick={() => handleOptionChange("25", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "25"} type='radio'/> 25</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "30" ? 'secili' : ''}`} onClick={() => handleOptionChange("30", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "30"} type='radio'/> 30</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "40" ? 'secili' : ''}`} onClick={() => handleOptionChange("40", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "40"} type='radio'/> 40</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "50" ? 'secili' : ''}`} onClick={() => handleOptionChange("50", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "50"}  type='radio'/> 50</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "60" ? 'secili' : ''}`} onClick={() => handleOptionChange("60", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "60"} type='radio'/> 60</button></td>
            </tr>
            <tr>
                <td><button className={`select2 ${selectedOption2 === "80 veya daha fazla" ? 'secili' : ''}`} onClick={() => handleOptionChange("80 veya daha fazla", "600TL - 5040TL")}><input name='option2' checked={selectedOption2 === "80 veya daha fazla"} type='radio'/> 80 veya daha fazla</button></td>
            </tr>
        </table>
    </div>
    </Tab.Pane>
  );
}
