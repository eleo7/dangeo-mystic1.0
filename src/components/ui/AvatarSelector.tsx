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
        {avatarList.map((url, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <img
              src={url}
              alt={`Avatar ${idx + 1}`}
              style={{
                width: "64px",
                height: "64px",
                objectFit: "cover",
                borderRadius: "9999px",
              }}
              className={`cursor-pointer border-2 transition duration-200 transform hover:scale-105 hover:brightness-110 ${
                selected === url ? "border-blue-600" : "border-gray-300"
              } hover:border-blue-400`}
              onClick={() => {
                setSelected(url);
                onSelect(url);
              }}
            />
            <span
              className={`text-xs ${
                selected === url
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Avatar {idx + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
