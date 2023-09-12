import React, { useState } from 'react';
import TarihDropdown from './TarihDropdown';
import { Form, TextArea, Button, Icon, Progress, Tab, Modal, Dropdown} from 'semantic-ui-react';


const countryOptions = [
  { key: "ist", value: "ist", text: "İstanbul" },
  { key: "iz", value: "iz", text: "İzmir" },
  { key: "ank", value: "ank", text: "Ankara" }
];

const ilceOptions = {
  ist: [
    { key: "kad", value: "kad", text: "Kadıköy" },
    { key: "bes", value: "bes", text: "Beşiktaş" },
    // İstanbul ilçeleri buraya eklenir
  ],
  iz: [
    { key: "kon", value: "kon", text: "Konak" },
    { key: "bor", value: "bor", text: "Bornova" },
    // İzmir ilçeleri buraya eklenir
  ],
  ank: [
    { key: "can", value: "can", text: "Çankaya" },
    { key: "kec", value: "kec", text: "Keçiören" },
    // Ankara ilçeleri buraya eklenir
  ]
};

const mahalleOptions = {
  kad: [
    { key: "fik", value: "fik", text: "Fikirtepe" },
    { key: "göz", value: "göz", text: "Göztepe" },
  ],
  bes: [
    { key: "lev", value: "lev", text: "Levent" },
    { key: "eti", value: "eti", text: "Etiler" },
  ],
  kon: [
    { key: "als", value: "als", text: "Alsancak" },
    { key: "kar", value: "kar", text: "Karşıyaka" },
  ],
  bor: [
    { key: "inc", value: "inc", text: "İncirliova" },
    { key: "alt", value: "alt", text: "Altındağ" },
  ],
  can: [
    { key: "kız", value: "kız", text: "Kızılay" },
    { key: "bah", value: "bah", text: "Bahçelievler" },
  ],
  kec: [
    { key: "ata", value: "ata", text: "Atapark" },
    { key: "yen", value: "yen", text: "Yenidoğan" },
  ]
};

const MahallelerDropdown = ({ selectedDistrict, onNeighborhoodChange }) => {
  const mahalleler = mahalleOptions[selectedDistrict] || [];

  return (
    <Dropdown className='secilen2'
      placeholder="Mahalle Seçiniz"
      fluid
      search
      selection
      options={mahalleler}
      onChange={(_, data) => onNeighborhoodChange(data.value)}
    />
  );
};

const IlcelerDropdown = ({ selectedCity, onDistrictChange }) => {
  const ilceler = ilceOptions[selectedCity] || [];

  return (
    <Dropdown className='secilen2'
      placeholder="İlçe Seçiniz"
      fluid
      search
      selection
      options={ilceler}
      onChange={(_, data) => onDistrictChange(data.value)}
    />
  );
};

const ButtonExampleIcon = ({ openModal }) => {
  return (
    <Button basic icon className="button" onClick={openModal}>
      <Icon name='close' />
    </Button>
  );
};

const TextAreaExampleTextArea = () => (
  <Form>
    <TextArea id="ihtiyacne" placeholder='Aklına gelen hangi detaylar var?' />
  </Form>

)
const TextAreaExampleTextArea2 = () => (
  <Form>
    <TextArea id="email" placeholder='Lütfen E-Mail adresinizi giriniz...' />
  </Form>
  
)
  

