import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifFrid } from './components/GifFrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // Si ya existe, no hacer nada
        setCategories([newCategory, ...categories]); // Agregar al inicio
    };

    return (
        <>

            {/* titulo */} 
            <h1>GifExpertApp</h1>

           {/* categoria */}
            <AddCategory onAddCategory={addCategory} />

            {/*    listado de gifs */}
             
             <ol>
              {
                categories.map((category) =>
          
                 <GifFrid  key={category} category={category}/>
                    
                  
                )
              }
             </ol>
        </>
    );
};