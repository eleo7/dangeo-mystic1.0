"use client";
import { useState } from "react";

type AvatarSelectorProps = {
  onSelect: (url: string) => void;
};

const avatarList = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
];

export function AvatarSelector({ onSelect }: AvatarSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (url: string) => {
    setSelected(url);
    onSelect(url);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Escolha seu avatar</h2>
      <div className="flex flex-wrap gap-4">
        {avatarList.map((url) => (
          <img
            key={url}
            src={url}
            alt="avatar"
            onClick={() => handleSelect(url)}
            className={\`w-20 h-20 rounded-full border-4 cursor-pointer \${selected === url ? "border-blue-600" : "border-transparent"}\`}
          />
        ))}
      </div>
    </div>
  );
}
