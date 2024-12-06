export default function recipes(fileJson) {
    return {
        recipes: [],
        idSelectedRecipe: '',
        difficulties: [],
        filteredRecipes: [],
        diff: '',
        nbRecipes: '',

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
                this.getDificulty(datas);
            })
        },

        //NOTE - Insertion des données dans la variable
        setData(datas) {
            this.recipes = this.filteredRecipes = datas.recipes;
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
        },

        //NOTE - Récupération des difficultées
        getDificulty(datas) {
            datas.recipes.forEach(el => {
                if (!this.difficulties.includes(el.difficulty)) {
                    this.difficulties.push(el.difficulty);
                }
            });
        },

        updateRecipes() {
            if (this.diff === '') {
                this.filteredRecipes = this.recipes
            } else {
                this.filteredRecipes = this.recipes.filter((filter) => filter.difficulty == this.diff)
            }
            this.nbRecipes = this.filteredRecipes.length
        }
    }
}