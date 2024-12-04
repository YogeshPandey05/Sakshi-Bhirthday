document.getElementById("surpriseButton").addEventListener("click", function () {
    const surpriseMessage = document.getElementById("surpriseimage");
    if (surpriseMessage.classList.contains("hidden")) {
      surpriseMessage.classList.remove("hidden");
      this.textContent = "I Love You Meri Jaaaannnn! ummmaaa 💖";
    }
    document.getElementById("alter").classList.add("hidden");
  });
  