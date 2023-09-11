import React, { useState } from 'react';

const TarihDropdown = () => {
  const [secilenTarih, setSecilenTarih] = useState('');
  const [secilenSaat, setSecilenSaat] = useState('09:00'); // Başlangıçta saat seçimi varsayılan olarak 09:00 olarak ayarlandı.

  const generateDates = () => {
    const bugun = new Date();
    const tarihler = [];
    const ayAdlari = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    for (let i = 0; i < 21; i++) {
      const tarih = new Date(
        bugun.getFullYear(),
        bugun.getMonth(),
        bugun.getDate() + i
      );
      const ay = ayAdlari[tarih.getMonth()];
      const gun = tarih.getDate();
      const yil = tarih.getFullYear();
      const tarihMetni = ay + ' ' + gun + ', ' + yil;
      tarihler.push(tarihMetni);
    }

    return tarihler;
  };

  const handleTarihChange = (e) => {
    const yeniSecilenTarih = e.target.value;
    setSecilenTarih(yeniSecilenTarih);
    console.log("Seçilen Tarih:", yeniSecilenTarih);
  };

  const handleSaatChange = (e) => {
    const yeniSecilenSaat = e.target.value;
    setSecilenSaat(yeniSecilenSaat);
    console.log("Seçilen Saat:", yeniSecilenSaat);
  };

  return (
    <div>
      <select
        style={{ width: '290px', height: '50px' }}
        value={secilenTarih}
        onChange={handleTarihChange}
      >
        {generateDates().map((tarih, index) => (
          <option key={index} value={tarih}>
            {tarih}
          </option>
        ))}
      </select>
      <select
        id='saatler'
        style={{ height: '50px' }}
        value={secilenSaat}
        onChange={handleSaatChange}
      >
        <option value="00:00">00:00</option>
        <option value="01:00">01:00</option>
        <option value="02:00">02:00</option>
        <option value="03:00">03:00</option>
        <option value="04:00">04:00</option>
        <option value="05:00">05:00</option>
        <option value="06:00">06:00</option>
        <option value="07:00">07:00</option>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
        <option value="23:00">23:00</option>
        <option value="24:00">24:00</option>
      </select>
    </div>
  );
};

export default TarihDropdown;
