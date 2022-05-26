import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^G.*$/, async function() {
  await browser.url("https://www.google.com")
  await browser.pause(1000)
})
When(/^Search with (.*)$/, async function (searchitem) {
    console.log(`search item: ${searchitem}`);
    let elem = await $(`[name=q]`)
    await elem.setValue(searchitem)
    await browser.keys("Enter")
})
Then(/^Click on .*$/, async function () {
    let elem = await $(`<h3>`)
    elem.click()
})
Then(/^URL should match (.*)/, async function (ExpectedURL) {
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})
