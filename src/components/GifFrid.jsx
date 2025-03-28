import { useState,useEffect } from "react";
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
export const GifFrid = ({category}) => {

  const [images, setimages] = useState([]);

  const getImages= async () => {
    const newImages= await getGifs(category);
    setimages(newImages);
  }

   useEffect(() => {
       getImages();
   },[])
  
  return (
    <>

      <h1>{category}</h1>
       <div className="card-grid">
     
       {
        images.map( (image) => {
        return   <GifItem key={image.id}
              {...image}
            />
        })
       }

       </div>
    </>
  )
}
