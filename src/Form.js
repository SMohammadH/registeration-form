import { useState } from 'react';
import Provinces from './components/Provinces';
import Cities from './components/Cities';

const Form = () => {
  const [province, setProvince] = useState('');
  const [provinceId, setProvinceId] = useState('');
  const [city, setCity] = useState('');

  return (
    <form>
      <Provinces
        province={province}
        setProvince={setProvince}
        setProvinceId={setProvinceId}
      />
      <Cities provinceId={provinceId} city={city} setCity={setCity} />
    </form>
  );
};

export default Form;
