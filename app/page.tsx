import recipes from './data/jsconfig.json'
import RecipeApp from './components/RecipeApp/RecipeApp'

export default function Home() {
  return <RecipeApp initialRecipes={recipes} />
}