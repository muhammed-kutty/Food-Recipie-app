import React from "react";
import { useState, useContext, useEffect } from "react";
import CardDish from "../Card/CardDish";
import Pagination from "../Pagination/Pagination";
import PopUp from "../Popup/PopUp";

import { AllMenuContext } from "../context/AllMenuContext";

function FilterdDishes(props) {
  const allMenu = useContext(AllMenuContext);
  let [singleDish, setsingleDish] = useState([]);

  async function getCatagoryData() {
    const CATEGORY_API_URL =
      "https://www.themealdb.com/api/json/v1/1/categories.php";
    let responce = await fetch(CATEGORY_API_URL);
    let categorydata = await responce.json();
    setMenuCatagory(categorydata.categories);
  }

  useEffect(() => {
    getCatagoryData();
    let singleDishdata = allMenu.filter((item) => {
      return item.strCategory === "Beef";
    });
    setsingleDish(singleDishdata);
  }, [allMenu]);

  let [showPopup, setshowPopup] = useState(false);
  let [popupItems, setpopupItems] = useState("");
  let [menuCatagory, setMenuCatagory] = useState([]);

  let [filterdDishes, setfilterdDishes] = useState([""]);
  let [active, setacttive] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsperPage] = useState(4);

  let indexOflastDissh = currentPage * itemsperPage;
  let indexoffirstDish = indexOflastDissh - itemsperPage;
  let showtheseDishes = filterdDishes.slice(indexoffirstDish, indexOflastDissh);

  function showFilterdDishes(category) {
    setsingleDish([]);
    setacttive(category);
    let filterdDishesAre = allMenu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem, index) => {
        return (
          <CardDish
            menuitem={menuItem}
            showPopupHandler={showPopupHandler}
            index={index}
          />
        );
      });
    setfilterdDishes(filterdDishesAre);
  }

  function showPopupHandler(dishname) {
    setpopupItems(dishname);
    setshowPopup(true);
  }

  function closepopupHandler() {
    setshowPopup(false);
  }

  let maxItems = 8;
  let allsingleDish = singleDish.map((item, index) => {
    if (index < maxItems) {
      return (
        <CardDish
          menuitem={item}
          showPopupHandler={showPopupHandler}
          index={index}
        />
      );
    }

    return null;
  });

  let allCaegories = menuCatagory.map((items, index) => {
    return (
      <li
        key={index}
        className={items.strCategory === active ? "active" : ""}
        onClick={() => {
          showFilterdDishes(items.strCategory);
        }}
      >
        {items.strCategory}
      </li>
    );
  });

  return (
    <div className="filterd-dishes">
      {showPopup && (
        <PopUp
          closepopupHandler={closepopupHandler}
          popupItems={popupItems}
          allDishes={allMenu}
          singleDish={singleDish}
        ></PopUp>
      )}
      <div className="container">
        <div className="text-center categoy-dish">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            velit quia dolor explicabo illo excepturi dolorum architecto dolorem
            laborum voluptates?
          </p>
        </div>
      </div>
      <div className="filterd-dishes-content">
        <ul>{allCaegories}</ul>
      </div>
      <div className="filterd-dishes-result">
        <ul className="flex flex-wrap gap-25 ">
          {allsingleDish}
          {allsingleDish > 0 || filterdDishes.length > 0 ? (
            showtheseDishes
          ) : (
            <div className="alert">
              <h3>No items Found.</h3>
              <h4>Please Choose another Menu</h4>
            </div>
          )}
        </ul>
        <Pagination
          filterdDishes={filterdDishes}
          //showtheseDishes = {showtheseDishes}
          itemsperPage={itemsperPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
}

export default FilterdDishes;
