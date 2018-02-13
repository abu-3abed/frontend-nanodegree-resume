/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(document).ready(function($) {
    var bio = {
        name: 'John Doe',
        role: 'Junior Software Engineer',
        contacts: {
            mobile: '0555555555',
            email: 'abc@xyz.com',
            github: 'JohnDoe',
            twitter: '@JohnDoe',
            location: 'Riyadh, Saudi Arabia'
        },
        welcomeMessage: 'Hi! my name is John Doe! and this is my resume website.',
        skills: ['Designing', 'Programming', 'Problem Solving'],
        biopic: 'images/fry.jpg',
        display: function() {
            // name and role
            var n = HTMLheaderName.replace("%data%", bio.name);
            var r = HTMLheaderRole.replace("%data%", bio.role);
            $("div#header").append(n).append(r);
            // contacts
            $.each(bio.contacts, function(key, value) {
                var c = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
                $("div ul#topContacts").append(c);
            });
            $("div#header").append($("div ul#topContacts"));
            // bio picture and welcome message
            var p = HTMLbioPic.replace("%data%", bio.biopic);
            var w = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("div#header").append(p).append(w);
            // skills
            $("div#header").append(HTMLskillsStart);
            var s = $("div#header").find('ul#skills');
            $.each(bio.skills, function(index, val) {
                s.append(HTMLskills.replace("%data%", val));
            });
        }
    }
    var education = {
        schools: [{
            name: 'Liberty University',
            location: 'Berlin, Germany',
            degree: 'Bachelor',
            majors: ['CS'],
            dates: '2003-2007',
            url: ''
        }],
        onlineCourses: [{
            title: 'Front End Nano Degree (FEND)',
            school: 'Udacity',
            dates: '2018',
            url: ''
        }],
        display: function() {
            var ss = $(HTMLschoolStart);
            // schools
            $.each(education.schools, function(index, val) {
                $(ss).append(HTMLschoolName.replace("%data%", val.name) + HTMLworkTitle.replace("%data%", val.degree));
                $(ss).append(HTMLschoolDates.replace("%data%", val.dates));
                $(ss).append(HTMLschoolLocation.replace("%data%", val.location));
                $.each(val.majors, function(index, val) {
                    $(ss).append(HTMLschoolMajor.replace("%data%", val));
                });
            });
            $('div#education').append(ss);
            // online courses
            $('div#education').append(HTMLonlineClasses);
            var ss = $(HTMLschoolStart);
            $.each(education.onlineCourses, function(index, val) {
                $(ss).append(HTMLonlineTitle.replace("%data%", val.title) + HTMLonlineSchool.replace("%data%", val.school));
                $(ss).append(HTMLonlineDates.replace("%data%", val.dates));
                $(ss).append(HTMLonlineURL.replace("%data%", val.url));
            });
            $('div#education').append(ss);
        }
    }
    var work = {
        jobs: [{
            employer: 'Planet Express',
            title: 'Delivery Boy',
            dates: 'in progress',
            location: 'Brooklyn, NY',
            description: 'just like any menial job.'
        }, {
            employer: 'Planet Express',
            title: 'Delivery Boy',
            dates: 'in progress',
            location: 'Brooklyn, NY',
            description: 'just like any menial job.'
        }, {
            employer: 'Planet Express',
            title: 'Delivery Boy',
            dates: 'in progress',
            location: 'Brooklyn, NY',
            description: 'just like any menial job.'
        }],
        display: function() {
            $.each(work.jobs, function(index, val) {
                var ws = $(HTMLworkStart);
                $(ws).append(HTMLworkEmployer.replace("%data%", val.employer) + HTMLworkTitle.replace("%data%", val.title));
                $(ws).append(HTMLworkDates.replace("%data%", val.dates));
                $(ws).append(HTMLworkLocation.replace("%data%", val.location));
                $(ws).append(HTMLworkDescription.replace("%data%", val.description));
                $('div#workExperience').append(ws);
            });
        }
    }
    var projects = {
        projects: [{
            title: 'Sample Project 1',
            dates: '2013',
            description: 'who moved my cheese?',
            images: ['images/197x148.gif', 'images/197x148.gif']
        }, {
            title: 'Sample Project 1',
            dates: '2013',
            description: 'who moved my cheese?',
            images: ['images/197x148.gif', 'images/197x148.gif']
        }, {
            title: 'Sample Project 1',
            dates: '2013',
            description: 'who moved my cheese?',
            images: ['images/197x148.gif', 'images/197x148.gif']
        }],
        display: function() {
            $.each(projects.projects, function(index, val) {
                var ps = $(HTMLprojectStart);
                $(ps).append(HTMLprojectTitle.replace("%data%", val.title));
                $(ps).append(HTMLprojectDates.replace("%data%", val.dates));
                $(ps).append(HTMLprojectDescription.replace("%data%", val.description));
                $.each(val.images, function(index, val) {
                    $(ps).append(HTMLprojectImage.replace("%data%", val));
                });
                $('div#projects').append(ps);
            });
        }
    }
    bio.display();
    work.display();
    projects.display();
    education.display();

    $("div#mapDiv").before(internationalizeButton);

    $('button#Internationalize').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });


    function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };
    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);
    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {
        // initializes an empty array
        var locations = [];
        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);
        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });
        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });
        return locations;
    }
    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window
        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });
        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });
        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });
        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }
    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }
    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {
        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);
        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };
            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();
    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}
/*
Uncomment the code below when you're ready to implement a Google Map!
*/
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});

    initializeMap();
});