import RecipeCard from '@/components/RecipeCard/RecipeCard'
import styles from './RecipeList.module.css'

export default function RecipeList({ recipes }) {
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => (
        // Fix: use recipe.id as key instead of index so React correctly
        // tracks each card's local state (e.g. pinned) when the list is reversed.
        <li key={recipe.id} className={styles.item}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}