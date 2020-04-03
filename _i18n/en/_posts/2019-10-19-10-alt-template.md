---
layout: post
title: "ALT. template + Wordpress theme"
image: "/assets/imgs/alt.png"
image_description: ""
reading_time: "1:00"
description: "A minimalist template and a Wordpress theme with absolute focus on content."
keywords: "wordpress, theme, template, alt"
categories: ['code', 'projects']
author: nicolas_ea
---

Looking for a Wordpress theme for our content-based projects, we realize there was no template in tune with Mínimo's design principles.

Inspired by what we consider to be some of the most notable digital magazines, we decided to create "Alt", a template and a Wordpress theme with a free license, and an absolute focus on content.

We set out to create a template that would get out of the way. One that avoids the temptation to interrupt the reader on its access to content.
An adaptable interface for both desktop and mobile that allows a beautiful reading experience. A theme with the indispensable elements that would prioritize the beauty of images and typography, and at the same time flexible enough to fulfill a variety of functions, such as video and audio display, featured images, etc.

With that in mind we began this 0.5 version of the <u>Alt Wordpress theme</u>. Available on <a href="https://github.com/minimo-io/alt-wordpress-theme" target="_blank">Github</a> and in the Wordpress repository.

## Roadmap
### For v.1
  * Have a custom field and nice layout to display audios (via a link or embed).
  * Reading progress customizable bar (maybe via a complementary plugin). Inspiration: shutupandgo.travel/how-to-survive-a-jungle-trek-in-thailand/
  * HD youtube embedded videos (for some reason this is only working using default definition).
  * Be able to easily link to internal anchors. Like <a href="https://www.healthline.com/health/fitness-exercise/anterior-pelvic-tilt-exercises" rel="nofollow" target="_blank">here</a>, on scroll. I've also seen this implemented via clickable headers.
  * Authors page.
  * [Structured data](https://developers.google.com/assistant/content/overview).
  * Use Wordpress built in customize "site_icon", if configured. <a href="https://www.sitepoint.com/all-you-need-to-know-about-the-new-wordpress-site-icon-api/" rel="nofollow" target="_blank">How to</a>.
  * Use the &lt;picture&gt; element to display images depending on the viewport. Link source-set to thumbnails size theme configuration (on upload). <a target="_blank" rel="nofollow" href="https://www.malthemilthers.com/responsive-images-and-how-to-implement-them-in-wordpress/">Check</a>.

### For v.1.5
  * [Mega-posts explorer](https://imgur.com/a/R9EO8IV). Show all headers in an simple and collapsable sidebar.

### For v.2
  * <u>Subscriptors/Publishing</u>. Be able to have certain content available only for subscribers after the visitor has read an X number of articles. Or if it is a returning visitor. Configurable (Susbscribers are uses registered to the mailing list).
  * Client side configuration. Eg. Day/Night reading modes. Little gear on menu open.

## Known bugs
  * <u>Menu</u>: For some viewport heights main menu breaks because font-size is too big. [Snapshot](https://imgur.com/a/HjJ0XJB).
  * <u>Menu</u>: When a viewport width is really small, menu breaks. [Snapshot](https://imgur.com/a/0s41eAU).
  * <u>Menu Logo</u>: At least on iPhones logo it is not centered. [Snapshot](https://imgur.com/a/Dol2L0T).
  * <u>Homepage Carousel</u>: When sticky posts title is just one word then... it's a mess. [Snapshot](https://imgur.com/a/DPzbLC2).
  * <u>Post Formats</u>: When hit "Search" inside an Image or Video Post Format, background blur is not perfect.
  * <u>Post Formats</u>: The option is available for pages but for some reason, assigning a different post format other than standard is not working.
  * <u>Page</u>: Back button not working.
  * <u>Admin Bar</u>: There is a point for small viewport where the Wordpress admin bar is not fixed and when so, when scrolling site top menu breaks. [Snapshot](https://imgur.com/a/IdvV4zy).
