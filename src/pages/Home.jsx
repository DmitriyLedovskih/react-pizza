import React from "react";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortValue, setSortValue] = React.useState({
    name: "популярности",
    sortProperty: "rating",
    order: "desc",
  });

  const order = sortValue.order.includes("asc") ? "desc" : "asc";

  function onClickSortButtons(data) {
    setSortValue({
      name: data.name,
      sortProperty: data.sortProperty,
      order: order,
    });
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://640f1a654ed25579dc45daf1.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortValue.sortProperty}&order=${order}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId, sortValue]);

  return (
    <>
      <section className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sorting sortValue={sortValue} onClickSortButton={onClickSortButtons} />
      </section>
      <section className="cards">
        <h2 className="title cards__title">Все пиццы</h2>
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
