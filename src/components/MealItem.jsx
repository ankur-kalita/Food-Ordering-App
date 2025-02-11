import { currencyFormatter } from "../util/formatting"
import Button from "./UI/Button"
import { useContext } from "react"
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);
    
    function handleAddMealToCart () {
        cartCtx.addItem(meal);
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`https://food-ordering-app-vm1m.onrender.com/${meal.image}`} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to cart</Button>
                </p>
            </article>
        </li>
    )
}
