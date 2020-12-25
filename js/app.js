/* /---------- * FIRST SECTION ---------- */

const lis = document.querySelectorAll(".li-title");
// let allWidthOfLi = [];
for (let i = 0; i < lis.length; i++) {
  let prLi = document.getElementsByClassName("li-title");
  let widthOfEachLi = lis[i].offsetWidth;
  let span = document.createElement("span");
  span.classList.add("spanLine");
  span.style.width = `${widthOfEachLi}px`;
  prLi[i].appendChild(span);
}

/* /---------- * BLOCK-SERVICES ---------- */

const tabs = document.querySelector(".tabs");
const tabsContent = document.querySelector(".tabs-content");

tabs.addEventListener("click", function (e) {
  e.preventDefault();
  position = 0;
  let curr = e.target;
  let li = curr.closest("li");
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
    if (tabs.children[i] === li) {
      tabs.children[i].classList.add("active");
      position = i;
    }
  }
  for (let i = 0; i < tabsContent.children.length; i++) {
    tabsContent.children[i].hidden = true;
    if (i === position) {
      tabsContent.children[i].hidden = false;
    }
  }
});

/* /---------- * FILTER PHOTO ---------- */

const aTag = document.querySelector(".loadMore");
const product = document.querySelector(".product");

const src = [
  "./img/imageForLoad/graphicDesign0.jpg",
  "./img/imageForLoad/graphicDesign1.jpg",
  "./img/imageForLoad/graphicDesign2.jpg",
  "./img/imageForLoad/landingPages0.jpg",
  "./img/imageForLoad/landingPages1.jpg",
  "./img/imageForLoad/landingPages2.jpg",
  "./img/imageForLoad/webDesign0.jpg",
  "./img/imageForLoad/webDesign1.jpg",
  "./img/imageForLoad/webDesign2.jpg",
  "./img/imageForLoad/wordPress0.jpg",
  "./img/imageForLoad/wordPress1.jpg",
  "./img/imageForLoad/wordPress2.jpg",
];

aTag.addEventListener("click", onBtnPess);

function onBtnPess(e) {
  let currentTarget = e.target;
  btn = currentTarget.closest(".loadMore");
  if (btn) {
    function addPhoto() {
      for (let i = 0; i < src.length; i++) {
        let divClassCutHead = src[i].substr(19);
        let classDiv = divClassCutHead.slice(0, -5);
        let div = document.createElement("div");
        div.classList.add(classDiv, "itemBox");
        let img = document.createElement("img");
        img.src = src[i];
        let divSircle = document.createElement("div");
        divSircle.classList.add("sircle");
        let a = document.createElement("a");
        a.innerHTML = `<a href="#">
        <svg
          width="88"
          height="43"
          viewBox="0 0 88 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="2"
            width="41"
            height="40"
            rx="20"
            stroke="#18CFAB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
            fill="#1FDAB5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
            fill="#18CFAB"
          />
          <rect x="60" y="17" width="12" height="11" fill="white" />
        </svg>
      </a>`;
        divSircle.appendChild(a);
        div.appendChild(img);
        let h2Only = document.createElement("div");
        h2Only.classList.add("h2Only");
        let h2 = document.createElement("h2");
        let text = document.createTextNode("creative design");
        h2.appendChild(text);
        let p = document.createElement("p");
        let ptext = document.createTextNode("Web Design");
        p.appendChild(ptext);
        h2Only.appendChild(h2);
        h2Only.appendChild(p);
        divSircle.appendChild(h2Only);
        div.appendChild(divSircle);
        product.appendChild(div);
      }
      aTag.remove();
    }
    setTimeout(addPhoto, 5500);
  }
}

/* /---------- * TESTIMONIALS ---------- */

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const persona = document.querySelector(".four-per");
const ul = document.querySelector(".testimonDivTextPhoto");

let num = 0;
position = 0;

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  persona.children[num].classList.remove("activePer");
  num++;
  position = num;
  if (num >= persona.children.length) {
    num = 0;
    position = 0;
  }
  persona.children[num].classList.add("activePer");

  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].classList.add("hidden");
    if (i === position) {
      ul.children[i].classList.remove("hidden");
      ul.children[i].style.opacity = 0;
      let opacity = 0;
      let inetrvalShow = setInterval(nextOpacity, 50);
      function nextOpacity() {
        if (opacity < 1) {
          opacity += 0.1;
          ul.children[i].style.opacity = opacity;
        } else {
          clearInterval(inetrvalShow);
        }
      }
    }
  }
});

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  persona.children[num].classList.remove("activePer");
  num--;
  position = num;
  if (num < 0) {
    num = persona.children.length - 1;
    position = ul.children.length - 1;
  }
  persona.children[num].classList.add("activePer");

  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].classList.add("hidden");
    if (i === position) {
      ul.children[i].classList.remove("hidden");
      ul.children[i].style.opacity = 0;
      let opacity = 0;
      let inetrvalShow = setInterval(nextOpacity, 50);
      function nextOpacity() {
        if (opacity < 1) {
          opacity += 0.1;
          ul.children[i].style.opacity = opacity;
        } else {
          clearInterval(inetrvalShow);
        }
      }
    }
  }
});

/* /---------- * section MASONRY ---------- */

const $grid = $(".grid").imagesLoaded(function () {
  $grid.masonry({
    itemSelector: ".grid-item",
    percentPosition: true,
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
  });
});
function getAddPhoto() {
  const arrOfPhotoMansory = [];
  for (let i = 1; i <= 24; i++) {
    arrOfPhotoMansory.push(
      `<img class="grid-item" src="./img/masonry/forLoad/add${i}.jpg" alt="Photo" />`
    );
  }
  return arrOfPhotoMansory;
}
const lastBtn = document.querySelector(".btnMason");

lastBtn.addEventListener("click", function () {
  const imagesToAdd = getAddPhoto();
  const masonryBx = document.querySelector(".grid");

  if (!masonryBx.classList.contains("secons-click")) {
    function addFirstMasonry() {
      for (let i = 1; i <= Math.floor(imagesToAdd.length / 2); i++) {
        masonryBx.insertAdjacentHTML("beforeend", `${imagesToAdd[i]}`);
      }
      masonryBx.classList.add("secons-click");

      $grid.masonry("reloadItems");
      $grid.masonry("layout");
      $grid.imagesLoaded(function () {
        $grid.masonry({
          itemSelector: ".grid-item",
          percentPosition: true,
          columnWidth: ".grid-sizer",
          gutter: ".gutter-sizer",
        });
      });
    }
    setTimeout(addFirstMasonry, 5200);
  } else {
    function addFirstMasonry2() {
      for (
        let i = Math.floor(imagesToAdd.length / 2);
        i <= imagesToAdd.length;
        i++
      ) {
        masonryBx.insertAdjacentHTML("beforeend", `${imagesToAdd[i]}`);
      }
      $grid.masonry("reloadItems");
      $grid.masonry("layout");
      $grid.imagesLoaded(function () {
        $grid.masonry({
          itemSelector: ".grid-item",
          percentPosition: true,
          columnWidth: ".grid-sizer",
          gutter: ".gutter-sizer",
        });
      });
      lastBtn.remove();
    }
    setTimeout(addFirstMasonry2, 5200);
  }

  $grid.masonry("reloadItems");
  $grid.masonry("layout");
  $grid.imagesLoaded(function () {
    $grid.masonry({
      itemSelector: ".grid-item",
      percentPosition: true,
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
    });
  });
});
// jQUERY
