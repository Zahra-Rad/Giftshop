const li = document.querySelectorAll("ul>li");
const redBox = document.querySelector("#scrollbar");
const contents = document.querySelectorAll("#content>div");
console.log(contents);

const mts = ["mt-[31px]", "mt-[89px]", "mt-[150px]", "mt-[212px]"];

const select = (s, i) => {
  // li changes

  li.forEach((element) => {
    element.classList.remove("active");
    element.classList.add("group");
  });

  s.classList.remove("group");
  s.classList.add("active");

  //   redbox changes

  mts.forEach((mt) => {
    redBox.classList.remove(mt);
  });

  switch (i) {
    case 0:
      redBox.classList.add(mts[0]);
      break;
    case 1:
      redBox.classList.add(mts[1]);
      break;
    case 2:
      redBox.classList.add(mts[2]);
      break;
    case 3:
      redBox.classList.add(mts[3]);
      break;
  }

  //   content changes

  contents.forEach((element) => {
    element.classList.add("opacity-0");
    element.classList.add("top-[-100%]");
    element.classList.remove("top-[0%]");
  });
  
  contents[i].classList.remove("top-[-100%]");
  contents[i].classList.add("top-[0%]");
  contents[i].classList.remove("opacity-0");
};
