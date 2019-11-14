# Functional Tests

## Description

These are the functional tests that proof the User Stories to be functional.
The tests need to be run on a local workstation but in the future will have the potential to run inside the pipeline.

## Usage

- Download the GIT repo to your workstation.
- Make sure you have Java installed (Version 8)
- Navigate to the /tests/functional-tests directory and run

The following commands will launch the tests with the individual browsers:

    ./gradlew chromeTest

Alternative commands (might require additional set up):

    ./gradlew chromeHeadlessTest //Will run in pipeline as well
    ./gradlew firefoxTest
    ./gradlew firefoxHeadlessTest //Will run in pipeline as well
    ./gradlew edgeTest //only on windows
    ./gradlew ieTest //Read wiki for set up instructions, only on windows
    ./gradlew safariTest //Only for MacOS, read wiki for instructions.
