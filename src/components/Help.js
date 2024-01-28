import React, { useState } from 'react';

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className=' border border-y-gray-400 p-3 m-5 mx-10 '>
      <div className='flex justify-center items-center'>
        <button
          className='text-lg font-semibold '
          onClick={() => setIsVisible(true)}
        >
          {name}
        </button>
      </div>
      {isVisible && <p className='text-sm'>{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, isVisibleSection] = useState();
  return (
    <div>
      <div>
        <Section
          name={
            'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?'
          }
          description={
            'After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.'
          }
          isVisible={visibleSection === 'about'}
          setIsVisible={() => isVisibleSection('about')}
        />
      </div>
      <div>
        <Section
          name={'How much commission will I be charged by Swiggy?'}
          description={
            'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.'
          }
          isVisible={visibleSection === 'charge'}
          setIsVisible={() => isVisibleSection('charge')}
        />
      </div>
      <div>
        <Section
          name={
            'What is this one time Onboarding fees? Do I have to pay for it while registering?'
          }
          description={
            'This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.'
          }
          isVisible={visibleSection === 'onboarding'}
          setIsVisible={() => isVisibleSection('onboarding')}
        />
      </div>
    </div>
  );
};

export default Help;
