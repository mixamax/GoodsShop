import styles from './productFoto.module.css'
import productFotoURL from '../../assets/images/productImg.jpg'
import { useState } from 'react'

//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = productFotoURL
}

type Props = {
  images: string[]
}

export function ProductFoto({ images }: Props) {
  const [activeImage, setActiveImage] = useState(0)
  return (
    <div className={styles['gallery-block-container']}>
      <div className={styles['big-foto-container']}>
        <img
          className={styles['big-foto']}
          src={images[activeImage]}
          alt="фото товара"
          onError={addDefaultImage}
          loading="lazy"
        />
      </div>
      <div className={styles['small-fotos-container']}>
        {images.length > 1 &&
          images.map((url, index) => (
            <div
              key={url}
              className={`${styles['small-foto-container']} ${
                activeImage === index && styles['small-foto-container_active']
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img
                className={styles['small-foto']}
                src={url}
                alt="фото товара"
                onError={addDefaultImage}
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
