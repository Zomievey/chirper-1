window.onload = () => {
  const div1 = document.createElement("div");
  div1.id = "div1";
  div1.textContent = "1. ";

  firstBtn = document.createElement("button");
  firstBtn.id = "firstBtn";
  firstBtn.textContent = "Button 1";

  document.body.appendChild(div1);
  div1.appendChild(firstBtn);

  firstBtn.addEventListener("click", function () {
    alert("Its a beautiful DAY!!");
  });

  const div2 = document.createElement("div");
  div2.id = "div2";
  div2.textContent = "2. ";

  const submitBtn = document.getElementById("submitBtn");
  const textBox = document.getElementById("textBox");

  document.body.appendChild(div2);
  div2.appendChild(textBox);
  div2.appendChild(submitBtn);

  submitBtn.addEventListener("click", function () {
    let msg = document.getElementById("textBox").value;
    alert(msg);
  });

  const div3 = document.createElement("div");
  div3.id = "div3";
  div3.textContent = "3. ";

  document.body.appendChild(div3);

  div3.addEventListener("mouseover", function () {
    div3.style.background = "aqua";
  });

  div3.addEventListener("mouseleave", function () {
    div3.style.background = "";
  });

  const div4 = document.createElement("div");
  div4.id = "div4";
  div4.textContent = "4.";

  document.body.appendChild(div4);
  div4.appendChild(para1);

  para1.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCol = `rgb(${r},${g},${b})`;

    para1.style.color = rgbCol;
  });

  const div5 = document.createElement("div");
  div5.id = "div5";
  div5.textContent = "5. ";

  const secondBtn = document.createElement("button");
  secondBtn.textContent = "Second Button";
  secondBtn.id = "secondBtn";

  document.body.appendChild(div5);
  div5.appendChild(secondBtn);

  secondBtn.addEventListener("click", function () {
    const span = document.createElement("span");
    span.textContent = "Haylee Hunter";

    div5.appendChild(span);
  });

  const div6 = document.createElement("div");
  div6.id = "div6";
  div6.textContent = "6. ";

  thirdBtn = document.createElement("button");
  thirdBtn.id = "thirdBtn";
  thirdBtn.textContent = " Button 3";

  const uList = document.createElement("ul");

  document.body.appendChild(div6);
  div6.appendChild(thirdBtn);
  div6.appendChild(uList);

  const nameArr = [
    "Snoopy",
    "Garfield",
    "Felix",
    "Tom",
    "Jerry",
    "Pluto",
    "Yogi",
    "Donald",
    "Daisy",
  ];

  const Btn3 = document.getElementById("thirdBtn");
  let counter = 0;

  Btn3.addEventListener("click", function () {
    if (counter < 9) {
      let friendName = nameArr[counter];
      const newLI = document.createElement("li");
      newLI.textContent = friendName;
      uList.appendChild(newLI);
    }

    counter++;
  });
};
