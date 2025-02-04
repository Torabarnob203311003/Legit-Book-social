import { useState } from "react";
import Select from "react-select";
import { RiArrowDownWideFill } from "react-icons/ri";

const countries = [
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
    { label: "United Kingdom", value: "UK" },
    { label: "Germany", value: "DE" },
    { label: "Australia", value: "AU" },
];

const cities = {
    US: ["New York", "Los Angeles", "Chicago"],
    CA: ["Toronto", "Vancouver", "Montreal"],
    UK: ["London", "Manchester", "Birmingham"],
    DE: ["Berlin", "Munich", "Hamburg"],
    AU: ["Sydney", "Melbourne", "Brisbane"],
};

export default function Sidebar() {
    const [showLocationFilters, setShowLocationFilters] = useState(false);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [otherInput, setOtherInput] = useState("");

    const handleCountryChange = (selected) => {
        setSelectedCountries(selected);
        setSelectedCities([]); // Reset cities when changing countries
    };

    return (
        <div className="w-full sm:w-64 bg-[#1A1A1A] text-gray-500 p-8 space-y-4">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button className="text-blue-400 text-sm">Clear All</button>
            </div>

            {/* Locations Section */}
            <div>
                <button
                    className="w-full text-left text-white py-2"
                    onClick={() => setShowLocationFilters(!showLocationFilters)}
                >
                    Locations
                    {showLocationFilters ? (
                        <RiArrowDownWideFill className="inline-block ml-24 rotate-180" />
                    ) : (
                        <RiArrowDownWideFill className="inline-block ml-24" />
                    )}
                </button>
                {showLocationFilters && (
                    <div className="space-y-4">
                        {/* Country Selection */}
                        <div>
                            <label className="block text-sm font-semibold">Select Country</label>
                            <Select
                                options={countries}
                                value={selectedCountries}
                                onChange={handleCountryChange}
                                isMulti
                                menuPortalTarget={document.body}
                                classNamePrefix="react-select"
                                className="text-black"
                            />
                        </div>

                        {/* City Selection */}
                        <div>
                            <label className="block text-sm font-semibold">Select City</label>
                            <Select
                                options={
                                    selectedCountries.length > 0
                                        ? selectedCountries.flatMap((country) =>
                                            cities[country.value]?.map((city) => ({
                                                label: city,
                                                value: city,
                                            })) || []
                                        )
                                        : []
                                }
                                value={selectedCities}
                                onChange={setSelectedCities}
                                isMulti
                                menuPortalTarget={document.body}
                                classNamePrefix="react-select"
                                className="text-black"
                            />
                        </div>

                        {/* Other Input Box */}
                        <div>
                            <label className="block text-sm text-blue-700 font-semibold">Clear Filters</label>
                        </div>
                    </div>
                )}
            </div>

            {/* Other Filters Placeholder (No Toggle) */}
            <div className="space-y-2">
                <button className="w-full text-left text-white py-2">
                    People <RiArrowDownWideFill className="inline-block ml-28" />
                </button>
                <button className="w-full text-left text-white py-2">
                    Education <RiArrowDownWideFill className="inline-block ml-[90px]" />
                </button>
                <button className="w-full text-left text-white py-2">
                    Work <RiArrowDownWideFill className="inline-block ml-[122px]" />
                </button>
                <button className="w-full text-left text-white py-2">
                    Friends of Friend <RiArrowDownWideFill className="inline-block ml-[42px]" />
                </button>
                <button className="w-full text-left text-white py-2">
                    Interests <RiArrowDownWideFill className="inline-block ml-[100px]" />
                </button>
                <button className="w-full text-left text-white py-2">
                    Companies <RiArrowDownWideFill className="inline-block ml-[80px]" />
                </button>
            </div>
        </div>
    );
}
