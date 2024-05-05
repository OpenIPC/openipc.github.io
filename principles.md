![OpenIPC logo][logo]

## Alternative open firmware for your IP camera
_(based on Buildroot)_

[![Telegram](https://openipc.org/images/telegram_button.svg)][telegram]


### Organization

The OpenIPC community brings together a large number of developers and interested users who contribute to improving existing and creating new firmware, adding functions, and supporting new processors.

Our community is registered as an organization on the OpenCollective platform, as an organization on  the GitHub, as well as on social networks such as YouTube, Twitter, Facebook and others.

We give membership to the OpenIPC organization on GitHub if a person makes a few commits, PR, opens an Issue, and participates in our community.

We give membership in the organization forever, regardless of whether the person continues to collaborate and develop the project or whether it was his temporary enthusiasm and initiative.

OpenIPC is officially represented in 11 countries, has documented of our developments and protection of our brand name, which is already quite recognizable on the Internet.

The main headquarters of our international organization is located in Sanremo, Italy.


### Platform

If you carefully read first page of our website and the welcome message on GitHub, then on the title page you will find all the phrases that explain the essence of our project (the fact that no one reads it is not our fault, sorry).

- [https://openipc.org](https://openipc.org)
- [https://github.com/openipc](https://github.com/openipc)

The essence of our project is to create an OPEN COMMUNITY (which we did all together) whose goal is the research and development of alternative OPEN firmware.

We want to emphasize that we position our work as the final source code and compiled files of an OPEN OPERATING SYSTEM.

We do not limit startup, do not introduce any codes, do not protect the bootloader, our kernels are open and clean, scripts are transparent, all components are built from source with some reasoned EXCEPTIONS.

We strive to constantly look for open solutions, but if there are none, we DO NOT PROHIBIT  the use of binary components.

Each user has the right to choose and can refuse to use OpenIPC if he has an increased feeling of anxiety.

However, we GUARANTEE that we do not and will never engage in any illegal activities, we will not infringe on the rights of users, but at the same time we will not violate the patent law and intellectual property of some companies if we cannot provide an alternative solution with the source code.


### Exceptions

Exceptions mean the use in our work of components for which we do not have source codes.
These are some kernel modules and libraries, for some processors (not all), as well as some sensor driver modules, old and new.

Another exception is ONE of the THREE streamers that are available in our repositories, this is Majestic, which will be discussed below.


### Streamers

By streamers we mean specialized complex applications that receive information from sensors and, after processing by the ISP, produce them in the form of RTSP, RTMP, RTP and other streams.

At the moment, there are three streamers in the OpenIPC repositories, these are the fully open Mini and Venc, as well as Majestic.

The first two streamers work on a limited list of processors, while Majestic is a universal combiner for all systems, which will be discussed below.


### Majestic

If you go to the title page of our site, you will easily find a special block, at the top right, which shows the deep cooperation and integration of TWO projects, under a single name and the auspices of OpenIPC.
You can think of this as OpenIPC + Majestic = OpenIPC

Majestic is a closed source streamer that runs on all platforms supported by OpenIPC.

This streamer is DEFAULT for most published firmware, but is not required for use. You can use Mini, Venc streamers in the firmware, modify and adapt them, or write any of your own if you have the experience and knowledge to do so.

OpenIPC welcomes diversity and tries to support any endeavors that community members make and encourage them whenever possible.

Thus, Majestic is not a panacea, but simply works at the moment everywhere, on any processors.

If some other streamers appear and are published and compatibility is declared, then we will build firmware with them without any problems, as we are doing now with Mini and Venc.

Majestic is closed for some reason and this has been posted multiple times, but I'll repeat it:

- it contains some chip manufacturer SDK components for which we have signed an NDA and do not have the right to publish.
- it contains some parts of code that were written with the help of sponsors (I do not mean those who contribute to OpenCollective) and which we also do not have the right to publish.

For those who have doubts, they can look at the source code of the Mini streamer, add to it all the OPEN libraries that we have written together and published on GitHub over the years, as well as a few SDK components from chip manufacturers and we will get exactly the file that called Majestic.

Yes, yes, Mini is the younger brother of Majestic and if no one wants to put effort into its code, especially among colleagues who criticize our project, then I think they will not have the strength to deal with Majestic, since it is more complex.

Majestic code consists of 65-70% of the volume of our open libraries, 20-25% of the proprietary SDK components, and 10-15% of this "glue" paid for by R&D sponsors.

Any proposals to divide the code into dynamic libraries, unfortunately, will not work, since it greatly increases the volume and we will not be able to get the firmware to work on NOR flash 8 M, and it also complicates the interaction scheme of components and code and worsens stability. We tried to go this route and were forced to abandon it based on testing results.

As for telemetry, we do collect it and it is written on the wiki on the Majestic streamer page.
When you turn on the device, an ANIMAL request is sent to the DNS server, transmitting data about the processor used, sensor and version of the streamer, only for statistics and analysis. 
This is a kind of help for developers during research and debugging, nothing more.
Telemetry can be disabled at any time in the configuration file `/etc/majestic.yaml`


### Source code of OpenIPC projects

We support 85 repositories, which you can check out [here](https://github.com/orgs/OpenIPC/repositories?type=all)

Please note that many of them are original, meaning we generate new content.

We have more than a thousand likes (stars) and hundreds of forks of our repositories.

Many of our repositories have no analogues and take part in other projects. Here are some of them:

- [https://github.com/OpenIPC/ipctool](https://github.com/OpenIPC/ipctool)
- [https://github.com/OpenIPC/smolrtsp](https://github.com/OpenIPC/smolrtsp)
- [https://github.com/OpenIPC/mini](https://github.com/OpenIPC/mini)
- [https://github.com/OpenIPC/openhisilicon](https://github.com/OpenIPC/openhisilicon)
- [https://github.com/OpenIPC/silicon_research](https://github.com/OpenIPC/silicon_research)
- [https://github.com/OpenIPC/osd](https://github.com/OpenIPC/osd)
- [https://github.com/OpenIPC/devourer](https://github.com/OpenIPC/devourer)
- [https://github.com/OpenIPC/configurator](https://github.com/OpenIPC/configurator)
- [https://github.com/OpenIPC/snander-mstar](https://github.com/OpenIPC/snander-mstar)
- [https://github.com/OpenIPC/firmware](https://github.com/OpenIPC/firmware)
- [https://github.com/OpenIPC/builder](https://github.com/OpenIPC/builder)
- [https://github.com/OpenIPC/coupler](https://github.com/OpenIPC/coupler)


### Hardware

Our OpenIPC community found the strength to develop, make and release a test batch of URLLC video camera devices designed for robotics:

- [https://store.openipc.org](https://store.openipc.org)

We started with this direction because it was in enough demand to start and there were many enthusiasts there ready to try.
But our next step is to establish partnerships with the factory and produce boards of standard size 38x38 on an ongoing basis.
Some of the HARDWARE source code has already been published in our repository on GitHub.

We also have our own record and our video camera with OpenIPC firmware descended to a depth of 1415 meters. I think this is one of the deepest and most far-reaching uses of our system.


### Offer

We kindly ask all zealous fighters for open source who want to challenge and/or refute what is written above regarding NDAs and closed blobs - please send your revelations in the form of open free open source code and/or permission from vendors to use their proprietary components in our OpenIPC firmware.


### Summary

The OpenIPC community has taken place, will continue to develop and will support all directions and all movements, preferring Open Source but not denying any other forms of cooperation, development and experimentation.

Thank you all, friends, colleagues and partners!


<p align="center">
<a href="https://opencollective.com/openipc/contribute/backer-14335/checkout" target="_blank"><img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width="250" alt="Open Collective donate button"></a>
</p>

[firmware]: https://github.com/openipc/firmware
[logo]: https://openipc.org/assets/openipc-logo-black.svg
[mit]: https://opensource.org/license/mit
[opencollective]: https://opencollective.com/openipc
[paypal]: https://www.paypal.com/donate/?hosted_button_id=C6F7UJLA58MBS
[project]: https://github.com/openipc
[telegram]: https://t.me/openipc
[website]: https://openipc.org
[wiki]: https://github.com/openipc/wiki
