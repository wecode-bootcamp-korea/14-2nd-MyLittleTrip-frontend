import {useEffect} from "react";

export const useOutsideClick = (ref, setProfileVisible, profileImageRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        profileImageRef.current &&
        !profileImageRef.current.contains(event.target)
      ) {
        setProfileVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setProfileVisible, profileImageRef]);
};

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if(ref.current && !ref.current.contains(event.target)) callback();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  },[ref, callback])
}