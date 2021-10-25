document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  div.className = "header-container";
  document.body.appendChild(div);

  let h1 = document.createElement("h1");
  let h1Text = document.createTextNode("This is an h1");
  h1.className = "h1";
  h1.appendChild(h1Text);
  div.appendChild(h1);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("This is an h2");
  h2.className = "h2";
  h2.appendChild(h2Text);
  div.appendChild(h2);

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("This is an h3");
  h3.className = "h3";
  h3.appendChild(h3Text);
  div.appendChild(h3);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("This is an h4");
  h4.className = "h4";
  h4.appendChild(h4Text);
  div.appendChild(h4);

  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode("This is an h5");
  h5.className = "h5";
  h5.appendChild(h5Text);
  div.appendChild(h5);

  let h6 = document.createElement("h6");
  let h6Text = document.createTextNode("This is an h6");
  h6.className = "h6";
  h6.appendChild(h6Text);
  div.appendChild(h6);

  let colors = ["#F33B14", "#14F340", "#1439F3", "#F314D8", "#14F3F3", "#E9F314", "#F36814", "#F3146F"];
  function switchColor() {
    let colorChange = colors[Math.floor(Math.random() * 8)];
    return colorChange;
  }
  h1.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h1.style.color = colorChange;
  });

  h2.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h2.style.color = colorChange;
  });

  h3.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h3.style.color = colorChange;
  });

  h4.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h4.style.color = colorChange;
  });

  h5.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h5.style.color = colorChange;
  });

  h6.addEventListener("dblclick", function () {
    let colorChange = switchColor();
    h6.style.color = colorChange;
  });

  let list = document.createElement("ul");
  div.appendChild(list);

  let count = 0;

  function ul() {
    count++;
    let li = document.createElement("li");
    let liText = document.createTextNode("This is list item " + count);
    li.appendChild(liText);
    list.appendChild(li);
    li.addEventListener("click", function () {
      let colorChange = switchColor();
      li.style.color = colorChange;
    });
    li.addEventListener("dblclick", function () {
      this.remove();
    });
  }

  document.getElementById("btn").addEventListener("click", function () {
    ul();
  });
});
