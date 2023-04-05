import React from "react";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/slices/itemsSlice";
import Cards from "../components/Cards";
import { selectSearch } from "../redux/slices/searchSlice";
import { selectFilter } from "../redux/slices/filterSlice";
import Pagination from "../components/Pagination";

function Home() {
  const { categoryId, sortingItem, categoryNames, currentPage } =
    useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      fetchItems({
        categoryId,
        sortingItem,
        searchValue,
        currentPage,
      })
    );
  }, [categoryId, sortingItem, searchValue, currentPage]);

  return (
    <>
      <section className="content__top">
        <Categories />
        <Sorting />
      </section>
      <Cards title={`${categoryNames[categoryId]} пиццы`} />
      <Pagination />
    </>
  );
}

export default Home;
