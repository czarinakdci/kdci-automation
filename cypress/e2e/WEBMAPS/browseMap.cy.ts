import { GENERAL } from '../../support/utils/webmap_selectors/mapSelector';
import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
const newurl = new Utility().getBaseUrl();

describe('Verify that Venue Map is displayed and loaded as expected', () => {
    it('Verify Spinner is displayed as expected', () => {
        cy.visit('/?title=Mammoth%20Mountain%20Resort&listFanout=true&tooltipAtZoomLevel=16&afterAnimationLat=37.65002562372379&afterAnimationLong=-118.98612851376615&afterAnimationZoom=18&animationActive=true&beforeAnimationZoom=10&beforeRotation=180&categories=All&enableMarkerCluster=true&leafletMapOpacity=.5&mapBgColor=%23000000&mapId=13&mapType=venue&maxZoomLevel=19&minZoomLevel=4&rotation=180&stickers=webMapStickersMccoyTree,webMapStickers4,webMapStickers3,webMapStickersMamLogo&timeInMs=1000&venueId=ALT_MAM&venueMapOpacity=1&zoomLevel=14&zoomOnCenter=18&zoomType=fly&maxZoomClusterFan=true&disableCache=true&resetZoom=13&enableFeedback=true')
        { timeout: 30000 }; //use url variable
        cy.title().should('eq', GENERAL.pageTitle)

        cy.get(GENERAL.spinner)
          .should('be.visible')
      });
      
      it('Verify Header elements is displayed as expected', () => {
        cy.visit('/?title=Mammoth%20Mountain%20Resort&listFanout=true&tooltipAtZoomLevel=16&afterAnimationLat=37.65002562372379&afterAnimationLong=-118.98612851376615&afterAnimationZoom=18&animationActive=true&beforeAnimationZoom=10&beforeRotation=180&categories=All&enableMarkerCluster=true&leafletMapOpacity=.5&mapBgColor=%23000000&mapId=13&mapType=venue&maxZoomLevel=19&minZoomLevel=4&rotation=180&stickers=webMapStickersMccoyTree,webMapStickers4,webMapStickers3,webMapStickersMamLogo&timeInMs=1000&venueId=ALT_MAM&venueMapOpacity=1&zoomLevel=14&zoomOnCenter=18&zoomType=fly&maxZoomClusterFan=true&disableCache=true&resetZoom=13&enableFeedback=true')
      { timeout: 30000 }; //use url variable
        cy.get(GENERAL.header, { timeout: 100000 })
          .should('be.visible')

        cy.get(GENERAL.headerTitle)
        .should('be.visible')

        cy.get(GENERAL.hamburgerMenu)
        .should('be.visible')

        cy.get(GENERAL.searchIcon)
        .should('be.visible')

      });

      it('Verify zoom, location, reset view, feedback buttons are displayed as expected', () => {
        cy.visit('/?title=Mammoth%20Mountain%20Resort&listFanout=true&tooltipAtZoomLevel=16&afterAnimationLat=37.65002562372379&afterAnimationLong=-118.98612851376615&afterAnimationZoom=18&animationActive=true&beforeAnimationZoom=10&beforeRotation=180&categories=All&enableMarkerCluster=true&leafletMapOpacity=.5&mapBgColor=%23000000&mapId=13&mapType=venue&maxZoomLevel=19&minZoomLevel=4&rotation=180&stickers=webMapStickersMccoyTree,webMapStickers4,webMapStickers3,webMapStickersMamLogo&timeInMs=1000&venueId=ALT_MAM&venueMapOpacity=1&zoomLevel=14&zoomOnCenter=18&zoomType=fly&maxZoomClusterFan=true&disableCache=true&resetZoom=13&enableFeedback=true')
      { timeout: 30000 }; //use url variable
        cy.get(GENERAL.resetView, { timeout: 30000 })
        .should('be.visible')

        cy.get(GENERAL.zoomInToggle)
        .should('be.visible')

        cy.get(GENERAL.zoomOutToggle)
        .should('be.visible')

        cy.get(GENERAL.locationToggle)
        .should('be.visible')

        cy.get(GENERAL.compass)
        .should('be.visible')

        cy.get(GENERAL.feedbackButton)
        .should('be.visible')
      });

      it('Verify that when I click the header title, dropdown option of maps should be displayed', () => {
        // cy.visit('/?title=Mammoth%20Mountain%20Resort&listFanout=true&tooltipAtZoomLevel=16&afterAnimationLat=37.65002562372379&afterAnimationLong=-118.98612851376615&afterAnimationZoom=18&animationActive=true&beforeAnimationZoom=10&beforeRotation=180&categories=All&enableMarkerCluster=true&leafletMapOpacity=.5&mapBgColor=%23000000&mapId=13&mapType=venue&maxZoomLevel=19&minZoomLevel=4&rotation=180&stickers=webMapStickersMccoyTree,webMapStickers4,webMapStickers3,webMapStickersMamLogo&timeInMs=1000&venueId=ALT_MAM&venueMapOpacity=1&zoomLevel=14&zoomOnCenter=18&zoomType=fly&maxZoomClusterFan=true&disableCache=true&resetZoom=13&enableFeedback=true'); //use url variable
        // cy.title().should('eq', GENERAL.pageTitle)
        // cy.get(GENERAL.spinner)
        // .should('be.visible')
        cy.get(GENERAL.headerTitleOption, { timeout: 50000 }).should('be.visible');
        cy.contains('expand_more').click()
        cy.get(GENERAL.headerMapList, { timeout: 50000 }).should('be.visible');
      });
});