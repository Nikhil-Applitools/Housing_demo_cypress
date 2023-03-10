describe("AppTest", () => {
    it(`Housing web test - changes`, function () {
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

        cy.log("javascript start")
        cy.window().then((win) => {
           win.eval("document.querySelector('#innerApp > div.css-79elbk > header > a > img').remove();");
        });
        cy.window().then((win) => {
           win.eval("document.querySelector('#pinCodes > section > div > div > div.slider-inner.css-7nnslv > div > div:nth-child(1)').remove();");
        });
        cy.window().then((win) => {
           win.eval("document.querySelector('#innerApp > div.css-79elbk > header > div > a.css-1pszxz1').innerText='Applitools'");
        });
        cy.log("javascript end")


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
        cy.window().then((win) => {
           win.eval("document.querySelector('#innerApp > div.css-79elbk > header > div > div').remove();");
        });
        cy.window().then((win) => {
           win.eval("document.querySelector('#innerApp > div.css-uhji4g > div > div > div.search-wrap.css-cryaei > div > div.css-126ysyq > div > div > input').style.background='cyan';");
        });

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
        cy.log('listing page')
        cy.wait(5000);
        cy.window().then((win) => {
           win.eval("document.querySelector('#app-root > div > div > div > div.login-desktop-child-container > div.login-form-container > div > div > div.login-form > div > div.btn-cont.not-fixed > button').setAttribute('style','position:relative; bottom:60px');");
        });
        cy.window().then((win) => {
           win.eval("document.querySelector('#app-root > div > div > div > div.login-desktop-child-container > div.login-celeb-hook-container > div.login-steps-point-container > div:nth-child(1)').innerHtml='Login with your email address'");
        });

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
