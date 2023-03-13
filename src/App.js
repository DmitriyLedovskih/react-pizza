import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sorting from "./components/Sorting";
import Card from "./components/Card";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main className="content">
          <section className="content__top">
            <Categories />
            <Sorting />
          </section>
          <section className="cards">
            <h1 className="title cards__title">Все пиццы</h1>
            <div className="cards__list">
              {pizzas.map((pizza) => (
                <Card {...pizza} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
