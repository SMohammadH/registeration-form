const NameInput = ({ register, label, value, changeHandler }) => {
  return (
    <div className='grid grid-cols-1 mt-5 mx-7'>
      <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
        {label}
      </label>
      <input
        {...register('name', {
          required: true,
          minLength: 2,
          message: 'لطفا نام خود را به درستی وارد کنید',
        })}
        className='h-10 px-3 rounded-lg border-2 border-indigo-400 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
        type='text'
        value={value}
        onChange={changeHandler}
        placeholder='لطفا نام و نام خانوادگی خود را وارد کنید'
      />
    </div>
  );
};

export default NameInput;
