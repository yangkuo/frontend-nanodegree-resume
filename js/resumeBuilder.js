var bio = {
    name: "Condor Hero",
    role: "Enthusiast",
    contact_info: "duncan.chia@gmail.com",
    pic_url: "images/fry.jpg",
    welcome_msg: "konnichiwa",
    skills: ["SAP","Web Dev"],
}

var work = {};
work.position = "Trainer";
work.employer = "XXX";
work.years = 0.3;

var education = {
  schools: [ 
      { name: "UXX", major: ["BSc Computing","Psychology"] },
      { name: "UYY", major: ["MSc IT"] }
  ]
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.pic_url);
var fmtWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcome_msg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(formattedBioPic);
$("#main").append(bio.contact_info);
$("#main").append(fmtWelcomeMsg);

$("#main").append(HTMLskillsStart);
// TODO - replace with loop
var fmtSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#main").append(fmtSkills);
fmtSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#main").append(fmtSkills);

$("#main").append(work.position);
$("#main").append(education.schools[0].name);
