//utility.ts
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://webmaps.te2.io"; //return desired url
        else if (envi == 'staging')
            return "https://stage.webmaps.te2.io";
        else if (envi == 'qa')
            return "https://qa.webmaps.te2.io";
    }
}