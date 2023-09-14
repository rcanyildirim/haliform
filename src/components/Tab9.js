import React, {useState} from 'react'
import { Tab } from 'semantic-ui-react'

export default function Tab9() {
    const [selectedCode, setSelectedCode] = useState('+90');
  
    const handleCodeChange = (e) => {
      console.log("Selected Code: ", e.target.value);
      setSelectedCode(e.target.value);
    };
  
    const placeholderText = () => {
      switch (selectedCode) {
        case '+90':
          return '501 234 56 78';
        case '+44':
          return '7400 123456';
        case '+49':
          return '1512 3456789';
        case '+966':
          return '51 234 5678';
        case '+20':
          return '100 123 4567';
        default:
          return '';
      }
    };
  
    return (
      <div>
        <Tab.Pane>
          <label id='radioQuestion2'>Cep telefonun?</label>
          <table style={{ marginTop: '20px', marginLeft: '40px' }}>
            <tr>
              <td>
                <select id='alankodu' style={{ height: '40px' }} onChange={handleCodeChange}>
                  <option value='+90'>TR +90</option>
                  <option value='+44'>UK +44</option>
                  <option value='+49'>DE +49</option>
                  <option value='+966'>SA +966</option>
                  <option value='+20'>EG +20</option>
                </select>
              </td>
              <td>
                <input name='tel' placeholder={placeholderText()} maxLength={11} style={{ width: '300px', height: '40px' }}></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <select id='teklif' style={{ width: '383px', height: '40px' }}>
                  <option>Teklif veren arayabilir</option>
                  <option>Arayabilir ama numaram gizli kalsın</option>
                </select>
              </td>
            </tr>
          </table>
          <p style={{ fontSize: "14px", textAlign: "center", color: "grey" }}>Halı yıkama işine teklif verebilmeleri için teklif verenlerin telefonla arayabilmeleri gerekiyor.</p>
          <label style={{ position: "absolute", left: "55px" }}><input type='checkbox' name='contactPermission' /> İletişim izni</label><br />
          <label style={{ position: "absolute", left: "55px" }}><input type='checkbox' name='dataTransferPermission' /> Kişisel veri işleme aktarım izni</label>
        </Tab.Pane>
      </div>
    )
  }
  