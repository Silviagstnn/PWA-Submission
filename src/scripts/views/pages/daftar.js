import TheRestoDbSource from "../../data/restodb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Daftar= {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restorant</h2>
        <div id="retaurants" class="restaurants">
        </div>
      </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await TheRestoDbSource.RestoList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};
 
export default Daftar;