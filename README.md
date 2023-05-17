[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/8ehd_viW)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10904802&assignment_repo_type=AssignmentRepo)
# Ojemba Assessment Spring 2023

Welcome to the Ojemba Assessment 😊

In the next 3 hours, we want you to take on a challenge. This challenge will be 100% Javascript. Please use the link we provided to access the repo.

## Prerequesites

You need to have installed a Node.js instance (version 14 or higher). Try `node --version` in your terminal to check the version of your Node.js installation. You can install Node.js from
[nodejs.org/en/download](https://nodejs.org/en/download).

After having cloned the repository onto your machine, please run the following command in the terminal:
`npm install`. This command will install every dependency your repository needs. After this, you are ready to start coding!

### Structure of the challenge

The challenge is divided in 3 parts:

1. Create a password validator
2. Create a penalty point calculator for passwords
3. Improve 3 functions code

### Test Driven Development

For the 2 first steps we wrote some jest tests and to check if your code is working properly we will run "npm test" and see which tests pass and which fail. Feel free to run this command yourself to check your solutions. Run `npm run test:watch` to get live update on passing tests while you code.

## 1. Password Validator

We have provided a function `isValidPassword` in the `passwordValidation.js` file. This function receives a password and your job is to check if it is a valid one or not.

A password is valid when it satisfies the following criteria

- The password is exactly 10 digits or characters;
- The password is composed by digits and numbers;
- The password does **not** contain special characters like `@`, `/`, `#`, etc;
- The password contain a mix of uppercase and lowercase characters;
- Whenever we have a sequence of numbers, these can not be sequences of directly ascending or descending digits, ex: it would fail for `a12345678A` but not for `a88765432A`;
- it is not a forbidden password (in the index.js file we provide an array with the forbidden passwords);
- it consists of at least 4 different digits/characters, e.g. `BBBBcc1111` is not allowed, since it consists of only 3 types of symbols: `B`, `c` and `1`;

## 2. Penalty Points Calculator

In the file `passwordPenalty.js` you have to implement a second function called `penaltyPoints`. This function receives a password code and returns the penalty points awarded to that password.

Penalty rules:
Sequences of characters are awarded penalty points in the following order:

- Sequence of 2 characters/numbers are awarded 1 penalty point
- Sequences of 3 or more characters/numbers are awarded 2 penalty points
  Examples:

1. The password `2hT62g33u7` has 1 penalty point for the sequence of `3`'s;
2. The password `yh53GGf7h6` has 1 penalty point for the sequence of `G`'s;
3. The password `hg6666WT5s` has 2 penalty points for the sequence of `6`'s;
4. The password `hg6WTTT5ms` has 2 penalty points for the sequence of `T`'s;

## 3. Improve functions code

In the files `improvements-1.js`, `improvements-2.js`, `improvements-3.js` you will find 3 functions. The idea here is to have you improving these functions code in whatever way you feel is right. Below we give some tips to keep in mind.

Improvements could be:

1. Easy to read function
2. Not too long function
3. Fault tolerant

Please do not remove the `export default function ...`, since it is required for testing.

## Submit your solution

You can submit your solution at any time before the deadline by just commiting to the remote git repository. Don't forget to push. It is not required to structure yoru commits, nor do you have to add a structured commit message. You can push as many commits as you like until the deadline is over.

## IMPORTANT NOTES AND TIPS

- Feel free to create auxiliar functions in case you want to;
- You're allowed so search on Google (but try to understand the solution before copy and paste it and choose the right source)
- Have fun 👍
