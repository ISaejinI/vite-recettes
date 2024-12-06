import Alpine from "alpinejs";
import headFunc from "./modules/header";
import recipes from "./modules/recipes";
import stepsSlider from "./modules/steps";

window.alpine = Alpine;

Alpine.data('headFunc', headFunc);
Alpine.data('recipes', recipes);
Alpine.data('stepsSlider', stepsSlider);

Alpine.start();
