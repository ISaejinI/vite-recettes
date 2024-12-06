export default function recipes(fileJson) {
    return {
        recipes: [],

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
        }
    }
}