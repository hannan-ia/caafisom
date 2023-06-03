function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("mail").value,
      mobile: document.getElementById("mobile").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_81istvc";
    const templateID = "template_pev407k";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }