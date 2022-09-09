import React, {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';

import { Context } from '../../context/langContext';

export default function ToggleLangs() {
    const {toggleLang} = useContext(Context);
    
  return (
    <div className='container-langs'>
        <img src={FrenchFlag} alt="french" onClick={() => toggleLang('FR')}  />
        <img src={EnglishFlag} alt="english" onClick={() => toggleLang('EN')} />
        <img src={SpanishFlag} alt="spanish" onClick={() => toggleLang('ES')} />
    </div>
  )
}
