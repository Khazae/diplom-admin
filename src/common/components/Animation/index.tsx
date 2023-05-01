import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const duration = 500;

interface IAnimationProps {
  children: React.ReactNode;
}

const defaultStyle: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: { [key: string]: React.CSSProperties } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Animation: React.FC<IAnimationProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <Transition in={show} timeout={duration}>
      {(state: string) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Animation;
