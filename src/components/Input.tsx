import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import { AppDispatch } from '../redux/store';
import { setSearchingValue } from '../redux/slices/storeSlice';
import {INPUT_DEBOUNCE_TIME} from "../entities/constants";

const Input: React.FC = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useDebounce(INPUT_DEBOUNCE_TIME, '');
  useEffect(() => {
    dispatch(setSearchingValue(value));
  }, [dispatch, value]);

  return (
    <div>
      <input className="input" onChange={(event) => setValue(event.target.value)} />
      {value}
    </div>
  );
};

export default Input;
