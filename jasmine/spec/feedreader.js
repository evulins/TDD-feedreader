/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object
         * and checks if each feed has a URL defined and that the URL
         * is not empty.
         */
        it('have feeds with own not-empty URL defined', function() {
            for (var feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);
            }
        });


        /* This test loops through each feed in the allFeeds object
         * and checks if each feed has a name defined and that the
         * name is not empty.
         */
        it('have feeds with own not-empty name defined', function() {
            for (var feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);
            }
        });
    });

    /* This second test suite checks the behaviour and functionality
     * associated with the menu slider.
     */
    describe('The menu', function() {
        var body = $('body');

        // This test checks if the menu slider is hidden by default.
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* This sub-test suite checks if the menu slider properly
         * hides and displays when the hamberger icon is clicked.
         */
        describe('icon is clicked', function() {
            // The hamberger icon
            var menuIcon = $('.menu-icon-link');
            
            // Prior to each test case, the menuIcon is toggled.
            beforeEach(function() {
                menuIcon.click();
            });

            /* This test checks if the menu slider is displayed
             * properly after the menuIcon is clicked after loading.
             * As checked in earlier test, the menu slider is hidden
             * by default.
             */
            it('and the menu is displayed properly', function() {
                expect(body.hasClass('menu-hidden')).toBe(false);
            });

            /* This test checks if the menu slider that had been
             * opened, closes properly when the menuIcon is clicked.
             */
            it('and the menu is hidden properly', function() {
                expect(body.hasClass('menu-hidden')).toBe(true);
            });
        });
    });

    /* This third test suite checks if the initial data is loaded
     * properly when the application is initialized.
     */
    describe('Initial Entries', function() {
        var feed = $('.feed');

        /* Before testing, make sure that the initial data is loaded
         * properly using the loadFeed function. The done function is used
         * to signal the completion of the asynchronous loadFeed function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This test checks that there is at least one .entry element
         * within the .feed container after finishing loading data using
         * the loadFeed function.
         */
        it('has at least a single entry after loadFeed', function() {
            expect(feed.has('.entry').length).toBeGreaterThan(0);
        });
    });

    /* This last test suite checks if the content and the title actually
     * changes when a new feed is loaded by the loadFeed function.
     */
    describe('New Feed Selection', function() {
        var oldFeedTitle,
            oldEntryTitles,
            newFeedTitle,
            NewEntryTitles,
            feedNumber = 1;

        /* Before each test case, first load the 'Udacity Blog' feed which is
         * the initial feed and sets the old feed title and entry titles to
         * those of 'Udacity Blog'. Then it loads the new feeds using the
         * loadFeed function. The done function is used to signal the completion
         * of the loadFeed function which is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedTitle = $('.header-title').text();
                oldEntryTitles = $('.feed').find('h2').text();
                loadFeed(feedNumber, done);
            })
        });

        // After each test case, move on to the next feed.
        afterEach(function() {
            feedNumber += 1;
        });

        // After finishing all the tests, reload the initial feed.
        afterAll(function(done) {
            feedNumber = 0;
            loadFeed(0, done);
        });

        /* This test checks if when the second feed (feedNumber 1) is loaded
         * the title of the feed and the titles of the entry changes. Also, it
         * checks if the new title matches the second feed's title in allFeeds
         * which is 'CSS Tricks'.
         */
        it('changes content and updates the feed title for CSS Tricks', function() {
            newFeedTitle = $('.header-title').text();
            NewEntryTitles = $('.feed').find('h2').text();
            expect(feedNumber).toBe(1);
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedTitle).toBe(allFeeds[feedNumber].name);
            expect(NewEntryTitles).not.toBe(oldEntryTitles);
        });

        /* This test checks if when the third feed (feedNumber 2) is loaded
         * the title of the feed and the titles of the entry changes. Also, it
         * checks if the new title matches the third feed's title in allFeeds
         * which is 'HTML5 Rocks'.
         */
        it('changes content and updates the feed title for HTML5 Rocks', function() {
            newFeedTitle = $('.header-title').text();
            NewEntryTitles = $('.feed').find('h2').text();
            expect(feedNumber).toBe(2);
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedTitle).toBe(allFeeds[feedNumber].name);
            expect(NewEntryTitles).not.toBe(oldEntryTitles);
        });

        /* This test checks if when the forth feed (feedNumber 3) is loaded
         * the title of the feed and the titles of the entry changes. Also, it
         * checks if the new title matches the forth feed's title in allFeeds
         * which is 'Linear Digressions'.
         */
        it('changes content and updates the feed title for Linear Digressions', function() {
            newFeedTitle = $('.header-title').text();
            NewEntryTitles = $('.feed').find('h2').text();
            expect(feedNumber).toBe(3);
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedTitle).toBe(allFeeds[feedNumber].name);
            expect(NewEntryTitles).not.toBe(oldEntryTitles);
        });

        /* This test checks if when the fifth feed (feedNumber 4) is loaded
         * the title of the feed and the titles of the entry changes. Also, it
         * checks if the new title matches the fifth feed's title in allFeeds
         * which is 'CNET News'.
         */
        it('changes content and updates the feed title for CNET News', function() {
            newFeedTitle = $('.header-title').text();
            NewEntryTitles = $('.feed').find('h2').text();
            expect(feedNumber).toBe(4);
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedTitle).toBe(allFeeds[feedNumber].name);
            expect(NewEntryTitles).not.toBe(oldEntryTitles);
        });

        /* This test checks if when the sixth feed (feedNumber 5) is loaded
         * the title of the feed and the titles of the entry changes. Also, it
         * checks if the new title matches the sixth feed's title in allFeeds
         * which is 'TechCrunch Startups'.
         */
        it('changes content and updates the feed title for TechCrunch Startups', function() {
            newFeedTitle = $('.header-title').text();
            NewEntryTitles = $('.feed').find('h2').text();
            expect(feedNumber).toBe(5);
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedTitle).toBe(allFeeds[feedNumber].name);
            expect(NewEntryTitles).not.toBe(oldEntryTitles);
        });
    });   
}());
