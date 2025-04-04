import React, { useState } from 'react';

import { races } from '../data/races';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';


const classes = [
  { name: 'Guerreiro', bonus: { forca: 1 } },
  { name: 'Mago', bonus: { inteligencia: 1 } },
  { name: 'Ladino', bonus: { destreza: 1 } },
  { name: 'Arqueiro', bonus: { destreza: 1 } },
  { name: 'Clérigo', bonus: { vitalidade: 1 } },
  { name: 'Bárbaro', bonus: { forca: 1 } },
];

const atributosBase = {
  forca: 0,
  destreza: 0,
  inteligencia: 0,
  vitalidade: 0,
};

export default function CreateCharacter() {
  const [etapa, setEtapa] = useState(1);
  const [race, setRace] = useState(null);
  const [classe, setClasse] = useState(null);
  const [atributos, setAtributos] = useState({ ...atributosBase });
  const [pontos, setPontos] = useState(10);
  const [nome, setNome] = useState('');

  const escolherRaca = (r: any) => {
    setRace(r);
    setEtapa(2);
  };

  const escolherClasse = (c: any) => {
    setClasse(c);
    setEtapa(3);
  };

  const alterarAtributo = (key: string, valor: number) => {
    if (pontos - valor < 0 || atributos[key] + valor < 0) return;
    setAtributos({ ...atributos, [key]: atributos[key] + valor });
    setPontos(pontos - valor);
  };

  const concluir = () => setEtapa(5);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {etapa === 1 && (
        <>
          <h1 className="text-xl font-bold mb-4">Escolha sua raça</h1>
          <div className="grid grid-cols-2 gap-4">
            {races.map((r) => (
              <Card key={r.name} onClick={() => escolherRaca(r)} className="cursor-pointer hover:shadow-xl">
                <CardContent>
                  <h2 className="font-bold text-lg">{r.name}</h2>
                  <p className="text-sm text-gray-600">{r.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {etapa === 2 && (
        <>
          <h1 className="text-xl font-bold mb-4">Escolha sua classe</h1>
          <div className="grid grid-cols-2 gap-4">
            {classes.map((c) => (
              <Card key={c.name} onClick={() => escolherClasse(c)} className="cursor-pointer hover:shadow-xl">
                <CardContent>
                  <h2 className="font-bold text-lg">{c.name}</h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {etapa === 3 && (
        <>
          <h1 className="text-xl font-bold mb-4">Distribua seus atributos ({pontos} pontos restantes)</h1>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(atributosBase).map((key) => (
              <div key={key} className="flex justify-between items-center border p-2 rounded">
                <span className="capitalize">{key}</span>
                <div className="flex gap-2">
                  <Button onClick={() => alterarAtributo(key, -1)}>-</Button>
                  <span>{atributos[key]}</span>
                  <Button onClick={() => alterarAtributo(key, 1)}>+</Button>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={() => setEtapa(4)} className="mt-4">Próximo</Button>
        </>
      )}

      {etapa === 4 && (
        <>
          <h1 className="text-xl font-bold mb-4">Nome e aparência</h1>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do personagem"
            className="w-full p-2 border rounded mb-4"
          />
          <Button onClick={concluir}>Finalizar</Button>
        </>
      )}

      {etapa === 5 && (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Personagem Criado!</h1>
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Raça:</strong> {race?.name}</p>
          <p><strong>Classe:</strong> {classe?.name}</p>
          <p><strong>Atributos:</strong></p>
          <ul className="list-disc pl-6">
            {Object.entries(atributos).map(([key, val]) => (
              <li key={key}>{key}: {val + (classe?.bonus[key] || 0)}</li>
            ))}
          </ul>
          <p className="mt-4"><strong>Descrição da raça:</strong> {race?.description}</p>
        </div>
      )}
    </div>
  );
}
