export default function recipes(fileJson) {
    return {
        recipes: [],
        idSelectedRecipe: '',

        //NOTE - Récupére les données à l'initialisation d'Alpine
        async init() {
            this.getRecipes(fileJson);
        },

        //NOTE - Récupération des données
        getRecipes(fileData) {
            fetch(fileData)
            .then(response => response.json())
            .then(datas => {
                this.setData(datas);
            })
        },

        //NOTE - Insertion des données dans la variable
        setData(datas) {
            this.recipes = datas.recipes;
            this.totRecipes = this.recipes.length;
        },

        //NOTE - Définition de la recette sélectionnée
        displayDetails(recipeId) {
            this.idSelectedRecipe = recipeId;
        },

        //NOTE - Ne s'affiche que si la recette sélectionnée est la même que la recette actuelle
        isDetailsActive(currentRecipe) {
            return this.idSelectedRecipe == currentRecipe;
        },

        //NOTE - Réinitialise l'id de la recette sélectionnée
        closeDetails() {
            this.idSelectedRecipe = '';
        }
    }
}