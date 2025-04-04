import React, { useState } from "react";

interface AvatarSelectorProps {
  race: string;
  avatarList: string[];
  onSelect: (url: string) => void;
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  race,
  avatarList,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">Escolha seu avatar - {race}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {avatarList.map((url, idx) => {
          const isSelected = selected === url;

          return (
            <div
              key={idx}
              className={`flex flex-col items-center space-y-1 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-110`}
              onClick={() => {
                setSelected(url);
                onSelect(url);
              }}
            >
              <img
                src={url}
                alt={`Avatar ${idx + 1}`}
                className={`w-16 h-16 rounded-full border-2 ${
                  isSelected ? "border-blue-600" : "border-gray-300"
                } hover:border-blue-400`}
              />
              <span
                className={`text-xs ${
                  isSelected ? "text-blue-600 font-bold" : "text-gray-700"
                }`}
              >
                Avatar {idx + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
