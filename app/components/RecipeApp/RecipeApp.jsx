'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './RecipeApp.module.css'
import RecipeList from '../RecipeList/RecipeList'
import RecipeSearch from '../RecipeSearch/RecipeSearch'

export default function RecipeApp({ initialRecipes }) {
  const [orderedRecipes, setOrderedRecipes] = useState(initialRecipes)
  const [searchTerm, setSearchTerm] = useState('')
  const [favIds, setFavIds] = useState(new Set())
  const router = useRouter()

  const filteredRecipes = orderedRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleToggleFav(id) {
    setFavIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

  function goToFavs() {
    // On passe les ids via sessionStorage pour les partager avec la page favoris
    sessionStorage.setItem('favIds', JSON.stringify([...favIds]))
    sessionStorage.setItem('recipes', JSON.stringify(initialRecipes))
    router.push('/favoris')
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <div className={styles.actions}>
            <button type="button" className={styles.toggle} onClick={handleToggleOrder}>
              Reverse order
            </button>
            <button type="button" className={styles.favBtn} onClick={goToFavs}>
              ❤️ Favoris {favIds.size > 0 && `(${favIds.size})`}
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeSearch searchTerm={searchTerm} onChange={setSearchTerm} />
        <RecipeList recipes={filteredRecipes} favIds={favIds} onToggleFav={handleToggleFav} />
      </main>
    </div>
  )
}