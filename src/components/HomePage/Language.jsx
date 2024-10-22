import { useState } from 'react';
import FlagsSelect from 'react-flags-select';


const Language = () => {
    const [selectedCountry, setSelectedCountry] = useState('US');

    const handleCountryChange = (countryCode) => {
        setSelectedCountry(countryCode);
        // Implement your language or country-specific logic here
    };
    return (
        <div>
            <div className="relative inline-block text-left">
                <FlagsSelect
                    selected={selectedCountry}
                    onSelect={handleCountryChange}
                    countries={["US", "FR", "ES", "DE", "IT", "JP", "CN"]} // Add more country codes as needed
                    placeholder="Select a country"
                    className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default Language;