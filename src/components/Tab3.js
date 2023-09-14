import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function Tab3({ selectedOption3, handleOptionChange }) {
  return (
    <Tab.Pane>
      <label id='radioQuestion2'>Çıkarılmasını istediğin lekeler var mı?</label>
          <table className='leke'>
            <tr>
              <td>
                <button className={`select ${selectedOption3 === "evet_cikmasi_gereken_yerler_var" ? 'secili' : ''}`} onClick={() => handleOptionChange("evet_cikmasi_gereken_yerler_var", "500TL - 1000TL")}>
                  <input type='radio' name='option3'  checked={selectedOption3 === "evet_cikmasi_gereken_yerler_var"} readOnly />
                  Evet, çıkması gereken yerler var.
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className={`select ${selectedOption3 === "hayir_standart_yikama_istiyorum" ? 'secili' : ''}`} onClick={() => handleOptionChange("hayir_standart_yikama_istiyorum", "1200TL - 1500TL")}>
                  <input type='radio' name='option3'  checked={selectedOption3 === "hayir_standart_yikama_istiyorum"} />
                  Hayır, standart yıkama istiyorum.
                </button>
              </td>
            </tr>
          </table>
    </Tab.Pane>
  );
}
