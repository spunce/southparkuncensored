  /* Light YouTube Embeds by @labnol */
  /* Web: http://labnol.org/?p=27941 */
  document.addEventListener("DOMContentLoaded",
    function () {
      var div, n,
        v = document.getElementsByClassName("peertube-player");
      for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = labnolThumb(v[n].dataset.id);
        div.onclick = labnolIframe;
        v[n].appendChild(div);
      }
    });

  function labnolThumb(id) {
    var thumb = '<img alt="Thumbnail of banned South Park Episode." src="https://www.southparkuncensored.com/img/South-Park-Movie-1200x676.jpg">',
      play = '<div class="play"></div>';
    return thumb/* .replace("ID", id) */ + play;
  }

  function labnolIframe() {
    var iframe = document.createElement("iframe");
    // var embed = "https://vault.mle.party/videos/embed/watch/ID?subtitle=en&autoplay=1";
    var embed = "https://mega.nz/embed/ID";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    // iframe.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
    // iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    // iframe.setAttribute("allow", "encrypted-media; picture-in-picture");
    this.parentNode.replaceChild(iframe, this);
  }