export default function Header() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [priceRange, setPriceRange] = useState("240TL - 900TL");
  const [progress, setProgress] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [tarihDropdownGorunur, setTarihDropdownGorunur] = useState(false);
  const [selectedCode, setSelectedCode] = useState('+90');

  const handleBelliBirZamanClick = () => {
    setTarihDropdownGorunur(true);
  };

  const handleDigerButon1 = () => {
    if (tarihDropdownGorunur) {
      setTarihDropdownGorunur(false);
    }
  };

  const handleCityChange = (_, data) => {
    setSelectedCity(data.value);
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };

  const handleNeighborhoodChange = (neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    
  const combinedValue = `${selectedCity} - ${selectedDistrict} - ${neighborhood}`;
    console.log(combinedValue);

  };

  

  const handleContinue = () => {
    if (selectedCity && selectedDistrict && selectedNeighborhood) {
      setActiveTabIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    } else {
      setErrorMessage("Bir seçim yapmanız gerekiyor."); // Herhangi biri eksikse hata mesajı göster
    }
  };  
  const handleOptionChange = (event, newPriceRange) => {
    const optionType = activeTabIndex === 0 ? 'option1' : activeTabIndex === 1 ? 'option2' : activeTabIndex === 2 ? 'option3' : activeTabIndex === 5 ? 'option4' : 'opt';
    if (optionType === 'option1') {
      setSelectedOption1(event);
    } else if (optionType === 'option2') {
      setSelectedOption2(event);
    } else if(optionType === 'option3'){
      setSelectedOption3(event);
    }
    else{
      setSelectedOption4(event);
    }
    setPriceRange(newPriceRange);
  };

  const fillProgressBar = () => {
    let selectedOption = null;
  
    if (activeTabIndex === 0) {
      selectedOption = selectedOption1;
    } else if (activeTabIndex === 1) {
      selectedOption = selectedOption2;
    } else if (activeTabIndex === 2) {
      selectedOption = selectedOption3;
    } else if (activeTabIndex === 5 ){
      selectedOption = selectedOption4;
    }
  
    if (selectedOption === null) {
      setErrorMessage("Bir seçim yapmanız gerekiyor");
    } else {
      setErrorMessage("");
      setActiveTabIndex(prevIndex => (prevIndex + 1) % panes.length);
  
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 25);
      }
  
      console.log(`Tab ${activeTabIndex + 1} Seçenek: ${selectedOption}`);
    }
  };
  
  const azalt = () =>{
    setActiveTabIndex(prevIndex => (prevIndex - 1) % panes.length);
    setProgress(prevProgress => prevProgress - 25);
  }

  const handleTab4Continue = () => {
    const textAreaValue = document.getElementById('ihtiyacne').value;
    if (textAreaValue.length < 25) {
      setErrorMessage("Lütfen ihtiyacınızı biraz daha açıklayınız.");
    } else {
      console.log("Detaylar: " + textAreaValue)
      setErrorMessage("");
      setActiveTabIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    }
  };
  const handleTab6Continue = () => {
    const emailValue = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    setErrorMessage("Lütfen geçerli bir E-Mail adresi giriniz.");
  } else {
    console.log("E-Mail: " + emailValue);
    setErrorMessage("");
    setActiveTabIndex(prevIndex => (prevIndex + 1) % panes.length);
    setProgress(prevProgress => prevProgress + 15);
  }
  };
  const handleTab7Continue = () => {
    const isimValue = document.querySelector('input[name="isim"]').value;
    const soyisimValue = document.querySelector('input[name="soyisim"]').value;
  
    if (!isimValue || !soyisimValue) {
      setErrorMessage("Lütfen isim ve soyisim giriniz.");
    } else {
      console.log("İsim Soyisim: " + isimValue + " " + soyisimValue);
      setErrorMessage("");
      setActiveTabIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    }
  };

  const handleCodeChange = (e) => {
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

  const handleTab8Continue = () => {
    const phoneNumberValue = document.querySelector('input[name="tel"]').value;
    const isContactPermissionChecked = document.querySelector('input[name="contactPermission"]').checked;
    const isDataTransferPermissionChecked = document.querySelector('input[name="dataTransferPermission"]').checked;
  

    if (!phoneNumberValue || (!isContactPermissionChecked && !isDataTransferPermissionChecked)) {
      setErrorMessage("Lütfen telefon numarası girip onaylama yapınız.");
    } else {
      console.log("Telefon numarası: " + selectedCode + phoneNumberValue)
      setErrorMessage("");
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % panes.length);
      setProgress((prevProgress) => prevProgress + 15);
    }
  };
  
  const panes = [
    {
      render: () => (
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
      ),
    },
    { render: () => 
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
    },
    {
      render: () => (
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
      ),
    },
    {
      render: () =>(
      <Tab.Pane id="ihtiyac">
        <label id='radioQuestion2'>İhtiyacın detayları neler ?</label>
        <TextAreaExampleTextArea/><br/>
      </Tab.Pane>
      )
    },
    {
      render: () =>(
        <Tab.Pane>
          <label id='radioQuestion2'>Nerede? (hizmetin yapılacağı yer)</label>
        <Dropdown className='secilen' placeholder="Şehir Seçiniz" fluid search selection options={countryOptions} onChange={handleCityChange} value={selectedCity}/>
      {selectedCity && (
        <IlcelerDropdown
          selectedCity={selectedCity}
          onDistrictChange={handleDistrictChange}
        />
      )}
      {selectedDistrict && (
        <MahallelerDropdown
          selectedDistrict={selectedDistrict}
          onNeighborhoodChange={handleNeighborhoodChange}
        />
      )}
        </Tab.Pane>
      )
    },
    {
      render: () =>(
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
      )
    },
    {
      render: ()=>(
        <Tab.Pane>
          <label id='radioQuestion2'>Email adresini gir</label><br/><br/>
          <TextAreaExampleTextArea2/>
        </Tab.Pane>
      )
    },
    {
      render: ()=>(
        <Tab.Pane>
          <label id='radioQuestion2'>Lütfen adını ve soyadını gir</label>
          <p id='bilgi'>Hizmet verenlerimiz ad ve soyad olan taleplere daha hızlı<br/>dönüş yapıyor. İsim ve soyismin baş harflerinin büyük olması<br/>daha profesyonel bir görünüm sağlayacaktır.</p>
          <input type='textbox' name='isim' placeholder='Adın' style={{width: '350px', height: '40px'}}></input>
          <p/>
          <input type='textbox' name='soyisim' placeholder='Soyadın' style={{width: '350px', height: '40px'}}></input>
        </Tab.Pane>
      )
    },
    {
      render: ()=>(
        <Tab.Pane>
          <label id='radioQuestion2'>Cep telefonun?</label>
          <table style={{marginTop:'20px', marginLeft:'40px'}}>
            <tr>
              <td>
                <select id='alankodu' style={{height:'40px'}} onChange={handleCodeChange}>
                  <option value='+90'>TR +90</option>
                  <option value='+44'>UK +44</option>
                  <option value='+49'>DE +49</option>
                  <option value='+966'>SA +966</option>
                  <option value='+20'>EG +20</option>
                </select>
              </td>
              <td>
               <input name='tel' placeholder={placeholderText()} maxLength={11} style={{width:'300px', height:'40px'}}></input></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <select id='teklif' style={{width:'383px',height:'40px'}}>
                  <option>Teklif veren arayabilir</option>
                  <option>Arayabilir ama numaram gizli kalsın</option>
                </select>
              </td>
            </tr>
          </table>
          <p style={{fontSize:"14px", textAlign:"center", color:"grey"}}>Halı yıkama işine teklif verebilmeleri için teklif verenlerin telefonla arayabilmeleri gerekiyor.</p>
          <label style={{position:"absolute", left:"55px"}}><input type='checkbox' name='contactPermission'/> İletişim izni</label><br/>
          <label style={{position:"absolute", left:"55px"}}><input type='checkbox' name='dataTransferPermission'/> Kişisel veri işleme aktarım izni</label>
        </Tab.Pane>
      )
    },
    {
      render: () =>(
        <Tab.Pane>
          <label id='radioQuestion2'>Teşekkür ederiz! Başvurunuzu almış bulunmaktayız ve mümkün olan en kısa zamanda sizinle iletişime geçeceğiz</label>
        </Tab.Pane>
      )
    }
  ];
  
  const tabStyle = {
    width: "520px",
    height: "400px",
    marginTop: "-42px",
  };

  const TabExampleBasic = () => <Tab panes={panes} style={tabStyle} activeIndex={activeTabIndex} />;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    window.location.href = "https://www.armut.com";
  };

  return (
    <div>
      <div className='haliyikamaform'>
        <div className='header'>
          <h1 className='title'><button id='geri' icon="world" onClick={azalt} style={{ display: activeTabIndex > 0 && activeTabIndex < 9 ? 'inline-block' : 'none' }}><i class="fa-solid fa-arrow-left "></i></button>Halı Yıkama<ButtonExampleIcon openModal={openModal} /></h1>
          <Progress color='green' percent={progress} />
        </div>
        <Modal open={modalOpen} onClose={closeModal} size="tiny">
        <Modal.Header>Çıkış Yapmak İstediğinize Emin Misiniz?</Modal.Header>
        <Modal.Content>
          <p>Bu işlem sizi www.armut.com sitesine yönlendirecektir.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button id="offmodal" negative onClick={closeModal}>
            Hayır
          </Button>
          <Button positive onClick={handleConfirmLogout}>
            Evet
          </Button>
        </Modal.Actions>
      </Modal>
        <br />
        <div className='price'>
          <span>Ortalama fiyat aralığı: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{priceRange}</span>
        </div>
        <div className='ana'>
          <TabExampleBasic />
          <br />
        </div>
        
        <div className='buttons'>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}<br/>
          {(activeTabIndex === 0 || activeTabIndex === 1 || activeTabIndex === 2 || activeTabIndex === 5) && 
          (<button onClick={fillProgressBar}>DEVAM</button>)
          }
          {activeTabIndex === 3 && (
            <button onClick={handleTab4Continue}>DEVAM</button>
          )}
          {activeTabIndex === 4 &&(
            <button onClick={handleContinue}>DEVAM</button>
          )}
          {activeTabIndex === 6 && (
            <button onClick={handleTab6Continue}>DEVAM</button>
          )}
          {activeTabIndex === 7 && (
            <button onClick={handleTab7Continue}>DEVAM</button>
          )}
          {activeTabIndex === 8 && (
            <button onClick={handleTab8Continue}>TALEBİ GÖNDER</button>
          )}
        </div>
      </div>
    </div>
  );
}