import { useQuery } from 'react-query';

const Cities = ({ provinceId, city, setCity }) => {
  const { isLoading, error, data } = useQuery('cities', () =>
    fetch('/cities.json').then((res) => res.json())
  );
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (provinceId) {
    const filteredCity = data.filter((c) => c.province_id === provinceId);
    return (
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option selected='selected'>شهر شما</option>
        {filteredCity.map((city) => (
          <option key={city.key} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    );
  }
  return null;
};

export default Cities;
