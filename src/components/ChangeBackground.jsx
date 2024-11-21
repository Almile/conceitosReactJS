import { useState, useEffect } from 'react'

function ChangeBackground(){
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
      const randomIndex = Math.floor(Math.random() * palette.length); 
      return palette[randomIndex];
    }
    

    const setBackground = () => {
        setBackgroundColor(getRandomColor())
    }

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