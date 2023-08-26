var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener
(
    "submit",(e)=>
        {
            e.preventDefault();
            data();
            form.reset();
        }
);

var loadFile = function(event)
{
    i=URL.createObjectURL(event.target.files[0]);
}

function data()
{
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var fname = document.createElement("div");
    var lname = document.createElement("div");
    var gender = document.createElement("div");
    var course = document.createElement("div");
    var Email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    fname.innerHTML="First Name : "+element[0].value;
    lname.innerHTML="Last Name : "+element[1].value;
    if(element[2].checked){gender.innerHTML="Gender : Male";}
    if(element[3].checked){gender.innerHTML="Gender : Female";}
    if(element[4].checked){gender.innerHTML="Gender : Other";}
    course.innerHTML="COURSE : "+element[5].value;
    Email.innerHTML="E-mail : "+element[6].value;
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[7].value !="")
        img.src=i;


     if(element[8].checked){skills.innerHTML="SKILLS : HTML";}
     if(element[9].checked){skills.innerHTML="SKILLS : CSS";}
     if(element[10].checked){skills.innerHTML="SKILLS : JS";}
     if(element[11].checked){skills.innerHTML="SKILLS : ReactJs";}
     if(element[8].checked && element[9].checked){skills.innerHTML="SKILLS : HTML,CSS";}
    if(element[8].checked && element[10].checked){skills.innerHTML="SKILLS : HTML,JS";}
    if(element[8].checked && element[11].checked){skills.innerHTML="SKILLS : HTML,ReactJs";}
    if(element[9].checked && element[10].checked){skills.innerHTML="SKILLS : CSS,JS";}
    if(element[9].checked && element[11].checked){skills.innerHTML="SKILLS : CSS,ReactJs";}
    if(element[10].checked && element[11].checked){skills.innerHTML="SKILLS : JS,ReactJs";}
    if(element[8].checked && element[9].checked && element[10].checked){skills.innerHTML="SKILLS : HTML,CSS,JS";}
    if(element[8].checked && element[9].checked && element[11].checked){skills.innerHTML="SKILLS : HTML,CSS,ReactJs";}
    if(element[9].checked && element[10].checked && element[11].checked){skills.innerHTML="SKILLS : CSS,JS,ReactJs";}
    if(element[10].checked && element[11].checked && element[8].checked){skills.innerHTML="SKILLS : JS,ReactJs,HTML";}
    if(element[8].checked && element[9].checked && element[10].checked && element[11]){skills.innerHTML="SKILLS : HTML,CSS,JS,ReactJs";}
    

    div1.appendChild(fname);
    div1.appendChild(lname);
    div1.appendChild(gender);
    div1.appendChild(course);
    div1.appendChild(Email);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");

}