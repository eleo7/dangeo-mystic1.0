import React from "react";

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
      <h2 className="text-xl font-bold mb-4">
        Avatares disponíveis para {race}
      </h2>
      <div className="flex flex-wrap gap-4">
        {avatarList.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`avatar ${idx}`}
            style={{ width: "96px", height: "96px", objectFit: "cover" }}
            className="rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500 transition"
            onClick={() => onSelect(url)}
          />
        ))}
      </div>
    </div>
  );
};
