const tracks = document.querySelectorAll(".track-card");

tracks.forEach((track) => {
  const button = track.querySelector(".play-toggle");
  button.addEventListener("click", () => {
    tracks.forEach((item) => item.classList.remove("is-active"));
    track.classList.add("is-active");
  });
});
