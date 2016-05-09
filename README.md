# Project Overview

As a part of Udacity's FEND program, this project is about completing test suites for a web-based application that reads RSS feeds. The [original incomplete project](https://github.com/udacity/frontend-nanodegree-feedreader) already included [Jasmine](http://jasmine.github.io/) and the first test suite. The aim is to complete all the testing suites that makes sure the application behaves as desired.

## Getting it running
#### 1. Clone or download the repository into your working directory
  ```bash
  $> cd /path/to/your-project-folder
  $> git clone https://github.com/udacity/frontend-nanodegree-feedreader.git
  ```

#### 2. Open index.html file on your browser

## Project Preparations
1. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Checked how the application actually works on my browser.
3. Examined the application's HTML(*./index.html*), CSS(*./css/style.css*) and JavaScript(*./js/app/js*) files in detail to understand the structure of the application.
4. Read [Jasmine documentaiton](http://jasmine.github.io/2.1/introduction.html) for version 2.1 as this version is used for the application.

## Test Suites Description
#### Test Suite 1: RSS Feeds
1. Checks that the allFeeds object is defined and not empty.
2. Checks that each feed has a non-empty URL defined.
3. Checks that each feed has a non-empty name defined.

#### Test Suite 2: The menu
1. Checks that the menu slider is hidden by default.
2. Checks that the menu slider properly shows up when the menu icon is clicked.
3. Checks that the menu slider is hidden when the menu icon is clicked again.

#### Test Suite 3: Initial Entries
1. Checks that the loadFeed properly loads the first feed ('Udacity Blog') by checking that there is at least one .entry element within the .feed container.

#### Test Suite 4: New Feed Selection
Before each test cases, initially the first feed is displayed and then swithced to the prospective feeds.
1. Checks that the content changes and the title is updated when 'CSS Tricks' feed is loaded.
2. Checks that the content changes and the title is updated when 'HTML5 Rocks' feed is loaded.
3. Checks that the content changes and the title is updated when 'Linear Digressions' feed is loaded.
4. Checks that the content changes and the title is updated when 'CNET News' feed is loaded.
5. Checks that the content changes and the title is updated when 'TechCrunch Startups' feed is loaded.

## References and Resources
*  [Required Project Assets](https://github.com/udacity/frontend-nanodegree-feedreader)
*  [Jasmine Documentation](http://jasmine.github.io/2.1/introduction.html)
*  [Udacity's JavaScript Testing course](https://www.udacity.com/course/javascript-testing--ud549)

## Contact
### Kyle Kim
* e-mail: kylekaykim@gmail.com