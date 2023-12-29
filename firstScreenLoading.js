void (function () {
  var dom = `<div class="first-loading-wrapper">
  <style>
  .first-loading-wrapper{
    position: fixed;
    z-index: 999;
    inset: 0;
    background-color: inherit;
  }
  .first-screen-loading-wrapper {
    --ball-total: 36;
    --ball-size: 10px;
    --container-size: 40vmin;
    --animation-duration: 3s;
    --animation-delay-scale: 5;
    --perspective-scale: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--container-size);
    height: var(--container-size);
  }
  .first-screen-loading-wrapper .dot-group {
    position: absolute;
    width: var(--ball-size);
    height: var(--ball-size);
    top: 50%;
    left: 50%;
    margin-top: calc(var(--ball-size) / -2);
    margin-left: calc(var(--ball-size) / -2);
    transform: rotate(calc(360deg / var(--ball-total) * var(--dot-count)))
      translateY(calc(var(--container-size) / -2));
    perspective: calc(var(--ball-size) * var(--perspective-scale));
    transform-style: preserve-3d;
  }
  .first-screen-loading-wrapper .dot-group::before,
  .first-screen-loading-wrapper .dot-group::after {
    position: absolute;
    top: -100%;
    content: "";
    background-color: var(--ball-color-1, black);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-name: dot1Move;
    animation-duration: var(--animation-duration);
    animation-iteration-count: infinite;
    animation-delay: calc(
      -1 * var(--animation-duration) / var(--ball-total) * var(
          --animation-delay-scale
        ) * var(--dot-count)
    );
  }
  .first-screen-loading-wrapper .dot-group::after {
    top: 100%;
    background-color: var(--ball-color-2, white);
    animation-name: dot2Move;
  }
  @keyframes dot1Move {
    25% { transform: translate3d(0, 100%, var(--ball-size)); }
    50% { transform: translate3d(0, 200%, 0); }
    75% { transform: translate3d(0, 100%, calc(var(--ball-size) * -1)); }
  }
  @keyframes dot2Move {
    25% { transform: translate3d(0, -100%, calc(var(--ball-size) * -1)); }
    50% { transform: translate3d(0, -200%, 0); }
    75% { transform: translate3d(0, -100%, var(--ball-size)); }
  }
  </style>
  <div class="first-screen-loading-wrapper">
  ${new Array(36)
    .fill(null)
    .map((_, idx) => `<div class="dot-group" style="--dot-count: ${idx + 1}"></div>`)
    .join('')}
  </div>
</div>`
  var parser = new DOMParser()
  var $document = parser.parseFromString(dom, 'text/html')
  var $loadingWrap = $document.querySelector('.first-loading-wrapper')
  window.addEventListener('DOMContentLoaded', function domLoaded() {
    document.body.appendChild($loadingWrap)
    this.removeEventListener('DOMContentLoaded', domLoaded)
  })
  window.addEventListener('message', function message(e) {
    var data = e.data
    if (data != 'hideFirstLoading') return
    $loadingWrap.remove()
    this.removeEventListener('message', message)
  })
})()
