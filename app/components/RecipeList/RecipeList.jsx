import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './RecipeList.module.css'

export default function RecipeList({ recipes, favIds, onToggleFav }) {
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => (
        <li key={recipe.id} className={styles.item}>
          <RecipeCard
            recipe={recipe}
            isFav={favIds.has(recipe.id)}
            onToggleFav={onToggleFav}
          />
        </li>
      ))}
    </ul>
  )
}