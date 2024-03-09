import { useState, useContext, createContext } from "react";

const TrendContext = createContext();
const TrendProvider = ({ children }) => {
  const [trend, setTrend] = useState([]);

  return (
    <TrendContext.Provider value={[trend, setTrend]}>
      {children}
    </TrendContext.Provider>
  );
};

// custom hook
const useTrend = () => useContext(TrendContext);

export { useTrend, TrendProvider };