import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react"; // or FontAwesome
import { tradeOptions } from "@/utils/TradeOptions";// adjust path
import PurpleBtn from "./purpleBtn";

const TradeSearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [budget, setBudget] = useState([1000, 6000]);
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);

  const handleFilters = ()=>{
    setShowFilters(false)
  }

  const toggleTrade = (value: string) => {
    setSelectedTrades((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative  w-full max-w-[500px] mx-auto">
      {/* Search bar */}
      <div className="flex items-center gap-2  px-3 py-2 rounded-md  bg-white">
        <Search className="w-4 h-4 relative right-[-2rem] text-gray-500" />
        <input
          type="text"
          placeholder="      Search by name or location"
          className="flex-1 outline-none text-sm"
        />
        <button type="button" title="showFilters" className="bg-light-white border border-black rounded-full" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal className="w-3 md:w-4  h-3 md:h-4 text-gray-600" />
        </button>
      </div>
      {showFilters && (
        <div className="absolute z-10 mt-2 flex flex-col items-center w-full bg-white shadow-lg rounded-md p-4 space-y-4 max-h-[60vh] hide-scroll overflow-y-auto border border-primary-purple ">
          {/* Budget Slider */}
          <div>
            <p className="text-sm md:text-lg  mb-1 text-center font-bold">Budget</p>
            <div className="flex flex-col border p-2 items-center text-xs text-gray-500">
              <span>Min: {budget[0]}</span>
              <input
                title="budgetMin"
                type="range"
                min="0"
                max="5000"
                value={budget[0]}
                onChange={(e) => setBudget([+e.target.value, budget[1]])}
              />
              <input
                title="budgetMax"
                type="range"
                min="5000"
                max="10000"
                value={budget[1]}
                onChange={(e) => setBudget([budget[0], +e.target.value])}
              />
              <span>Max: {budget[1]}</span>
            </div>
          </div>

          {/* Trade filters */}
          <div className="flex flex-wrap justify-between w-full gap-1">
            {tradeOptions.map((tradeOption) => (
              tradeOption.options.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => toggleTrade(option.value)}
                  className={`px-3 w-fit py-1 text-xs text-nowrap hover:text-black focus:text-black rounded-full bg-light-white border border-black ${selectedTrades.includes(option.value)
                    ? "bg-blue-600 border-blue-600"
                    : "text-gray-700"
                    }`}
                >
                  {option.label}
                </button>
              )))
            )}
          </div>

          {/* <button
            onClick={handleFilters}
            type="button"
            className="w-fit self-center bg-blue-600 text-white py-2 rounded-md text-sm">
            Apply
          </button> */}
          <PurpleBtn
          text='Apply'
          upperCase="false"
          classes=""
          click={handleFilters}
          />
        </div>
      )}
    </div>
  );
};

export default TradeSearch;