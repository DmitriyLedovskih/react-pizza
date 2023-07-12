import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { selectFilter } from "../redux/slices/filterSlice";
import { fetchItems, selectItemsData } from "../redux/slices/itemsSlice";
import { selectSearch } from "../redux/slices/searchSlice";
import Pagination from "../components/Pagination";
import { useAppDispatch } from "../redux/store";

const Search: React.FC = () => {
  const { categoryId, sortingItem, currentPage } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const { items } = useSelector(selectItemsData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(
      fetchItems({
        categoryId,
        sortingItem,
        searchValue,
        currentPage,
      })
    );
  }, [categoryId, sortingItem, searchValue]);
  return (
    <div className="search-page">
      <Cards
        title={
          items.length > 0
            ? `Результат поиска: ${searchValue}`
            : `По запросу ${searchValue} ничего не найдено`
        }
      />
    </div>
  );
};

export default Search;
