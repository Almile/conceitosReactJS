import React, { useState } from 'react';
// Importa o estilo CSS criado para o componente Modal
import '../styles/Modal.css'; 

const Gallery = () => {
    // Estado com a lista de imagens, cada uma contendo uma URL e texto alternativo
    const [images] = useState([
        { url: 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75', alt: 'Imagem 1' },
        { url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8893/live/ac7e5c10-c12f-11ee-896d-39d9bd3cadbb.jpg.webp', alt: 'Imagem 2' },
        { url: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg', alt: 'Imagem 3' },
      ]);
    
  // Estado para armazenar a imagem selecionada no modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para abrir o modal ao clicar em uma imagem
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

   // Função para exibir a próxima imagem na galeria (navegação repetida)
  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    // Calcula o índice da proxima imagem
    const nextIndex = (currentIndex + 1) % images.length;
    // Seleciona a próxima imagem
    setSelectedImage(images[nextIndex]);
  };
  //Função para exibir a imagem anterio
  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    // Calcula o índice da imagem anterior
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    // Seleciona a imagem anterior
    setSelectedImage(images[previousIndex]);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (// modal com imagem, botão de fechar e de controle
        <div>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <div className="modal-controls">
              <button onClick={handlePreviousImage}>Anterior</button>
              <button onClick={handleNextImage}>Próximo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
