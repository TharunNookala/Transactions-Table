import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

const CountryFlags = ({ countryCode, onSelect }) => {
    return (
        <ReactFlagsSelect
            selected={countryCode}
            countries={["US", "GB", "AU"]}
            customLabels={{ "US": "USA", "GB": "UK", "AU": "AU" }}
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={onSelect}
        />
    );
};

export default CountryFlags;
