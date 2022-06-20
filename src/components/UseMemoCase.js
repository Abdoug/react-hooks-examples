import React, { useState, useMemo } from 'react'

function UseMemoCase() {
  const [number, setNumber] = useState(0);
  const [themeIsDark, setThemeIsDark] = useState(true);

  const multiplyNumberByTwo = () => {
    console.log('Executing');

    let j = 0;

    for (let i = 0; i < 100000000; i++) {
      j++;
      i++;
    }

    return number * number;
  }

  const numberMultipliedByTwo = useMemo(() => {
    return multiplyNumberByTwo();
  }, [number]);

  return (
    <div>
        <input value={number} onChange={(e) => setNumber(parseInt(e.target.value || 0))}/>
        <button onClick={() => setThemeIsDark(!themeIsDark)}>Change theme</button>
        <p style={{ backgroundColor: themeIsDark ? '#282c34' : 'white', color: themeIsDark ? 'white' : '#282c34' }}>{numberMultipliedByTwo}</p>
    </div>
  )
}

export default UseMemoCase