import React from 'react';
import { Language } from '../types';

interface Props {
  selected: Language;
  onChange: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="relative inline-block text-left">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value as Language)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-heritage-gold focus:border-heritage-gold sm:text-sm rounded-md bg-stone-850 text-heritage-gold font-serif tracking-wide cursor-pointer uppercase border"
      >
        {Object.values(Language).map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;