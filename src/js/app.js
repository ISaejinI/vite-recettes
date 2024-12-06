import Alpine from "alpinejs";
import headFunc from "./modules/header";
window.alpine = Alpine;

Alpine.data('headFunc', headFunc);

Alpine.start();
