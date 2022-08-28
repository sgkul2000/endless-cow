document.addEventListener("DOMContentLoaded", function () {
  const segment = document.querySelector(".segment");

  const parent = document.getElementById("wrapper");

  const addSegment = () => {
    parent.appendChild(segment.cloneNode(true));
  };

  const height = window.screen.availHeight;
  const toAppend = Math.ceil(((0.7 * height) / 20 - 5) / 15) - 1;

  for (let i = 0; i < toAppend; i++) {
    addSegment();
  }
  document.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      addSegment();
    }
  });
});
