import { useState } from 'react';
import { useQuery } from 'react-query';

const Provinces = ({ province, setProvince, setProvinceId }) => {
  const { isLoading, error, data } = useQuery('provinces', () =>
    fetch('/provinces.json').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (province.length) {
    const selected = data.filter((p) => p.name === province);
    setProvinceId(selected[0].id);
  }

  return (
    <select value={province} onChange={(e) => setProvince(e.target.value)}>
      <option selected='selected'>استان شما</option>
      {data.map((province) => (
        <option key={province.key} value={province.name}>
          {province.name}
        </option>
      ))}
    </select>
  );
};

export default Provinces;
