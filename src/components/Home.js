import React, { useState } from 'react'
import UseMemoCase from './UseMemoCase';
import UseRefCase from './UseRefCase';
import UseContextCase from './UseContext';
import UseReducerCase from './UseReducer';
import UseCallBackCase from './UseCallBack';
import UseLocalStorage from './CustomHooks';

function Home() {
    const cases = [{
            name: "useMemo",
            component: <UseMemoCase/>
        }, {
            name: "UseRef",
            component: <UseRefCase/>
        },
        {
            name: "UseContext",
            component: <UseContextCase/>
        },
        {
            name: "UseReducer",
            component: <UseReducerCase/>
        },
        {
            name: "UseCallBack",
            component: <UseCallBackCase/>
        },
        {
            name: "UseLocalStorage",
            component: <UseLocalStorage/>
        }];
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

    return (
        <div>
            <div className="nav-section">
                {cases.map((e, i) => (
                    <button key={i} onClick={() => setCurrentCaseIndex(i)}>{e.name}</button>
                ))}
            </div>
            <h3>Current case is: {cases[currentCaseIndex].name}</h3>
            {cases[currentCaseIndex].component}
        </div>
    )
}

export default Home