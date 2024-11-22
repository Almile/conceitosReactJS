import { useState, useEffect } from 'react'
// Componente ChangeBackground: altera a cor de fundo do body da página ao clicar em um botão.
function ChangeBackground(){
   // Estado para armazenar a cor de fundo atual e função que altera ela
    const [backgroundChanged, setBackgroundColor] = useState('white')

    const getRandomColor = () => {
      /*
      //Qualquer cor aleatória
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]  
    
        }
        return color
      */

        //Somente Cores da paleta
        const palette = [
          '#75619e', 
          '#beaedb',
          '#e6eff8', 
          '#eee', 
          '#fff',
      ];
      // Escolhe um índice aleatório na paleta
      const randomIndex = Math.floor(Math.random() * palette.length); 
      return palette[randomIndex];
    }
    
// Função que altera o estado para uma nova cor
    const setBackground = () => {
        setBackgroundColor(getRandomColor())
    }

    //Sempre que o backgroundChanged muda, atualiza a cor de fundo do body
    useEffect(() => {
            document.body.style.backgroundColor = backgroundChanged
    }, [backgroundChanged]) 

    return (
        <div className='content'>
           <ul><button onClick={setBackground}>Change Background Color</button></ul>
        </div>
    )
}

export default ChangeBackground