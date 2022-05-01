import React from 'react'
import { useState } from 'react'
import Form from './components/Form';
import Weather from './components/Weather';
import './index.css';
export default function App() {
    const [step, setStep] = useState(1);
  const [cityName,setCityName] = useState('');

const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if(step === 2) {
        console.log(cityName);
    }
  };
  const backStep = () => {
    if (step > 1) {
      setStep(step -1);
    } 
  };
    return (            
                  <div className='card'>
                      {
                      {
                          1: <Form setCityName={setCityName}/>,
                          2: <Weather cityName={cityName}/>,
                      }
                      [step]
                      }
      
                          {step === 1 ? (
                              <button className="btnr" onClick={nextStep}>
                                  NEXT
                              </button>
                          ): null}
                          {step === 2 ?  (
                            <button className='btnr'  onClick={backStep}>
                              BACK
                            </button>
                          ): null}
                      </div>
                 
          
          
        )
}
