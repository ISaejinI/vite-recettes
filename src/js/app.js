import Alpine from "alpinejs";
import headFunc from "./modules/header";
import recipes from "./modules/recipes";

window.alpine = Alpine;

Alpine.data('headFunc', headFunc);
Alpine.data('recipes', recipes);

Alpine.start();
