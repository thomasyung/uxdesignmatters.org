# Folder and File Structure #

There are two main folders at the root of the website. **craft/** is where all the Craft CMS related configurations and TWIG templates go. 

## craft/templates/ ##

This folder contains all the templates for how each page on the site should look like and behave.

* **_layout.html** - This is the primary template from which all other child templates inherit from. It contains the semantic structure for the head, main, and footer.
* **404.html** - This is the 404 page that is displayed whenever a page is not found on our site.
* **about.html** - This is the template for the /about page.
* **credits.html** - This is the template for the /credits page.
* **feed.rss** - This is what is served to RSS feed news readers.
* **index.html** - This is the template for the home page.
* **resources.html** - This is the template for the /resources page.

### craft/templates/assets/css/ 
* **normalize.css** - https://necolas.github.io/normalize.css/
* **open-color.css** - https://yeun.github.io/open-color/
* **styles.css** - The primary stylesheet for the site.

### craft/templates/news/ ###
* **_entry.html** - This is the TWIG template for each news item that is displayed.
* **index.html** - This is the template for the News listing that is displayed.

## public_html/ ## 

The **public_html/** folder is mapped to **uxdesignmatters.org/**. It is the publicly viewable folder that serves our HTML content.

* **.htaccess** - Apache server directives for how our site should behave.
* **favicon.ico** - The favicon
* **favicon.gif** - The favicon
* **index.php** - Do not change this. Craft uses this to do its page routing.
* **robots.txt** - This tells the search engines what parts of our website to crawl and index.

### public_html/bower_components/ ###

Too many files in this folder to annotate each file. This folder is for the Polymer web components library. The contents are found in this repository. https://github.com/polymer. To update to the latest library files, you need to use polymer-cli. Download from https://github.com/Polymer/polymer-cli

### public_html/custom_components/ ###

We will put all the custom web components that we create here in this folder.

### public_html/custom_components/meetup-events/ ###

This folder contains all the code for our custom web component <meetup-events></meetup-events>.

* **index.html** - This is the example usage / working demo for this component.
* **jquery.mousewheel.js** - See https://github.com/jquery/jquery-mousewheel
* **jquery-2.2.1.min.js** - See https://api.jquery.com/
* **meetup-event.html** - The template for how each meetup event is displayed.
* **meetup-events.html** - The template that makes the AJAX requests to the Meetup.com API using the iron-ajax component and data bindings.
* **meetup-events-proxy.php** - The cross-browser proxy for doing the AJAX request to the meetup.com API.