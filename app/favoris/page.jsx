'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RecipeList from '../components/RecipeList/RecipeList'
import styles from '../components/RecipeApp/RecipeApp.module.css'

export default function FavorisPage() {
  const [favRecipes, setFavRecipes] = useState([])
  const [favIds, setFavIds] = useState(new Set())
  const router = useRouter()

  useEffect(() => {
    const ids = JSON.parse(sessionStorage.getItem('favIds') || '[]')
    const recipes = JSON.parse(sessionStorage.getItem('recipes') || '[]')
    const idSet = new Set(ids)
    setFavIds(idSet)
    setFavRecipes(recipes.filter((r) => idSet.has(r.id)))
  }, [])

  function handleToggleFav(id) {
    setFavIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      // Mettre à jour sessionStorage et la liste affichée
      sessionStorage.setItem('favIds', JSON.stringify([...next]))
      setFavRecipes((recipes) => recipes.filter((r) => next.has(r.id)))
      return next
    })
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>❤️ Mes Favoris</h1>
          <button type="button" className={styles.toggle} onClick={() => router.back()}>
            ← Retour
          </button>
        </div>
      </header>
      <main className={styles.main}>
        {favRecipes.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b645a', marginTop: '3rem' }}>
            Aucun favori pour le moment. Ajoutez des recettes avec le cœur ❤️
          </p>
        ) : (
          <RecipeList recipes={favRecipes} favIds={favIds} onToggleFav={handleToggleFav} />
        )}
      </main>
    </div>
  )
}