import { useQuery } from 'react-query';

const Cities = ({ register, provinceId, city, setCity }) => {
  const { isLoading, error, data } = useQuery('cities', () =>
    fetch('/cities.json').then((res) => res.json())
  );
  if (isLoading) return <div className='h-20 text-center'>در حال دریافت</div>;

  if (error) return 'An error has occurred: ' + error.message;

  const filteredCity = data.filter((c) => c.province_id === provinceId);

  return (
    <div className='grid grid-cols-1 mt-5 mx-7 '>
      <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
        شهر شما
      </label>
      <select
        {...register('city', {
          required: true,
          message: 'لطفا شهر خود را انتخاب کنید',
        })}
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='h-10 px-3 rounded-lg border-2 border-indigo-400 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
      >
        <option value='' disabled defaultValue>
          شهر خود را انتخاب کنید
        </option>
        {filteredCity.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cities;
