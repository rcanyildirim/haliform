import React from 'react';
import {Tab} from 'semantic-ui-react'

export default function Tab1({ selectedOption1, handleOptionChange }) {
  return (
    <Tab.Pane>
      <label id='radioQuestion'>&emsp; &emsp; &emsp; Halı Nerede Yıkansın ?</label>
          <table className='table'>
            <tr>
              <td>
                <button className={`select ${selectedOption1 === "adresten_alinip_teslim_edilsin" ? 'secili' : ''}`} onClick={() => handleOptionChange("adresten_alinip_teslim_edilsin", "250TL - 750TL")}>
                  <input type='radio' name='option1'  checked={selectedOption1 === "adresten_alinip_teslim_edilsin"} readOnly />
                  &emsp; Adresten alınıp teslim edilsin</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className={`select ${selectedOption1 === "evde_halı_temizliği_yapılsın" ? 'secili' : ''}`} onClick={() => handleOptionChange("evde_halı_temizliği_yapılsın", "300TL - 2500TL")}>
                  <input type='radio' name='option1'  checked={selectedOption1 === "evde_halı_temizliği_yapılsın"} readOnly />
                  &emsp; Evde halı temizliği yapılsın</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className={`select ${selectedOption1 === "ofiste_halı_temizliği_yapılsın" ? 'secili' : ''}`} onClick={() => handleOptionChange("ofiste_halı_temizliği_yapılsın", "600TL - 5040TL")}>
                  <input type='radio' name='option1'  checked={selectedOption1 === "ofiste_halı_temizliği_yapılsın"} readOnly />
                  &emsp; Ofiste halı temizliği yapılsın</button>
              </td>
            </tr>
          </table>
    </Tab.Pane>
  );
}
