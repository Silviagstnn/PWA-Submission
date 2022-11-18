import TheRestoDbSource from "../../data/restodb-source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
    async render() {
      return `
      <div id="retaurants" class="restaurants">
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestoDbSource.detailResto(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    },
  };
   
export default Detail;