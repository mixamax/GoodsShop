import { CatalogItem } from '../catalogItem/CatalogItem'
import { MainButton } from '../mainButton/MainButton'
import styles from './catalog.module.css'

const Items = [0, 0, 0, 0, 0, 2, 0, 0, 0, 0]

export function Catalog() {
  return (
    <section id="catalog" className={styles['catalog-container']}>
      <h2 className={styles['catalog-title']}>Catalog</h2>
      <input
        className={styles['catalog-search']}
        type="text"
        placeholder="Search by title"
      ></input>
      <div className={styles['catalog-items-container']}>
        {Items.map((item, index) => (
          <CatalogItem quantity={item} key={index} />
        ))}
      </div>
      <div className={styles['catalog-btn-field']}>
        <MainButton
          type="text"
          text="Show more"
          callBack={() => console.log('click Show more')}
        />
      </div>
    </section>
  )
}
