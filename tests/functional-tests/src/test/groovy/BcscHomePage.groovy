import geb.Page

class BcscHomePage extends Page {

    static at = { title == "React App" }
    static url = ''
  
    static content = {
        loginButton { $("#root > div > div.home > div > div > div:nth-child(1) > a") }
    }
}
