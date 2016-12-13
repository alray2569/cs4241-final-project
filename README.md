WPI: A History
==============

Proposal
--------

An interactive visualization of the history of the Worcester Polytechnic Institute.  
To include the following, updating by decade:

* A map of the campus during that decade
* A picture of the president for most of that decade
* A description of what happened
* Various Statistics
  * Average class size
  * More TBD based on availability

The application will be navigable by a navbar at the top, or by using the arrow buttons
to move between consecutive decades. The map will be done using inline SVG, manipulated
by JavaScript. The statistics will be done using the D3 library. Research for the project
will be required to complete the project.

Changes to the project
----------------------

Features
--------
* Shadow loading on images
  * While you're viewing one part of the page, it's loading the rest in the background so when you navigate, there's no loading delay
* Animated load
  * As a special bonus, the ugly brackets that often show up while loading an AngularJS application.
* A small header that appears at the top of the screen when the main header scrolls off the top.
  * This means that you can still navigate from anywhere on the page.
* Responsive design
  * The appearance of the website changes to be appropriate in both wide and narrow browser windows, and even on mobile devices!
