const Page = require('./page');

class SearchPage extends Page {

    get inputSearch () { return $('#gh-ac') }
    get btnSubmit () { return $('#gh-btn') }
    get resultsNumber() { return $('//*[@id="mainContent"]/div[1]/div/div[2]/div/div[1]/h1/span[1]')}


    search (item) {
        this.inputSearch.setValue(item);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open();
    }
}

module.exports = new SearchPage();
