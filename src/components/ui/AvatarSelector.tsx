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
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Escolha seu avatar - {race}</h2>
      <div className="flex flex-wrap gap-6">
        {avatarList.map((url, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:brightness-110"
            onClick={() => onSelect(url)}
          >
            <img
              src={url}
              alt={`avatar ${idx + 1}`}
              className="w-20 h-20 rounded-full border-2 border-transparent hover:border-blue-500 shadow-md"
            />
            <span className="mt-1 text-sm text-center">Avatar {idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
