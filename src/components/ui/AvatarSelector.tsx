// src/components/ui/AvatarSelector.tsx
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
    <div>
      <h2 className="text-xl font-bold mb-2">Avatares disponíveis para {race}</h2>
      <div className="flex flex-wrap gap-4">
        {avatarList.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`avatar ${idx}`}
            className={`w-32 h-32 rounded-full cursor-pointer border-2 transition 
              ${selected === url ? "border-blue-600" : "border-transparent"}
              hover:border-blue-400`}
            onClick={() => {
              setSelected(url);
              onSelect(url);
            }}
          />
        ))}
      </div>
    </div>
  );
};
