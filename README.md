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
You can visit the deployed site here: [SF Food Trucks](https://kelsey-food-trucks.herokuapp.com/)

You'll see a page with an embedded map. The default yellow marker indicating your position is located at the Embarcadero BART Station, but clicking anywhere on the map will relocate the marker and recenter the map.

Once the marker is set at the desired location, type the desired search radius (in meters) into the form below the map and click 'Search for Food Trucks'.

The map will reload, center itself on your click, and display all food trucks within the given radius. The name of the food truck will be displayed when you hover over the tag.

When you click on a food truck's tag, a box will appear containing the name, address, operating hours, and food offerings of the given truck. You can click through the different tags, or click a blank area of the map to change the origin if you want to search again.

Bon appetit!