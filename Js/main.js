let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}



// let navLink=document.querySelectorAll('header .navbar a')


let section=document.querySelectorAll('section');
let navLists=document.querySelectorAll('header .navbar a');

window.onscroll=()=>{

    // menu.classList.remove('fa-times');
    // navbar.classList.remove('active')

    // section.forEach(sec=>{
    //     let top=window.scrollY;
    //     let height=sec.offsetHeight;
    //     let offset=sec.offsetTop - 150;
    //     let id=sec.getAttribute('id');
        
    //     if(top => offset && top < offset + height){
    //         navLists.forEach(links=>{
    //         links.classList.remove('active');
    //         document.querySelector('header .navbar a[href*='+id+']').classList.add("active");
    //         });
    //     };
    // });
}


let checkform = document.getElementById("register")
checkform.onsubmit = validation

function validation() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")
   
    let error = document.getElementById("error")


    // error.style.backgroundColor = "40px"

    let na = name.value;
    let em = email.value;
    let sub = subject.value;
    let msg = message.value;
   

    if (na.length < 5) {
        // error.innerHTML = "Name is Required"
        name.style.borderColor = "#fe8b8e";
        return false;
    }
    else if (em.indexOf("@") == -1 || em.length < 8) {
        // error.innerHTML = "Email is not Valid"
        email.style.borderColor = "#fe8b8e";
        return false
    }

    else if (sub.length < 2) {
        // error.innerHTML = "Subject is not Strong"
        subject.style.borderColor = "#fe8b8e";
        return false;
    }
    else if (msg.length<2) {
        // error.innerHTML = "Message is not Strong"
        message.style.borderColor = "#fe8b8e";
        return false;
    }
   
    let parms={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                subject:document.getElementById("subject").value,
                message:document.getElementById("message").value,
            } 
    emailjs.send("service_l9wtc3h","template_7v9apo1",parms).then(alert("Thank you " + "| Your message has been send"))  
    return true;
        
}





// function sendmail(){
//     let parms={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("message").value,
//     }

//     emailjs.send("service_l9wtc3h","template_7v9apo1",parms).then(alert("Thank you " + "| Your message has been send"))
// }

