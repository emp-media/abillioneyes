const tracks = document.querySelectorAll(".track-card");

tracks.forEach((track) => {
  const button = track.querySelector(".play-toggle");
  const audio = track.querySelector("audio");

  if (!audio) {
    return;
  }

  button.addEventListener("click", () => {
    const wasPlaying = !audio.paused;

    tracks.forEach((item) => {
      const itemAudio = item.querySelector("audio");
      item.classList.remove("is-active", "is-playing");
      item.querySelector(".play-toggle")?.setAttribute("aria-label", `Play ${item.querySelector("h3")?.textContent ?? "track"}`);

      if (itemAudio && itemAudio !== audio) {
        itemAudio.pause();
        itemAudio.currentTime = 0;
      }
    });

    track.classList.add("is-active");

    if (wasPlaying) {
      audio.pause();
      track.classList.remove("is-playing");
      button.setAttribute("aria-label", `Play ${track.querySelector("h3")?.textContent ?? "track"}`);
      return;
    }

    audio
      .play()
      .then(() => {
        track.classList.add("is-playing");
        button.setAttribute("aria-label", `Pause ${track.querySelector("h3")?.textContent ?? "track"}`);
      })
      .catch(() => {
        track.classList.remove("is-playing");
        button.setAttribute("aria-label", `Play ${track.querySelector("h3")?.textContent ?? "track"}`);
      });
  });

  audio.addEventListener("ended", () => {
    track.classList.remove("is-playing");
    button.setAttribute("aria-label", `Play ${track.querySelector("h3")?.textContent ?? "track"}`);
  });
});
