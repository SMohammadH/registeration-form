import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import Provinces from './components/Provinces';
import Cities from './components/Cities';
import NameInput from './components/NameInput';
import PhoneInput from './components/PhoneInput';
import Chart from './components/Chart';

const Form = () => {
  const [stepOne, setStepOne] = useState(true);
  const [province, setProvince] = useState('');
  const [provinceId, setProvinceId] = useState(null);
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const stepHandler = (e) => {
    e.preventDefault();
    if (stepOne && city.length) {
      setStepOne(false);
    } else {
      setStepOne(true);
    }
  };

  const nameChangeHanlder = (e) => {
    setName(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((postData) => {
    console.log(postData);
    return axios.post(process.env.REACT_APP_POST_SERVER, postData);
  });

  const onSubmit = (data) => {
    if (province.length && city.length && name.length && phone.length) {
      mutation.mutate(JSON.stringify(data));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex bg-gray-200 items-center justify-center h-screen'
    >
      <div className='grid bg-white pt-8 rounded-lg shadow-xl w-11/12 md:w-10/12 lg:w-2/3 xl:w-1/2 2xl:w-1/3'>
        <div className='flex justify-center'>
          <div className='flex'>
            <h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
              فرم سلام ساختمان
            </h1>
          </div>
        </div>
        {stepOne && (
          <>
            <Provinces
              register={register}
              province={province}
              setProvince={setProvince}
              setProvinceId={setProvinceId}
            />
            {errors.province && (
              <h1 className='text-center'>{errors.province.message}</h1>
            )}

            <Cities
              register={register}
              provinceId={provinceId}
              city={city}
              setCity={setCity}
            />
            {errors.city && (
              <h1 className='text-center'>{errors.city.message}</h1>
            )}
          </>
        )}
        {!stepOne && (
          <>
            <NameInput
              register={register}
              label='نام و نام خانوادگی'
              value={name}
              changeHandler={nameChangeHanlder}
            />
            {errors.name && (
              <h1 className='text-center'>{errors.name.message}</h1>
            )}

            <PhoneInput
              register={register}
              label='شماره تلفن'
              value={phone}
              changeHandler={phoneChangeHandler}
              errors={errors}
            />
          </>
        )}

        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button
            onClick={stepHandler}
            className='w-auto bg-indigo-500 hover:bg-indigo-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
          >
            {`${stepOne ? 'مرحله بعد' : 'مرحله قبل'}`}
          </button>
        </div>
        <Chart name={name} phone={phone} province={province} city={city} />
        <div className='grid grid-cols-1 my-5 mx-7'>
          <input
            type='submit'
            value='تایید و ارسال'
            // onClick={submitHandler}
            onClick={handleSubmit(onSubmit)}
            className='cursor-pointer w-auto bg-indigo-500 hover:bg-indigo-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
          />
          <div className='text-center h-6'>
            {mutation.isLoading ? (
              'در حال ارسال'
            ) : (
              <>
                {mutation.isError ? (
                  <div>An error occurred: {mutation.error.message}</div>
                ) : null}
                {mutation.isSuccess ? (
                  <div>اطلاعات شما با موفقیت ارسال شد</div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
