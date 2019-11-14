# Testing Instructions

## Description

Most of the tests for this project are meant to be run from the developer workstation.
However, the Unit tests will be part of the pipeline and will be executed whenever the code is rebuilt.

## API Tests

The API Tests will be executed by using Postman. Postman needs to be installed on the workstation, the application can be downloaded here: https://www.getpostman.com/downloads/

The test definition file from Postman can also be used by the headless testing complement to Postman called Newman (https://www.npmjs.com/package/newman), newman will also allow these API Tests to be implemented in the pipeline.

## Functional Tests

For our functional tests we are deploying BDDStack (https://github.com/BCDevOps/BDDStack). BDDStack tests the application based on the defined user stories. please see the README in the functional-tests directory for instructions on how to run these tests.

BDDStack tests also have the potential to run as part of the pipeline. For this implementation we'll run these tests on the developer's workstation.

## Unit Tests

Devin to fill in

## Security Tests

Our security test has been run using OWASP ZAP (https://github.com/zaproxy/zaproxy/wiki/Downloads). Once the application is installed, retrieve the settings file from the zap directory and run the scan. Exported reports will be stored in the zap directory.

## Accessibility Scan

Scans of the pages were executed by teh Axe plugin in the chrome browser, the result files have been stored in the accessibility folder.
