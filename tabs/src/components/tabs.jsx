import React, { useState } from 'react'

const Tabs = (props) => {
    let tabs = props.tabs

    const [tabContent, setTabContent] = useState('');
    const [btnColor, setBtnColor] = useState('white')

    const handleClick = (tab, idx) => {
        console.log("clicked is =", tab.label);
        setTabContent(tab.content);
        setBtnColor('pink');
    }

    // const btnChange = (idx) => {
    //     console.log("changeColor =", idx)
    //     setBtnColor('pink')
    // }



    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {tabs.map((tab, idx) => (
                    <div key={idx}>
                        <div>
                            <button id='button' style={{ height: '40px', width: '135px', margin: '10px', background: btnColor }} onClick={() => handleClick(tab, idx)} >{tab.label}</button>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ border: ' 2px solid black', height: '200px', width: '500px' }}>
                    <p style={{marginTop:'80px'}}>
                        {tabContent}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Tabs





