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
            console.log(datas.recipes);
        },

        displayDetails(recipeId) {
            this.idSelectedRecipe = recipeId;
        },

        isDetailsActive(currentRecipe) {
            return this.idSelectedRecipe == currentRecipe;
        },

        closeDetails() {
            this.idSelectedRecipe = '';
        }
    }
}