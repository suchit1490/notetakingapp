var title = document.getElementById("title");
var description = document.getElementById("description");
var submit = document.getElementById("submitbtn");
var newClass = document.querySelector(".showdata");

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

function hello() {
  let newdiv = document.createElement("div");
  newdiv.classList.add("newdiv");

  if (title.value) {
    newdiv.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${title.value}</h4>
          <p class="card-text">${description.value}</p>
          <a href="#" class="btn deletBtn btn-dark">Delete</a>
        </div>
      </div>`;
    newClass.appendChild(newdiv);

    title.value.innerText = "";
    description.innerText = "";
  }

  let clear = newdiv.querySelector(".deletBtn");
  clear.addEventListener("click", () => {
    newdiv.remove();
  });
}
