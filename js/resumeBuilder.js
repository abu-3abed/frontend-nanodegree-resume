/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
 	biopic: '../images/fry.jpg',
 	display: function(){
 		var n = HTMLheaderName.replace("%data%",name);
 		var r = HTMLheaderRole.replace("%data%",role);
 		$("div #header").append(r).append(n);
 		$.each( contacts, function( key, value ) {
 			 var c =HTMLcontactGeneric.replace("%contact%",key).replace("%data%",value);
 			 $("div ul #topContacts").append(c);
		});
		var p = HTMLbioPic.replace("%data%",biopic);
		var w = HTMLwelcomeMsg.replace("%data%",welcomeMessage);
		$("div #header").next("div").append(p).append(w);
 	}
 }

var education = {
	schools: [
	{
		name: 'Liberty University',
		location: 'Berlin, Germany'
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
	display: function () {
		// body... 
	}

}

var work = {
	jobs: [{
		employer: 'Planet Express',
		title: 'Delivery Boy',
		location: 'Brooklyn, NY',
		dates: 'in progress',
		description: 'just like any menial job.'
	}],
	display: function(){

	}
}

var projects = {
	projects: [{
		title:'Sample Project 1',
		dates: '2013',
		description: 'who moved my cheese?',
		images: ['../images/197x148.gif',
		'../images/197x148.gif']
	}],
	display: function(){

	}
}
	function display(htmlElement,callback,jqFunction){

	}