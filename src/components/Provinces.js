import { useQuery } from 'react-query';

const Provinces = ({ register, province, setProvince, setProvinceId }) => {
  const { isLoading, error, data } = useQuery('provinces', () =>
    fetch('/provinces.json').then((res) => res.json())
  );

  if (isLoading) return <div className='h-20 text-center'>در حال دریافت</div>;

  if (error) return 'An error has occurred: ' + error.message;

  if (province) {
    const selected = data.filter((p) => p.name === province);
    setProvinceId(selected[0].id);
  }

  return (
    <div className='grid grid-cols-1 mt-5 mx-7'>
      <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
        استان شما
      </label>
      <select
        {...register('province', {
          required: true,
          message: 'لطفا استان خود را انتخاب کنید',
        })}
        required
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        placeholder='استان شما'
        className='h-10 pr-3 rounded-lg border-2 border-indigo-400 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
      >
        <option value='' disabled defaultValue>
          استان خود را انتخاب کنید
        </option>
        {data.map((province) => (
          <option key={province.id} value={province.name}>
            {province.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Provinces;
