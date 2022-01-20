(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{406:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Sage is a multi-use, modular, and extensible Discord bot written in JavaScript. It is designed to be easy to use and easy to build upon. This page will guide you through the installation process and how to get your bot up and running.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" - We recommend version 16.13.1 LTS for Sage. We are unsure if this is compatible with other versions of Node.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1),e._v(" - We always recommend the latest version of Git.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),a("OutboundLink")],1),e._v(" - We recommend the latest version of Yarn.")])]),e._v(" "),a("h2",{attrs:{id:"verifying-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-prerequisites"}},[e._v("#")]),e._v(" Verifying Prerequisites")]),e._v(" "),a("p",[e._v("Let's make sure that everything is installed correctly. Make sure that you have Node.js installed and that you have Git installed by running the following command in your command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" --version\n")])])]),a("p",[e._v("If you see the following output (or something similar), everything is installed correctly:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.26")]),e._v(".0\n")])])]),a("p",[e._v("To verify that you have Yarn installed, run the following command in your command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" --version\n")])])]),a("p",[e._v("If a version string is output to the console, Yarn is installed correctly.")]),e._v(" "),a("h2",{attrs:{id:"acquiring-bot-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquiring-bot-files"}},[e._v("#")]),e._v(" Acquiring Bot Files")]),e._v(" "),a("p",[e._v("Sage is a private, invite-only bot. You will need an account on our self-hosted source code management system to access the repository that contains the bot files. If you have an account, you can either:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://invent.ryujinx.tk/Onda/Sage.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clone the repository"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://invent.ryujinx.tk/Onda/Sage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Sage as it is as a zip file"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"cloning-the-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloning-the-repository"}},[e._v("#")]),e._v(" Cloning the repository")]),e._v(" "),a("p",[e._v("To clone the bot repository, run the following command in your command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://invent.ryujinx.tk/Onda/Sage.git\n")])])]),a("p",[e._v("You may be prompted to enter your GitLab instance username and password. Your username will actually be the email address associated with your GitLab account. The password is the password you use to log into your GitLab account.")]),e._v(" "),a("h3",{attrs:{id:"downloading-sage-as-a-zip-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-sage-as-a-zip-file"}},[e._v("#")]),e._v(" Downloading Sage as a zip file")]),e._v(" "),a("p",[e._v("Head to "),a("a",{attrs:{href:"https://invent.ryujinx.tk/Onda/Sage",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://invent.ryujinx.tk/Onda/Sage"),a("OutboundLink")],1),e._v(" and download the zip file. Very simple.")]),e._v(" "),a("h2",{attrs:{id:"installing-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[e._v("#")]),e._v(" Installing Dependencies")]),e._v(" "),a("p",[e._v("Sage requires some dependencies in order to run. To install the dependencies, run the following command in your command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("If the console tells you that "),a("code",[e._v("yarn")]),e._v(" isn't installed, you may have to log out of your session and log back in. This is usually necessary only on Windows.")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The only configuration you'll have to edit is "),a("code",[e._v("config.js")]),e._v(" in the root directory of the bot. The values you must change are as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("bot_token")]),e._v(" - The token for your bot. If you don't have one, you can generate one by following the instructions at "),a("a",{attrs:{href:"https://discordapp.com/developers/applications/me",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://discordapp.com/developers/applications/me"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bot_prefix")]),e._v(" - The prefix that Sage uses to identify commands.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("web_interface_password")]),e._v(" - The password for the default administrator account.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("encryption_secret")]),e._v(" - The secret used to encrypt sensitive data.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("owner_id")]),e._v(" - The ID of the user that is the owner of the bot.")])])]),e._v(" "),a("p",[e._v("Once you have configured everything to your liking, you can proceed to the next and final step.")]),e._v(" "),a("h2",{attrs:{id:"running-sage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-sage"}},[e._v("#")]),e._v(" Running Sage")]),e._v(" "),a("p",[e._v("Woohoo! We're just about there. To run Sage, run the following command in your command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" sage\n")])])]),a("p",[e._v("🍻 Your bot should now be running! You can now invite your bot to your server, and start using Sage!")])])}),[],!1,null,null,null);t.default=s.exports}}]);