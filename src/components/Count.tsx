import React, { useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count-container">
      <div style={{ fontSize: '48px', margin: '20px' }}>{count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default Count;