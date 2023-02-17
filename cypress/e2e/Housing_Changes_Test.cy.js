describe("AppTest", () => {
    it(`Housing web test - baseline`, function () {
        // Navigate to the url we want to test
        cy.visit('https://housing.com/');
        cy.viewport(2500, 1200);
        cy.wait(5000);
//        cy.scrollTo('bottom');
//        cy.log("home page")

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Housing',
            testName: 'Housing.com visual test using cypress and applitools visual grid',
        })

        //Checking home page
        cy.eyesCheckWindow({
            tag: "Home page",
            target: 'window',
            matchLevel: 'Strict',
            fully: true,
            lazyLoad:{},
            scriptHooks: {
                beforeCaptureScreenshot: "document.querySelector('html').style.height='auto';document.querySelector('html').style.overflow='auto'"
            },
            layoutBreakpoints: [500,1000],
        });


        cy.get('#innerApp > div.css-6yl0sf > div > div > div.search-wrap.css-cryaei > nav > a.search-tab.css-167vrx2').click();
        cy.log("commercial page")
        cy.wait (5000);
        //cy.scrollTo('bottom');

        //Checking Commercial page
        cy.eyesCheckWindow({
            tag: "Commercial page",
            target: 'window',
            matchLevel: 'Strict',
            fully: true,
            lazyLoad:{},
            scriptHooks: {
                beforeCaptureScreenshot: "document.querySelector('html').style.height='auto';document.querySelector('html').style.overflow='auto'"
            }
        });

        cy.get('#innerApp > div.css-79elbk > header > div > a.css-ok4orp').click()
        //cy.get('#innerApp > div.css-79elbk > header > div > a.css-1pszxz1').click()
        cy.log('listing page')
        cy.wait(5000);
        //Checking Listing page
        cy.eyesCheckWindow({
             tag: "Listing page",
             target: 'window',
             matchLevel: 'Layout',
             fully: true,
             scriptHooks: {
                 beforeCaptureScreenshot: "document.querySelector('html').style.height='auto';document.querySelector('html').style.overflow='auto'"
             }
        });

        // close on eyes and display the results
        cy.eyesClose()
    });
});
