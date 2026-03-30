'use client'

import { useState } from 'react'
import styles from './RecipeApp.module.css'
import RecipeList from '@/components/RecipeList/RecipeList'
import RecipeSearch from '@/components/RecipeSearch/RecipeSearch'

export default function RecipeApp({ initialRecipes }) {
  const [orderedRecipes, setOrderedRecipes] = useState(initialRecipes)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRecipes = orderedRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeSearch searchTerm={searchTerm} onChange={setSearchTerm} />
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  )
}