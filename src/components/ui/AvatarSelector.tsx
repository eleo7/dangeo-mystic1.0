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
      <h2 className="text-xl font-bold mb-4 text-center">Escolha seu avatar - {race}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {avatarList.map((url, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <img
              src={url}
              alt={`avatar ${idx + 1}`}
              className={`w-16 h-16 object-cover rounded-full cursor-pointer border-2 transition
                ${selected === url ? "border-blue-600" : "border-transparent"}
                hover:border-blue-400`}
              onClick={() => {
                setSelected(url);
                onSelect(url);
              }}
            />
            <span className="text-xs text-center">Avatar {idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
