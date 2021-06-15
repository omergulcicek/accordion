document.querySelectorAll(".accordion").forEach(a => {
  a.className.indexOf("multi") < 0 &&
  a.querySelectorAll("summary").forEach(s => {
    s.addEventListener("click", () => {
      a.querySelectorAll("details").forEach(e => e.removeAttribute("open"))
    })
  })
})
