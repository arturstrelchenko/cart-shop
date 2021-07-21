import React, {useCallback, useEffect} from 'react';
import {Categories, LoadingPizzaBlock, SortPoPup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";
import PizzaBlock from "../components/pizzaBlock";


const categoryNames = ['Лёд', 'Люди', 'Зелень', 'Животные',"Пчелы"];
const sortItems = [
    {name:'Популярность',type:"popular",order:"desc"},
    {name:'Цена',type: "price",order:"desc"},
    {name:'Алфавит',type: "name",order:"asc"}
]
const Home = () => {

    const items = useSelector(({pizzas})=>pizzas.items)
    const cartItems = useSelector(({cart})=>cart.items)
    const isLoaded = useSelector(({pizzas})=>pizzas.isLoaded)
    const {category,sortBy} = useSelector(({filters})=>filters)


    const dispatch = useDispatch()
    useEffect(()=>{
            dispatch(fetchPizzas(sortBy,category))
    },[category,sortBy])



    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);


    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);


   const handleAddPizza = (obj) => {
       console.log(obj)
       dispatch({
           type:"ADD_PIZZA_CART",
           payload:obj
       })
   }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                    activeCategory={category}
                    allPizza={items}
                />
                <SortPoPup items={sortItems}
                           activeSortType={sortBy.type}
                           onClickSortType={onSelectSortType}

                />
            </div>
            <h2 className="content__title">Все карточки ({items.length})</h2>
            <div className="content__items">
                {isLoaded
                ? items?.map(obj=>

                        <PizzaBlock key={obj.id}
                                    {...obj}
                                    addedCount={cartItems[obj.id]&&cartItems[obj.id].items.length}
                                    onClickAddPizza={(obj)=>handleAddPizza(obj)}
                        />
                    )
                    : Array(10).fill(0).map((_,index)=><LoadingPizzaBlock key={index} />)}

            </div>
        </div>
    );
};

export default Home;