// window.addEventListener('DOMContentLoaded', function() {
//     let qualities = ["frontend developer","student","competitive programmer"];
//     let qualityValueElement = document.getElementById("qualityValue");
  
//     let currentIndex = 0;
  
//     setInterval(function() {
//       qualityValueElement.classList.remove("updated-quality-value");
//       qualityValueElement.innerText = qualities[currentIndex];
  
//       setTimeout(function() {
//         qualityValueElement.classList.add("updated-quality-value");
//       },100);
  
//       currentIndex = (currentIndex + 1) % qualities.length;
//     }, 2000);
//   });
  
  document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".navbar a");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        let targetElement = document.querySelector(this.getAttribute("href"));
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });

  var typeData = new Typed(" .quality-value",{
    strings: [
      "Competitive Programmer",
      "Front-End Developer",
      "Student",
    ],
    loop:true,
    typeSpeed: 100,
    backSpeed:80,
    backDelay:1000,  
  });