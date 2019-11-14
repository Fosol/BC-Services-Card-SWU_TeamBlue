# Code Challenge Notice, Instructions &amp; Rules

Re: [BC Developers' Exchange - BC Services Card Self Service for Broader Public Sector](https://bcdevexchange.org/opportunities/swu/opp-bc-services-card-self-service-for-broader-public-sector) (the &quot;RFP&quot;)

Government Contact: Andrew.L.Sutherland@gov.bc.ca

This notice is dated Wednesday, November 13th, 2019 (the &quot;Notice Date&quot;).

Congratulations - you are a Shortlisted Proponent eligible to participate in the Code Challenge (Step 4 of the evaluation process described on the Evaluation tab of the RFP).

## Rules and Instructions

Please be advised of the following rules and instructions:

1. These code challenge rules and instructions apply only to Shortlisted Proponents and are part of the RFP.
2. Shortlisted Proponents will have no less than two (2) Business Days from the Notice Date to complete the code challenge. The **deadline** to complete the code challenge in accordance with these rules is **5:00 p.m. Pacific Time on Thursday, November 14, 2019** (the &quot;Deadline&quot;).
3. The Shortlisted Proponent&#39;s code challenge submission Deliverable (defined below) must be received by the Province (as provided for by these instructions) and be deposited and located in the applicable Repository before the Deadline, failing which such submission will not be eligible for evaluation and the associated Shortlisted Proponent Proposal will receive no further consideration and such Shortlisted Proponent will be eliminated from the RFP competition.
4. Only the Proponent Resources that were put forward in a Shortlisted Proponent&#39;s RFP Proposal are eligible to participate in the Code Challenge.
5. The Shortlisted Proponent Resources will be sent invites via GitHub to join this private repository.
6. As of the Notice Date, the code challenge issue has been created in this private repository, under the &quot;BCDevExchange-CodeChallenge&quot; organization.
7. Shortlisted Proponents may direct clarifying questions to Andrew.L.Sutherland@gov.bc.ca. Any such **questions** must be received **before 12:00 p.m. Pacific time on Thursday, November 14, 2019** (the &quot;Code Challenge Questions Deadline&quot;).
8. The Province reserves the right to amend this notice before or after the Closing Time, including changing the Deadline or the Code Challenge Questions Deadline upon notice to all Shortlisted Proponents.
9. The Shortlisted Proponent must complete all of the following tasks and the Deliverable and as such they must be deposited and received in the applicable Repository by the Province in the form specified by this notice before the Deadline:
   1. Complete all code changes required to complete the code challenge (the &quot;Deliverable&quot;); and,
   2. Attach an Apache License 2.0 to the Deliverable.
10. The rules and instructions set forth in this notice are in addition to any rules, terms and conditions set forth elsewhere in the RFP.

# Deliverable

### Introduction
This code challenge asks you to build a web application for a role-based authentication system.  You need to design and implement the front-end/UI, the back-end/API, and the database for this application.  This system will need to support user login using a conventional means of authentication (e.g. OAuth 2.0, OpenID Connect, etc.) along with a role-based permissions system consisting of a minimal set of roles (described further below).  You can use any mainstream Identity Provider (e.g. GitHub, Google, Facebook, Microsoft) or a email/password combination stored in the database.

## Technical Requirements

Solutions must be developed using technology and architectural patters that demonstrates modern best practices. The solution may leverage open source components. The solution must not include proprietary components.

Solutions must be deployed to a Docker container platform accessible to the Province (e.g.: OpenShift.io, Azure, Amazon Web Services, etc.). The solution must remain running and accessible from 5:00pm Thursday, November 14. until 5:00 p.m. Pacific Time on Monday, November 18.

Solutions must be re-deployable using an automated deployment tool (e.g.: Jenkins, Azure DevOps, etc.). Configuration files for that tool must be committed to the private repository (such that the evaluators can just run the deployment as is).

## User Stories
All of the following user stories must be completed. They may be completed in any order. 

**Assumptions**
- There are 3 different types of users who will use the system:
  - **Guest**: users who are not authenticated
  - **Contributor**: users who are authenticated with the `contributor` role
  - **Admin**: users who are authenticated with the `administrator` role

### #1
As a user, I want to register with the application as a **Contributor**

**Given** that I am a user
**And** I’m in the &quot;Sign Up&quot; page
**When** I specify my sign-in credentials via the available Identity Provider
**Then** a new Contributer profile is created in the system
**And** I am redirected to the &quot;Profile&quot; page where I can either verify the details retreived from the Identity Provider profile or specify them myself.

*Note: User details should at a minimum, consist of first name, last name, and email.*

### #2
As a user, I want to login as a **Contributer** or an **Admin**

**Given** that I am a user
**And** I am on the &quot;Login&quot;
**When** I enter my credentials correctly
**Then** I am logged into the system
**And** I am redirected to the &quot;User List&quot; page

### #3
As a **Contributer** or an **Admin**, I want to view a paged list of registered users

**Given** that I am an authenticated user (Contributer or Admin)
**And** I am on the &quot;Users List&quot; page
**When** I view the list of users that is more than 10 in length
**Then** I can view the first 10 users along with a &quot;See More&quot; button
**And** I can click on the &quot;See More&quot; button to view the next 10 users in the list

*Note: Each user in the list should include an email, role, and date registered for that user*

### #4
As an **Admin**, I want to view the details for a particular user

**Given** that I am an authenticated Admin user
**When** I am in the &quot;Users List&quot;
**Then** I should be able to select a user
**And** I am redirected to a &quot;User Details&quot; page
**And** I can view the details for that user

### #5
As an **Admin**, I want to edit the details for a particular user

**Given** that I am an authenticated Admin user
**When** I am in the &quot;Users List&quot;
**Then** I can select a user for editing
**And** I am redirected to a &quot;Edit User Details&quot; page
**And** I can edit the details for that user and save my changes

### #6
As an **Admin**, I want to delete a particular user profile from the system

**Given** that I am an authenticated Admin user
**When** I am in the &quot;Users List&quot;
**Then** I can select a user for deletion
**And** I am prompted for confirmation of deletion
**And** the user profile for that user is deleted from the list when I select &quot;OK&quot;

*Note: Deleting a user should remove their entire profile and require that user to re-register prior to signing back in*

### #7
As a **Contributor** or an **Admin**, I want to log out

**Given** that I am an authenticated Contributor or Admin user
**When** I select the &quot;Logout&quot; button
**Then** I will be logged out immediately
**And** I will be redirected to the &quot;Login&quot; page



## Additional Notes

* A non-authenticated user should only be able to view the &quot;Login&quot; page
* Note that security engineering is a portion of the evaluation criteria.  While no specific constraints have been prescribed, we are looking for best practices around security and privacy to be followed.
* The Admin account can be pre-specified.  That is, there is no requirement for Admin account sign-up or creation in this challenge and only Contributer account registration is required.
* Please handle alternative flows to the above user stories as required.  For example, in User Story #2, entering incorrect credentials should be handled in a graceful manner.


## Submission

1. Include all artifacts that are required to build and deploy the solution including code, Dockerfiles, other configuration files, etc.
2. Include all artifacts that would typically be included in the definition of done including demonstration of testing (unit testing is sufficient).
3. Include a README file with instructions to access the deployed solution and any instructions required to redeploy the solution.
4. Submit artifacts by way of a pull request to the private repository. All artifacts must be committed and a PR issued **before 5:00 p.m. Pacific time on Thursday, November 14, 2019**.
5. Attach an Apache License 2.0 to your pull request.

# Evaluation

| Criteria | Max Points |
| --- | --- |
| Meets requirements | 7 |
| Architecture and technical design | 3 |
| Code quality and maintainability | 3 |
| Security engineering              | 2          |
|                                   |            |
| Total                             | 15         |
