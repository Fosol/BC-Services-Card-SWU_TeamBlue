import geb.spock.GebSpec



class Us1Spec extends GebSpec {

    def "As a user, I want to register with the application as a Contributor"() {
        given: "that I am a user and I am in the Sign Up page"
            //to BcscHomePage
            //Click on Login
        then:
            //at BcscLoginPage
        when: "I specify my sign-in credentials via the available Identity Provider"
            //enter login details
            //Click on Register

        then: "a new Contributer profile is created in the system"
        and: "I am redirected to the Profile page where I can either verify the details retrieved from the Identity Provider profile or specify them myself."
            //at BcscUserProfilePage
            // Verify or enter information
            // verify first name, last name, and email
            //Click Save
    }
}
