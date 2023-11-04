f = 0;

function show() {
  if (f == 0) {
    all.className = "circle";
    f = 1;
  } else if (f == 1) {
    all.className = "star";
    f = 2;
  } else if (f == 2) {
    all.className = "cube";
    f = 0;
  }
}

all.onmousemove = function (e) {
  big.style.backgroundPosition = e.pageX;
};
