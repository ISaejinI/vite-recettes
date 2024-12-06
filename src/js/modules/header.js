export default function headFunc() {
    return {
        isActive: false,
        iconName: 'menu',
        totRecipes: 50,

        toggleMenu(){
            this.isActive =! this.isActive;
            this.iconName = this.isActive?'menu-alt-right':'menu';
        },

        recipesCount(){
            return this.totRecipes;
        }
    }
}