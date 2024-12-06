export default function stepsSlider(allSteps) {
    return {
        steps: [],
        currentStep: 0,

        init() {
            for (let i = 0; i < allSteps.length; i++) {
                this.steps.push({
                    id: i,
                    desc: allSteps[i]
                });
            }
        },

        //NOTE - Passe à l'étape suivante et reste sur la même étape si on est à la fin 
        next() {
            if (this.ifLastStep()) {
                return
            }
           this.currentStep++;
        },

        //NOTE - Passe à l'étape précédente et reste sur la même étape si on est au début 
        previous() {
            if (this.isFirstStep()) {
                return
            }
            this.currentStep--;
        },

        //NOTE - Regarde si on est sur la première étape
        isFirstStep() {
            return this.currentStep === 0;
        },

        //NOTE - Regarde si on est sur la dernière étape
        ifLastStep() {
            return this.currentStep === this.steps.length;
        }
    }
}