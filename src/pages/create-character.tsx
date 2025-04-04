"use client";
import { useState } from "react";
import { races } from "../data/races";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AvatarSelector } from "../components/ui/AvatarSelector";

const classes = [
  {
    name: "Guerreiro",
    bonus: { forca: 1, destreza: 0, inteligencia: 0, vitalidade: 0 },
  },
  {
    name: "Mago",
    bonus: { forca: 0, destreza: 0, inteligencia: 1, vitalidade: 0 },
  },
  {
    name: "Arqueiro",
    bonus: { forca: 0, destreza: 1, inteligencia: 0, vitalidade: 0 },
  },
];


const atributosBase = {
  forca: 0,
  destreza: 0,
  inteligencia: 0,
  vitalidade: 0,
};

type AtributoChave = keyof typeof atributosBase;

export default function CreateCharacter() {
  const [etapa, setEtapa] = useState(1);
  const [race, setRace] = useState<string | null>(null);
  const [classe, setClasse] = useState<typeof classes[0] | null>(null);
  const [atributos, setAtributos] = useState({ ...atributosBase });
  const [pontos, setPontos] = useState(5);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [nome, setNome] = useState("");

  const alterarAtributo = (key: AtributoChave, valor: number) => {
    if (pontos - valor < 0 || atributos[key] + valor < 0) return;
    setAtributos({ ...atributos, [key]: atributos[key] + valor });
    setPontos(pontos - valor);
  };

  const aplicarBonusClasse = () => {
    if (!classe || !classe.bonus) return atributos;
  
    const bonus = classe.bonus as Record<AtributoChave, number>;
    const novo = { ...atributos };
  
    for (const key in bonus) {
      const k = key as AtributoChave;
      novo[k] += bonus[k];
    }
  
    return novo;
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      {etapa === 1 && (
        <>
          <h1 className="text-2xl font-bold">Escolha sua raça</h1>
          {races.map((r) => (
            <Card key={r.name} onClick={() => { setRace(r.name); setEtapa(2); }}>
              <CardContent>
                <strong>{r.name}</strong>
                <p>{r.description}</p>
              </CardContent>
            </Card>
          ))}
        </>
      )}

      {etapa === 2 && (
        <>
          <h1 className="text-2xl font-bold">Escolha sua classe</h1>
          {classes.map((c) => (
            <Card key={c.name} onClick={() => { setClasse(c); setEtapa(3); }}>
              <CardContent>
                <strong>{c.name}</strong>
                <p>Bônus: {Object.keys(c.bonus)[0]}</p>
              </CardContent>
            </Card>
          ))}
        </>
      )}

      {etapa === 3 && (
        <>
          <h1 className="text-2xl font-bold">Distribua seus atributos</h1>
          <p>Pontos disponíveis: {pontos}</p>
          {Object.keys(atributosBase).map((key) => (
            <div key={key} className="mb-2 flex items-center gap-4">
              <span className="capitalize w-28">{key}</span>
              <Button onClick={() => alterarAtributo(key as AtributoChave, -1)}>-</Button>
              <span>{atributos[key as AtributoChave]}</span>
              <Button onClick={() => alterarAtributo(key as AtributoChave, 1)}>+</Button>
            </div>
          ))}
          <Button onClick={() => setEtapa(4)} className="mt-4">Avançar</Button>
        </>
      )}

      {etapa === 4 && (
        <>
          <AvatarSelector onSelect={(url) => setAvatarUrl(url)} />
          <Button onClick={() => setEtapa(5)} className="mt-4">Continuar</Button>
        </>
      )}

      {etapa === 5 && (
        <>
          <h1 className="text-2xl font-bold">Escolha um nome</h1>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border px-4 py-2 rounded w-full mt-2 mb-4"
            placeholder="Digite seu nome..."
          />
          <Button onClick={() => setEtapa(6)}>Finalizar</Button>
        </>
      )}

      {etapa === 6 && (
        <>
          <h1 className="text-2xl font-bold">Ficha Final</h1>
          {avatarUrl && <img src={avatarUrl} alt="avatar" className="w-32 h-32 rounded-full mb-4" />}
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Raça:</strong> {race}</p>
          <p><strong>Classe:</strong> {classe?.name}</p>
          <h2 className="mt-4 font-semibold">Atributos:</h2>
          <ul>
            {Object.entries(aplicarBonusClasse()).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
