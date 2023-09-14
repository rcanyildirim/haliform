import React from 'react';
import TarihDropdown from './TarihDropdown';
import { Tab } from 'semantic-ui-react';

const Tab6 = ({ selectedOption4, handleOptionChange, handleBelliBirZamanClick, handleDigerButon1, tarihDropdownGorunur }) => {
  return (
    <Tab.Pane>
      <label id='radioQuestion2'>Ne zaman?</label>
      <table className='tarihTable'>
        <tr>
          <td colSpan={2}><button className={`bellibuton ${selectedOption4 === "belli_bir_zaman" ? 'secili' : ''}`} onClick={() => {handleBelliBirZamanClick(); handleOptionChange("belli_bir_zaman", "500TL - 1000TL")}}>
            <input type='radio' name='select4' checked={selectedOption4 === "belli_bir_zaman"}/>Belli bir zaman (üç hafta içinde)</button></td>
        </tr>
        {tarihDropdownGorunur && (
        <tr>
          <td><TarihDropdown/></td>
        </tr>
        )}
        <tr>
          <td colSpan={2}><button className={`bellibuton ${selectedOption4 === "iki_ay_icinde" ? 'secili' : ''}`} onClick={() => {handleDigerButon1(); handleOptionChange("iki_ay_icinde", "500TL - 1000TL")}} >
            <input type='radio' name='select4' checked={selectedOption4 === "iki_ay_icinde"}/>İki ay içinde</button></td>
        </tr>
        <tr>
          <td colSpan={2}><button className={`bellibuton ${selectedOption4 === "alti_ay_icinde" ? 'secili' : ''}`} onClick={() => {handleDigerButon1(); handleOptionChange("alti_ay_icinde", "500TL - 1000TL")}} >
            <input type='radio' name='select4' checked={selectedOption4 === "alti_ay_icinde"}/>Altı ay içinde</button></td>
        </tr>
        <tr>
          <td colSpan={2}><button className={`bellibuton ${selectedOption4 === "sadece_fiyat_bakiyorum" ? 'secili' : ''}`} onClick={() => {handleDigerButon1(); handleOptionChange("sadece_fiyat_bakiyorum", "500TL - 1000TL")}} >
            <input type='radio' name='select4' checked={selectedOption4 === "sadece_fiyat_bakiyorum"}/>Sadece fiyat bakıyorum</button></td>
        </tr>
      </table>
    </Tab.Pane>
  );
};

export default Tab6;
