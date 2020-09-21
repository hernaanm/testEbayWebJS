const { Given, When, Then } = require('cucumber');

const SearchPage = require('../pageobjects/search.page');

const pages = {
    search: SearchPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open();
});

When(/^I search the item (\w+)$/, (item) => {
    SearchPage.search(item);
});

Then(/^I show the number of results$/, () => {
    console.log('The number of results found is: '+SearchPage.resultsNumber.getText());
});

