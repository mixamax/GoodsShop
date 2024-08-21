import styles from './productFoto.module.css'
import productFotoURL from '../../assets/images/productImg.jpg'

const smallFotos = [1, 2, 3, 4, 5, 6]
//добавить дефолтную картинку
const addDefaultImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = productFotoURL
}

export function ProductFoto() {
  return (
    <div className={styles['gallery-block-container']}>
      <div className={styles['big-foto-container']}>
        <img
          className={styles['big-foto']}
          src={productFotoURL}
          alt="фото товара"
          onError={addDefaultImage}
          loading="lazy"
        />
      </div>
      <div className={styles['small-fotos-container']}>
        {smallFotos.map((item) => (
          <div key={item} className={styles['small-foto-container']}>
            <img
              className={styles['small-foto']}
              src={productFotoURL}
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
