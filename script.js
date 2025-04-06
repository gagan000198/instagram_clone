


  const likeBtn = document.getElementById("likeBtn");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("fas"); // solid heart
    likeBtn.classList.toggle("far"); // regular heart
    likeBtn.style.color = likeBtn.classList.contains("fas") ? "red" : "white";
  });

