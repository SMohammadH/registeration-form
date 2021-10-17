const Chart = ({ name, phone, province, city }) => {
  return (
    <>
      <div className='flex justify-center pt-5'>
        <div className='flex'>
          <h1 className='text-gray-600 font-bold md:text-2xl text-2xl'>
            مشخصات شما
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
        <div className='grid grid-cols-1'>
          <h2 className='text-gray-500 font-semibold'>
            نام:
            <span className='font-bold text-black pr-3'>{name}</span>
          </h2>
        </div>
        <div className='grid grid-cols-1'>
          <h2 className='text-gray-500 font-semibold'>
            تلفن:
            <span className='font-bold text-black  pr-3'>{phone}</span>
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
        <div className='grid grid-cols-1'>
          <h2 className='text-gray-500 text-light font-semibold'>
            استان:{' '}
            <span className='font-bold text-black  pr-3'>{province}</span>
          </h2>
        </div>
        <div className='grid grid-cols-1'>
          <h2 className='text-gray-500 text-light font-semibold'>
            شهر: <span className='font-bold text-black  pr-3'>{city}</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Chart;
