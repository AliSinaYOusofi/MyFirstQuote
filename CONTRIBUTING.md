[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Contributing to Devly Advice

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How can I contribute

**NOTE:** If you don't have git installed, [install it here](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git).

### Follow the steps for adding a new advice

<img align="right" width="300" src="https://i.ibb.co/RQqhsyL/fork.png" alt="fork this repository" />

## 1. Fork the repository
Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

## 2. Clone the repository
<img align="right" width="300" src="https://i.postimg.cc/gkmd5PHF/Screenshot-2024-07-24-092520.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://i.postimg.cc/CLsDTSyj/url.png" alt="copy URL to clipboard" />

```bash
git clone https://github.com/AliSinaYOusofi/quotes
```
where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## 3. Create a branch

Change to the repository directory on your computer (if you are not already there):

```bash
cd quotes
```
Now create a branch using the `git switch` command:

```bash
git switch -c your-new-branch-name
```

For example:

```bash
git switch -c add-alonzo-church
```

## 4. Make necessary changes and commit those changes

Now open `quotes.js (/data/quotes.js)` file in a text editor, add your quote to it. Add it at the end of the file. Now, save the file.

<img align="right" width="450" src="https://i.postimg.cc/rszb6Qs4/Screenshot-2024-07-23-200430.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```bash
git add quotes.js
```
Now commit those changes using the `git commit` command:

```bash
git commit -m "Added quote to quoteslist"
```
## 5. Push changes to GitHub

Push your changes using the command `git push`:

```bash
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!
You can check this list to contribute to other projects:
# Useful Open Source Resources

## [Open Source Friday](https://opensourcefriday.com/)
Open Source Friday is a movement to encourage people to contribute to open source projects. It provides resources to help you get started with contributions and find projects that need help.

## [First Timers Only](https://www.firsttimersonly.com/)
First Timers Only is a site dedicated to making it easier for new developers to make their first open source contribution. It provides guidance and lists projects that are welcoming to first-time contributors.

## [Up For Grabs](https://up-for-grabs.net/)
Up For Grabs aggregates projects that have tasks tagged with "up-for-grabs", "jump-in", "help wanted", and other labels that indicate they are suitable for new contributors. This makes it easier to find beginner-friendly projects.

## [Open Sauced](https://opensauced.pizza/)
Open Sauced helps you track your open source contributions, find new projects to work on, and connect with other developers. It's a platform for managing and visualizing your open source journey.
