"use client";
import React, { useState } from 'react';
import TripBanner from './tripBanner';
import TripHeader from './tripHeader';
import TripForm from './tripForm';

interface Step {
  id: number;
  title: string;
  component: React.ReactNode; 
}

const TripCard = () => {

const [currentStep, setCurrentStep] = useState<Step>(); 

const handleChangeStep = (obj : any) => {
  setCurrentStep(obj)
};


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto p-4">
        <TripHeader emitChangeStep={handleChangeStep} />
        <div className="bg-white shadow-md p-4">
          <div className="md:flex">
            <div className="md:w-1/2 pr-4">
            
            {currentStep?.component}
            </div>
            <div className="md:w-1/2 pl-4">
              <TripBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
