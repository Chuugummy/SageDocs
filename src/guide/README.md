# Introduction

Sage is a multi-use, modular, and extensible Discord bot written in JavaScript. It is designed to be easy to use and easy to build upon. This page will guide you through the installation process and how to get your bot up and running.

## Prerequisites
- [Node.js](https://nodejs.org/en/) - We recommend version 16.13.1 LTS for Sage. We are unsure if this is compatible with other versions of Node.
- [Git](https://git-scm.com/) - We always recommend the latest version of Git.
- [Yarn](https://yarnpkg.com/) - We recommend the latest version of Yarn.

## Verifying Prerequisites
Let's make sure that everything is installed correctly. Make sure that you have Node.js installed and that you have Git installed by running the following command in your command line:

```sh
git --version
```

If you see the following output (or something similar), everything is installed correctly:

```sh
git version 2.26.0
```

To verify that you have Yarn installed, run the following command in your command line:

```sh
yarn --version
```

If a version string is output to the console, Yarn is installed correctly.

## Acquiring Bot Files
Sage is a private, invite-only bot. You will need an account on our self-hosted source code management system to access the repository that contains the bot files. If you have an account, you can either:

- [Clone the repository](https://invent.ryujinx.tk/Onda/Sage.git)
- [Download Sage as it is as a zip file](https://invent.ryujinx.tk/Onda/Sage)

### Cloning the repository
To clone the bot repository, run the following command in your command line:

```sh
git clone https://invent.ryujinx.tk/Onda/Sage.git
```

You may be prompted to enter your GitLab instance username and password. Your username will actually be the email address associated with your GitLab account. The password is the password you use to log into your GitLab account.

### Downloading Sage as a zip file
Head to [https://invent.ryujinx.tk/Onda/Sage](https://invent.ryujinx.tk/Onda/Sage) and download the zip file. Very simple.

## Installing Dependencies
Sage requires some dependencies in order to run. To install the dependencies, run the following command in your command line:

```sh
yarn install
```

If the console tells you that ``yarn`` isn't installed, you may have to log out of your session and log back in. This is usually necessary only on Windows.

## Configuration
The only configuration you'll have to edit is ``config.js`` in the root directory of the bot. The values you must change are as follows:

- ``bot_token`` - The token for your bot. If you don't have one, you can generate one by following the instructions at [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me).

- ``bot_prefix`` - The prefix that Sage uses to identify commands.

- ``web_interface_password`` - The password for the default administrator account.

- ``encryption_secret`` - The secret used to encrypt sensitive data.

- ``owner_id`` - The ID of the user that is the owner of the bot.

Once you have configured everything to your liking, you can proceed to the next and final step.

## Running Sage
Woohoo! We're just about there. To run Sage, run the following command in your command line:

```sh
node sage
```

🍻 Your bot should now be running! You can now invite your bot to your server, and start using Sage!