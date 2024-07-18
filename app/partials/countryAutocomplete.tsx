import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react';

const countries: string[] = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
];

const CountryAutocomplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
 
  useEffect(() => {
    
    function handleClickOutside(event: any) {
        
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter(c => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    setShowDropdown(!showDropdown);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={inputValue}
        onClick={handleClick}
        onChange={handleChange}
        placeholder="Search a country"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      />
      {showDropdown && (
        <div  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {countries.map((country, index) => (
            <label key={index} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
              <input
                type="checkbox"
                value={country}
                checked={selectedCountries.includes(country)}
                onChange={() => toggleCountry(country)}
                className="mr-2"
              />
              {country}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryAutocomplete;
