import geb.spock.GebSpec

class UsTwoSpec extends GebSpec {

    def "As a user, I want to login as a Contributer or an Admin"() {
        given: "Given that I am a user And I am on the Login page"
            //to BcscHomePage
            //Click on Login
        then:
            //at BcscLoginPage
        when: "I enter my credentials correctly "
            //enter login details
            //Click Login
        then: "I am logged into the system" 
        and: "I am redirected to the User List page"  
            //at BcscUserListPage
    }
}
