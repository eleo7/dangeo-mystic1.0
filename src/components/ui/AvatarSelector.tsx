// src/components/ui/AvatarSelector.tsx
interface AvatarSelectorProps {
  race: string;
  avatarList: string[];
  onSelect: (url: string) => void;
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ race, avatarList, onSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Avatares disponíveis para {race}</h2>
      <div className="flex flex-wrap gap-4">
        {avatarList.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`avatar ${idx}`}
            className="w-24 h-24 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500"
            onClick={() => onSelect(url)}
          />
        ))}
      </div>
    </div>
  );
};
