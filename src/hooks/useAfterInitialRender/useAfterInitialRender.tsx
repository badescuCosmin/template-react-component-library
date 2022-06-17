import { useRef, useLayoutEffect } from 'react';

export const useAfterInitialRender = (callback: Function, dependecies?: Array<{}>) => {
  const firstUpdate = useRef(true);
  return useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    callback();
  }, dependecies);
};
