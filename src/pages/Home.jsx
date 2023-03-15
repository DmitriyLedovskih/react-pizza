import React from "react";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/slices/itemsSlice";

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { categoryId, categoryNames, sortingItem } = useSelector(
    (state) => state.category
  );
  const searchValue = useSelector((state) => state.search.searchValue);
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://640f1a654ed25579dc45daf1.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${
        searchValue ? `&search=${searchValue}` : ""
      }`,
      {
        "Content-Type": "application/json;charset=UTF-8",
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        dispatch(getItems(data));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId, sortingItem, searchValue]);

  return (
    <>
      {!searchValue && (
        <section className="content__top">
          <Categories />
          <Sorting />
        </section>
      )}
      <section className="cards">
        {!searchValue ? (
          <h2 className="title cards__title">
            {categoryNames[categoryId]} пиццы
          </h2>
        ) : (
          <h2 className="title cards__title">
            {items.length > 0
              ? `Результат поиска: ${searchValue}`
              : `По запросу ${searchValue} ничего не найдено`}
          </h2>
        )}
        <div className="cards__list">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <Card {...item} key={item.id} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
