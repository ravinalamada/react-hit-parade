import {useState,useRef, useEffect} from 'react'

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  function enter() {
    setIsHovered(true)
  }

  function leave() {
    setIsHovered(false)
  }

  useEffect(
    () => {
      const node = ref.current;
        node.addEventListener('mouseenter', enter);
        node.addEventListener('mouseleave', leave);

        return () => {
          // clean up phase, this will run when the component unmount
          node.removeEventListener('mouseenter', enter);
          node.removeEventListener('mouseleave', leave);
        };
    },[]);

    return [ref, isHovered]

}

export default useHover
