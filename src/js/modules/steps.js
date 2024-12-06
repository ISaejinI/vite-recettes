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

        next() {
            if (this.ifLastStep()) {
                return
            }
           this.currentStep++;
        },

        previous() {
            if (this.isFirstStep()) {
                return
            }
            this.currentStep--;
        },

        isFirstStep() {
            return this.currentStep === 0;
        },

        ifLastStep() {
            return this.currentStep === this.steps.length;
        }
    }
}