import geb.spock.GebSpec

class Us4Spec extends GebSpec {

    def "User Story 4: As a Contributer or an Admin, I want to view a paged list of registered users"() {
        given: "that I am an authenticated user Contributer or Admin"
            //to BcscHomePage
            //Click on Login
            //at BcscLoginPage
            //enter login details
            //Click Login
        and: "I am on the Users List page" 
            //at BcscUserListPage
        when: "I view the list of users that is more than 10 in length"  
            //at BcscUserListPageCheck more than 10 users
            
        then: "I can view the first 10 users along with a See More button"
            //check first 10 users
            //check "See more" button
        and: "I can click on the See More button to view the next 10 users in the list"
            //clcik see more
            //check for next 10 users
            //Check for  email, role, and date registered 
    }
}