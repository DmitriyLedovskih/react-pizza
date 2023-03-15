import debounce from "lodash.debounce";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onChangeSearch } from "../redux/slices/searchSlice";

function SearchForm() {
  const [localValue, setLocalValue] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  const inputRef = React.useRef();

  const searchDobounce = React.useCallback(
    debounce((value) => {
      dispatch(onChangeSearch(value));
    }, 500),
    []
  );

  function onChange(evt) {
    searchDobounce(evt.target.value);
    setLocalValue(evt.target.value);
    // evt.target.value ? navigate("/search") : navigate("/");
  }

  function onClickClear() {
    dispatch(onChangeSearch(""));
    setLocalValue("");
    inputRef.current.focus();
    // navigate("/");
  }

  return (
    <div className={`search ${isFocus ? "search_focus" : ""}`}>
      <button
        className="button search__button search__button_type_submit"
        type="button"
        onClick={() => setActive(!active)}
      ></button>
      <input
        type="text"
        placeholder="Поиск пиццы..."
        className={`search__input ${active ? "search__input_active" : ""}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        value={localValue}
        ref={inputRef}
      />
      <button
        className={`button search__button search__button_type_clear ${
          localValue ? "search__button_visibled" : ""
        }`}
        onClick={onClickClear}
      ></button>
    </div>
  );
}

export default SearchForm;
