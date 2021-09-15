import { useContext, createContext, useState } from "react";

const MouseAndTouchContext = createContext();

export function useMouseAndTouch() {
  return useContext(MouseAndTouchContext);
}

export function MouseAndTouchProvider({ children }) {
  const [mouseState, setMouseState] = useState({ clicked: false, x: 0, y: 0 });

  const setValue = (obj) => setMouseState((prev) => ({ ...prev, ...obj }));
  return (
    <div
      onTouchStart={() => setValue({ clicked: true })}
      onMouseDown={() => setValue({ clicked: true })}
      onTouchEnd={() => setValue({ clicked: false })}
      onMouseUp={() => setValue({ clicked: false })}
      onMouseMove={(a) => setValue({ x: a.clientX, y: a.clientY })}
      onTouchMove={({ changedTouches: [a] }) => setValue({ x: a.clientX, y: a.clientY })}
    >
      <MouseAndTouchContext.Provider value={mouseState}>{children}</MouseAndTouchContext.Provider>
    </div>
  );
}
