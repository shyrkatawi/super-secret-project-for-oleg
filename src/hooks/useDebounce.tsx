import { useState, useEffect } from 'react';

import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

const useDebounce = <T extends any = any>(time: number, defaultValue: T): [T, (v: T) => void] => {
  const [value, setValue] = useState<T>(defaultValue);
  const [value$] = useState(() => new Subject<T>());
  useEffect(() => {
    const sub = value$.pipe(debounceTime(time)).subscribe(setValue);
    return () => sub.unsubscribe();
  }, [time, value$]);
  return [value, (v) => value$.next(v)];
};

export default useDebounce;
