import React, { useState } from 'react';
import '../styles/Modal.css'; 

const Gallery = () => {
  // imagens vindas de uma lista 
    const [images] = useState([
        { url: 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75', alt: 'Imagem 1' },
        { url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8893/live/ac7e5c10-c12f-11ee-896d-39d9bd3cadbb.jpg.webp', alt: 'Imagem 2' },
        { url: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg', alt: 'Imagem 3' },
      ]);
    

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
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
