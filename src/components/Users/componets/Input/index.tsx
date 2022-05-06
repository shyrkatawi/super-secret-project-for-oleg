import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { MIN_NUMBER_OF_CHARS_IN_INPUT_FOR_DISPATCH } from './constants';
import { setSearchingValue } from '../../../../redux/slices/storeSlice';

const Input: React.FC = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const dispatchSearchingValue = (event: ChangeEvent<HTMLInputElement>) => {
    const currentSearchingValue: string = event.target.value;
    if (event.target.value.length >= MIN_NUMBER_OF_CHARS_IN_INPUT_FOR_DISPATCH) {
      dispatch(setSearchingValue(currentSearchingValue));
    }
  };

  return (
    <div>
      <input className="input" onChange={dispatchSearchingValue} />
    </div>
  );
};

export default Input;
