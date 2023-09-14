import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab6 from './Tab6';
import Tab7 from './Tab7';
import Tab8 from './Tab8';
import Tab9 from './Tab9';
import {Button, Icon, Progress, Tab, Modal, Dropdown} from 'semantic-ui-react';

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
  
  

  const handleTab8Continue = () => {
    const phoneNumberValue = document.querySelector('input[name="tel"]').value;
    const isContactPermissionChecked = document.querySelector('input[name="contactPermission"]').checked;
    const isDataTransferPermissionChecked = document.querySelector('input[name="dataTransferPermission"]').checked;

    if (!phoneNumberValue || (!isContactPermissionChecked && !isDataTransferPermissionChecked)) {
      setErrorMessage("Lütfen telefon numarası girip onaylama yapınız.");
    } else {
      console.log("Telefon numarası: " + phoneNumberValue)
      setErrorMessage("");
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % panes.length);
      setProgress((prevProgress) => prevProgress + 15);
    }
  };
  
  const panes = [
    {
      render: () => (<Tab1 selectedOption1={selectedOption1} handleOptionChange={handleOptionChange}/>)
    },
    {
      render: () => (<Tab2 selectedOption2={selectedOption2} handleOptionChange={handleOptionChange}/>)
    },
    {
      render: () => (<Tab3 selectedOption3={selectedOption3} handleOptionChange={handleOptionChange}/>)
    },
    {
      render: () =>(<Tab4 selectedOption4={selectedOption4} handleOptionChange={handleOptionChange}/>)
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
      render: () =>(<Tab6 selectedOption4={selectedOption4} handleOptionChange={handleOptionChange} handleBelliBirZamanClick={handleBelliBirZamanClick} handleDigerButon1={handleDigerButon1} tarihDropdownGorunur={tarihDropdownGorunur}/>)
    },
    {
      render: ()=>(<Tab7/>)
    },
    {
      render: ()=>(<Tab8/>)
    },
    {
      render: ()=>(<Tab9/>)
    },
    {
      render: () =>(<Tab.Pane><label id='radioQuestion2'>Teşekkür ederiz! Başvurunuzu almış bulunmaktayız ve mümkün olan en kısa zamanda sizinle iletişime geçeceğiz</label></Tab.Pane>)
    }
  ];
  
  const tabStyle = {width: "520px", height: "400px", marginTop: "-42px",};

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