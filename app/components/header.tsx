import React from "react";
import DateSelector from "./date-selector";
import StationSelector from "./station-selector";

type PageKey = "Home" | "Map" | "Station";

interface HeaderProps {
  title: string;
  activePage?: PageKey;
  selectedDate?: string;
  onStationSelect?: (stationId: number) => void;
  onDateSelect?: (date: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, activePage, selectedDate, onStationSelect, onDateSelect }) => {
  return (
    <header className="pt-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-15">
        <div className="md:col-span-4">
          <h1 className="text-[36px] font-extrabold text-text-primary">
            {title}
          </h1>
        </div>

        {/* Right-most column aligns with the last card */}
        <div className="md:col-span-1 flex justify-end">
          {activePage === "Home" && (
            <div className="flex gap-4">
              <DateSelector value={selectedDate} onSelect={onDateSelect} />
            </div>
          )}
          {activePage === "Station" && (
            <div className="flex gap-4">
              <DateSelector value={selectedDate} onSelect={onDateSelect} />
              <StationSelector onSelect={onStationSelect} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
