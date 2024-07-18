"use client";
import React, { useEffect, useState } from 'react';
import TripForm from './tripForm';

interface Step {
  id: number;
  title: string;
  component: React.ReactNode; 
}

interface TripHeaderProps {
  emitChangeStep: (obj: Object|null) => void;
}

const steps: Step[] = [
  { id: 1, title: 'Trip Details', component: <div><TripForm/></div> },
  { id: 2, title: 'Choose Plan', component: <div><TripForm/></div> },
  { id: 3, title: 'Add Ons', component: <div>Step 3 Content</div> },
  { id: 4, title: 'Traveler Information', component: <div>Step 4 Content</div> },
  { id: 5, title: 'Payment', component: <div>Step 5 Content</div> },
];

const TripHeader: React.FC<TripHeaderProps> = ({ emitChangeStep }) => {
  const [currentStep, setCurrentStep] = useState(1); 

  useEffect(() => {
    const step = steps.find(step => step.id === currentStep);
    emitChangeStep(step ? step : null);
  }, [currentStep, emitChangeStep]);

  const goToStep = (id: number) => {
    setCurrentStep(id);    
  };

  return (
    <div>
      <div className="flex flex-row p-4 bg-blue-600">
        <h1 className="text-xl font-bold flex-1">Protect a New Trip</h1>
        <div className="flex space-x-4 flex-3">
          {steps.map(step => (
            <div key={step.id}>
              <button
                className={`${currentStep === step.id ? 'bg-orange-500' : 'bg-green-500'} text-white rounded-full px-3 py-1`}
                onClick={() => goToStep(step.id)}
              >
                0{step.id}
              </button>
              <span className={`${currentStep === step.id ? 'text-white-200' : 'text-gray-200'}`}>{step.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripHeader;
