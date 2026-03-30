import styles from './RecipeSearch.module.css'

export default function RecipeSearch({ searchTerm, onChange }) {
  return (
    <input
      className={styles.searchTerm}
      type="search"
      placeholder="Search Recipe"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}