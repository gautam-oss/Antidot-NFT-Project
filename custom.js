var typed = new Typed(".change",{
    strings:["#AnGry SUP! 🤬","#LSD SUP! 👅","#Got BeaTed 😵‍💫","#SUP Gets HigH ☘️"],
    typeSpeed:120,
    BackSpeed:60,
    loop:true
});

document.body.addEventListener("mousemove", (event) => {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	gsap.set(".cursor", {
		x: mouseX,
		y: mouseY
	});

	gsap.to(".shape", {
		x: mouseX,
		y: mouseY,
		stagger: -0.05
	});
});


const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");


q1.addEventListener("mouseenter", (e) => {
  document.querySelector(".q1").classList.add("active");
  // if(q1.classList.contains('active')){
  //   one.style.left = "-80px";
  //   two.style.left = "-230px"
  //   three.style.left = "-370px"
  //   four.style.left = "-520px"
  // }
  if(q2.classList.contains('active') || q3.classList.contains('active') || q4.classList.contains('active')) {
    q2.classList.remove("active");
    q3.classList.remove("active");
    q4.classList.remove("active");
  }
});

q2.addEventListener("mouseenter", (e) => {
  document.querySelector(".q2").classList.add("active");
  // if(q2.classList.contains('active')){
  //   one.style.left = "0px";
  //   two.style.left = "-60px"
  //   three.style.left = "-110px"
  //   four.style.left = "-170px"
  // }
  if(q1.classList.contains('active') || q3.classList.contains('active') || q4.classList.contains('active')) {
    q1.classList.remove("active");
    q3.classList.remove("active");
    q4.classList.remove("active");
  }
});

q3.addEventListener("mouseenter", (e) => {
  document.querySelector(".q3").classList.add("active");
  // if(q3.classList.contains('active')){
  //   one.style.left = "0px";
  //   two.style.left = "60px"
  //   three.style.left = "110px"
  //   four.style.left = "170px"
  // }
  if(q1.classList.contains('active') || q2.classList.contains('active') || q4.classList.contains('active')) {
    q1.classList.remove("active");
    q2.classList.remove("active");
    q4.classList.remove("active");
  }
});

q4.addEventListener("mouseenter", (e) => {
  document.querySelector(".q4").classList.add("active");
  // if(q4.classList.contains('active')){
  //   one.style.left = "80px";
  //   two.style.left = "230px"
  //   three.style.left = "370px"
  //   four.style.left = "520px"
  // }
  if(q1.classList.contains('active') || q2.classList.contains('active') || q3.classList.contains('active')) {
    q1.classList.remove("active");
    q2.classList.remove("active");
    q3.classList.remove("active");
  }
});
