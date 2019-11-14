_Hello Team,_

_As questions come in to Andrew Sutherland, I will keep this file updated with a running list of the questions that are asked (anonymized, of course) along with Andrew's responses — so that all teams have access to the same information._

_Cheers,_

_Mark Wilson_

---

# Questions and Answers

_Questions in italics_

**Answers in bold**

---

_As in acceptance criteria #3, Do we need to show "admin" user in the user list or part of the pagination user list?_

**It’s fine if you show the admin in the user list, but it’s not a requirement.**

---

_As we are planning to use AWS Codepipeline, it has its own challenges and requires repository or organization access to set-up webhooks and was denied last time and we did setting-up another private repository to run the setup in AWS. So would like to request, if we are allowed to separate private repository to pull changes from code challenge repo and run the solution._

**That’s definitely okay if you want to work in a private repo and then do a PR into the challenge repo at the end.  Hopefully that clarifies for you - let me know if not.**

---


_The instructions read:_

_Configuration files for that tool must be committed to the private repository (such that the evaluators can just run the deployment as is)…and in the Q&A section there’s already a note that we can run off our own private repository if we want deploy permissions (clone tokens, etc)–something we must have because we’re being scored on presence of a committed deployment config._

_No problem, we’ve paid $$ to github and have no objection to using our own CI/CD & Deployment resources for the completion of the challenge. However, any configuration we commit to our own repository will not be able to be run as-is following a pull request since tokens, secrets and privileges will have changed and a re-initialization from repository-committed configuration will be necessary._

_As a result, we’d like to request the evaluators use the actual repo we’ll be developing in to assess our work. Alternatively, please enable CircleCI on the BCDevExchange-CodeChallenge organization so we can verify the CI/CD pipeline we’re being scored on actually functions in your environment._

**Your point is a valid one, and the evaluators will have no problem evaluating against the repo of your choice.  For posterity and record-keeping, can you still issue a PR against the challenge repo?  Just include a note in your readme with a link to where your hosted application is deployed from.  I will ensure that the evaluation team is aware.**

---
_We have our own internal, secure CI/CD pipeline that is not accessible in github and therefore cannot be accessed in the way that is outlined in the third question above. In this approach, the evaluators would not be able to see how the CI/CD pipeline itself works. Is this sufficient? Or do the evaluators  expect to be able to see the CI/CD pipeline?_

**The evaluators do not need to be able to access your CI/CD directly.  As long as we can see your configurations and understand how your CI/CD would work if we were to to redeploy your application, that’s fine.**

---

_We have made a number of assumptions in order to move forward within the time constraints. We intend to provide this as a document within our project at the end of the challenge. Does this meet the expectations of the evaluators?_

**Assumptions are fine, as long as you fulfill the user stories specified in the instructions.  If you think you may be making an assumption that could change how those user stories function, you should clarify with me first.  It’s also a good idea to (briefly) document any major assumptions you made in your readme to avoid any misunderstandings in the evaluation.**

---

_There are a number of places where we have made specific decisions based on the scope, timeframe, etc of this challenge. There are, therefore, opportunities to implement best practices, enhancements, etc which are not possible within the time provided. Would it be acceptable to include a document of these, e.g. as a product backlog, with documentation submitted at the end of the challenge?_

**Absolutely, this is okay - we understand there isn’t time for everything.  I would advise that you focus on completing the main user stories first, then work on any enhancements or refactoring.  A document outlining your proposed enhancements  is fine to include, but not a requirement.**

---
