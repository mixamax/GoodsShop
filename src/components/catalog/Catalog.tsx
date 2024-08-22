import { useEffect, useState } from 'react'
import { useGetGoodsByTitleQuery } from '../../services/apiServices/goodsApi'
import { CatalogItem } from '../catalogItem/CatalogItem'
import { MainButton } from '../mainButton/MainButton'
import styles from './catalog.module.css'
import { useDebounce } from '../../hooks/useDebounce'
import { transformProductDTO } from '../../utils/transformProductDTO'
import { useAppSelector } from '../../hooks/storeHooks'
import { useAppDispatch } from '../../hooks/storeHooks'
import { incrementLimit, setSearchValue } from '../../store/catalogSlice'

export function Catalog() {
  const { limit, searchValue } = useAppSelector((state) => state.catalog)
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState(searchValue)

  const debouncedSearchValue = useDebounce(inputValue, 1000)

  const { data, error, isFetching } = useGetGoodsByTitleQuery({
    title: searchValue,
    limit,
  })

  useEffect(() => {
    dispatch(setSearchValue(debouncedSearchValue))
  }, [debouncedSearchValue])

  if (error) return <h1>Something went wrong</h1>
  return (
    <section id="catalog" className={styles['catalog-container']}>
      <h2 className={styles['catalog-title']}>Catalog</h2>
      <input
        className={styles['catalog-search']}
        type="text"
        placeholder="Search by title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div className={styles['catalog-items-container']}>
        {data?.products.map((product) => (
          <CatalogItem
            product={transformProductDTO(product)}
            key={product.id}
          />
        ))}
      </div>
      {isFetching && <h1>Loading...</h1>}
      {!(limit >= (data?.total || 0)) && (
        <div className={styles['catalog-btn-field']}>
          <MainButton
            type="text"
            text="Show more"
            callBack={() => dispatch(incrementLimit())}
            disabled={isFetching}
          />
        </div>
      )}
    </section>
  )
}
