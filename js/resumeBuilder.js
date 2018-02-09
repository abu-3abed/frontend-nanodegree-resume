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
 	display: function(){
 		// name and role
 		var n = HTMLheaderName.replace("%data%",bio.name);
 		var r = HTMLheaderRole.replace("%data%",bio.role);
 		$("div#header").append(n).append(r);

 		// contacts
 		$.each( bio.contacts, function( key, value ) {
 			 var c =HTMLcontactGeneric.replace("%contact%",key).replace("%data%",value);
 			 $("div ul#topContacts").append(c);
		});
		$("div#header").append($("div ul#topContacts"));

		// bio picture and welcome message
		var p = HTMLbioPic.replace("%data%",bio.biopic);
		var w = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("div#header").append(p).append(w);

		// skills
		$("div#header").append(HTMLskillsStart);
		var s = $("div#header").find('ul#skills');
		$.each(bio.skills, function(index, val) {
			s.append(HTMLskills.replace("%data%",val));
		});
 	}
 }

var education = {
	schools: [
	{
		name: 'Liberty University',
		location: 'Berlin, Germany',
		degree: 'Bachelor',
		majors: ['CS'],
		dates: '2003-2007',
		url: ''
	}],
	onlineCourses: [
	{
		title: 'Front End Nano Degree (FEND)',
		school: 'Udacity',
		dates: '2018',
		url: ''
	}],
	display: function(){			

		var ss = $(HTMLschoolStart);
		// schools
		$.each(education.schools, function(index, val) {
			$(ss).append(HTMLschoolName.replace("%data%",val.name) + HTMLworkTitle.replace("%data%",val.degree));
			$(ss).append(HTMLschoolDates.replace("%data%",val.dates));
			$(ss).append(HTMLschoolLocation.replace("%data%",val.location));
			$.each(val.majors, function(index, val) {
				 $(ss).append(HTMLschoolMajor.replace("%data%",val));
			});
		});

		$('div#education').append(ss);

		// online courses
		$('div#education').append(HTMLonlineClasses);

		var ss = $(HTMLschoolStart);

		$.each(education.onlineCourses, function(index, val) {
			$(ss).append(HTMLonlineTitle.replace("%data%",val.title) + HTMLonlineSchool.replace("%data%",val.school));
			$(ss).append(HTMLonlineDates.replace("%data%",val.dates));
			$(ss).append(HTMLonlineURL.replace("%data%",val.url));
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
	},{
		employer: 'Planet Express',
		title: 'Delivery Boy',
		dates: 'in progress',
		location: 'Brooklyn, NY',
		description: 'just like any menial job.'
	},{
		employer: 'Planet Express',
		title: 'Delivery Boy',
		dates: 'in progress',
		location: 'Brooklyn, NY',
		description: 'just like any menial job.'
	}],
	display: function(){
		$.each(work.jobs, function(index, val) {
			var ws = $(HTMLworkStart);
			$(ws).append(HTMLworkEmployer.replace("%data%",val.employer) + HTMLworkTitle.replace("%data%",val.title));
			$(ws).append(HTMLworkDates.replace("%data%",val.dates));
			$(ws).append(HTMLworkLocation.replace("%data%",val.location));
			$(ws).append(HTMLworkDescription.replace("%data%",val.description));
			$('div#workExperience').append(ws);
		});
	}
}

var projects = {
	projects: [{
		title:'Sample Project 1',
		dates: '2013',
		description: 'who moved my cheese?',
		images: ['images/197x148.gif',
		'images/197x148.gif']
	},{
		title:'Sample Project 1',
		dates: '2013',
		description: 'who moved my cheese?',
		images: ['images/197x148.gif',
		'images/197x148.gif']
	},{
		title:'Sample Project 1',
		dates: '2013',
		description: 'who moved my cheese?',
		images: ['images/197x148.gif',
		'images/197x148.gif']
	}],
	display: function(){
		$.each(projects.projects, function(index, val) {
			var ps = $(HTMLprojectStart);
			$(ps).append(HTMLprojectTitle.replace("%data%",val.title));
			$(ps).append(HTMLprojectDates.replace("%data%",val.dates));
			$(ps).append(HTMLprojectDescription.replace("%data%",val.description));
			$.each(val.images, function(index, val) {
				$(ps).append(HTMLprojectImage.replace("%data%",val));
			});
			$('div#projects').append(ps);
		});
	}
}
bio.display();
work.display();
projects.display();
education.display();
});