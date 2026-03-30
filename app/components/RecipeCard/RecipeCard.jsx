'use client'

import styles from './RecipeCard.module.css'

export default function RecipeCard({ recipe, isFav, onToggleFav }) {
  return (
    <article className={`${styles.card} ${isFav ? styles.fav : ''}`}>
      <img className={styles.image} src={recipe.image} alt="" />
      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <span className={styles.badge}>{recipe.category}</span>
        <p className={styles.duration}>{recipe.duration} min</p>
        <button
          type="button"
          className={styles.heart}
          onClick={() => onToggleFav(recipe.id)}
          aria-label={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
    </article>
  )
}