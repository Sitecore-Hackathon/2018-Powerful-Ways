# Powerful Ways JSS Blog Feature Module and Demo Documentation

**Category:** Sitecore JavaScript Services (JSS)

## Summary

The Powerful Ways JSS blog feature module allows a content editor to create a blog in Sitecore Content Editor and Sitecore Experience Editor. It contains all the building blocks required to create such a blog. A blog created using this module is using React and Sitecore JSS to render the pages.

Sitecore JSS is a very recent technology and no or just a few modules exist to accelerate development of sites using it. This module aims to accelerate development of a blog feature in Sitecore JSS projects.

For the Sitecore Hackathon 2018 purposes, a demo module is also provided. It uses the building blocks of the feature module to implement a working blog website.

## Pre-requisites

This module has the following dependencies:

- Sitecore Experience Platform 9.0 Update-1 (rev. 171219) (Not tested on Sitecore Experience Management but it should work).
- A Sitecore subscription license.
- Sitecore JavaScript Services 9.0 Tech Preview 2 Server Package (Sitecore JavaScript Services Tech Preview Server 9.0.1 rev. 180228.zip).

## Installation

1. Install a new instance of Sitecore Experience Platform 9.0 Update-1 (rev. 171219) using your preferred method.
    1. For intructions purposes, let's say the hostname is: `powerfulways.sc`
1. Download the server package of Sitecore JSS from [dev.sitecore.net](https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview_2.aspx).
1. Log into Sitecore at http://powerfulways.sc/sitecore.
1. From the Launch Pad, open the Desktop application.
1. Use the Sitecore Installation wizard (Start menu > Development Tools > Installation Wizard) to install the [JSS Server package](https://dev.sitecore.net/~/media/C164487ED4374D5D90B1F01E85C2C7AD.ashx).
1. Make the following changes in Web.config of the Sitecore instance:
    1. Add the following element to the bottom of the `system.webServer/handlers` section:

           <add verb="*" path="sitecorejss_media.ashx" type="Sitecore.JavaScriptServices.Media.MediaRequestHandler, Sitecore.JavaScriptServices.Media" name="Sitecore.JavaScriptServices.Media.MediaRequestHandler" />

1. Use the Sitecore Installation wizard to install the [Powerful Ways JSS blog feature package](https://github.com/Sitecore-Hackathon/2018-Powerful-Ways/raw/master/sc.package/Powerful%20Ways%20JSS%20Blog%20Feature-1.0.zip).
1. Use the Sitecore Installation wizard to install the [Powerful Ways JSS blog demo package](https://github.com/Sitecore-Hackathon/2018-Powerful-Ways/raw/master/sc.package/Powerful%20Ways%20JSS%20Blog%20Demo-1.0.zip).
1. Use the Sitecore Desktop to smart publish the site (Start menu > Publish Site > Smart Publish).

After the publish, the website should be up and running. Ready to be accessed by visitors and edited by authors.

## Usage

### Visitors

Visitors can now consult the blog at the public address of the Sitecore instance: http://powerfulways.sc/

The default website was patched to target the blog home item in the Sitecore content tree.

### Authors

Authors can log into Sitecore at http://powerfulways.sc/sitecore and use both the Content Editor and Experience Editor to add and modify the blog articles content.

Watch the video below for detailed instructions.

## Video

Please provide a video highlighing your Hackathon module submission and provide a link to the video. Either a [direct link](https://www.youtube.com/watch?v=EpNhxW4pNKk) to the video, upload it to this documentation folder or maybe upload it to Youtube...

[![Sitecore Hackathon Video Embedding Alt Text](https://img.youtube.com/vi/EpNhxW4pNKk/0.jpg)](https://www.youtube.com/watch?v=EpNhxW4pNKk)
