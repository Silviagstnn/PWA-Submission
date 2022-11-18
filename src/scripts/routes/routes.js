import Daftar from "../views/pages/daftar";
import Detail from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  '/': Daftar, // default page
  '/daftar': Daftar,
  '/favorite' : Favorite,
  '/detail/:id': Detail,
};
 
export default routes;