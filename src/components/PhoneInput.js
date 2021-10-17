const NameInput = ({ errors, register, label, value, changeHandler }) => {
  return (
    <div className='grid grid-cols-1 mt-5 mx-7'>
      <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
        {label}
        {errors.phone && (
          <span className='text-center pr-5'>{errors.phone.message}</span>
        )}
      </label>
      <input
        {...register('phone', {
          required: true,
          pattern: {
            value: /^\d{11}$/,
            message: 'لطفا شماره تماس خود را بصورت 11 رقمی وارد کنید',
          },
        })}
        className='h-10 px-3 rounded-lg border-2 border-indigo-400 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
        type='phone'
        value={value}
        onChange={changeHandler}
        placeholder='شماره تلفن خود را وارد کنید'
      />
    </div>
  );
};

export default NameInput;
