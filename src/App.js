import React from 'react';
import Home from './Home.js';
import Speakers from  './Speakers';

export const ConfigContext = React.createContext();

const pageToShow = pageName  => {
  if (pageName === 'Home') return <Home></Home>;
  if (pageName === 'Speakers') return <Speakers/>;
  return <div>Not Found</div>;
};

const configValue = {
   showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
    return (
     <ConfigContext.provider value={configValue}>
       <div>{pageToShow({pageName})}</div>
     </ConfigContext.provider>
    );
};

export default App;
