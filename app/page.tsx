'use client';

import React, { useState } from 'react';

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao Dangeo Mystic</h1>
      <p>Explore o mapa interativo abaixo e clique nos ícones para ver mais informações.</p>

      {/* Exemplo de um mapa interativo com ícones */}
      <div className="map">
        <button onClick={openModal} className="map-icon">
          <img src="icon-path.png" alt="Ícone" />
        </button>
      </div>

      {/* Modal para exibir informações sobre o ícone */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Informações do Ícone</h2>
            <p>Conteúdo sobre o ícone selecionado...</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .map {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          background-color: #f0f0f0;
        }
        .map-icon {
          background: none;
          border: none;
          cursor: pointer;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
        }
      `}</style>
    </div>
  );
};

export default Page;
