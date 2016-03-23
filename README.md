Find a food truck today!
========================

What is it?
-----------

This is a Ruby on Rails app that allows you to find San Francisco food trucks near your desired location. Built in 1 day for a [Viking Code School](http://www.vikingcodeschool.com/) project.

Features implemented:

* Using HTTParty to get the food truck data and save it to the database
* Using the Google Maps API and its geometry library to calculate the location of your click and all trucks within the given radius
* Single page web app implemented with JavaScript

Getting started
---------------
[SF Food Trucks](https://kelsey-food-trucks.herokuapp.com/)

You'll see a page with an embedded map. The default marker is located at the Embarcadero BART Station, but clicking anywhere on the map will relocate the center.

Once the center is set, type the desired search radius (in meters) into the form below the map and click 'Search'.

The map will reload, center itself on your click, and also display all food trucks within the given radius. The name of the food truck will be displayed when you hover over the tag.

Bon appetit!