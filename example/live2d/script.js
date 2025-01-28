const Peer = window.Peer;

(async function main() {
  const localVideo = document.getElementById('js-local-stream'),
    localId = document.getElementById('js-local-id'),
    callTrigger = document.getElementById('js-call-trigger'),
    closeTrigger = document.getElementById('js-close-trigger'),
    remoteVideo = document.getElementById('js-remote-stream'),
    remoteId = document.getElementById('js-remote-id');

  var overlay = document.getElementById('overlay');
  var overlayCC = overlay.getContext('2d');

  const localStream = await navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: true,
    })
    .catch(console.error);

  /*********** Code for face tracking *********/

  var ctrack = new clm.tracker();
  var trackingStarted = false;
  localVideo.addEventListener('canplay', startVideo, false);
  // localVideo.addEventListener('canplay', enablestart, false);

  // Render local stream
  localVideo.muted = true;
  localVideo.srcObject = localStream;
  localVideo.playsInline = true;
  // localVideo.src = "franck.mp4"

  // start video
  localVideo.play().catch(console.error);

  const peer = new Peer({
    key: window.__SKYWAY_KEY__,
    debug: 3,
  });

  // Register caller handler
  callTrigger.addEventListener('click', () => {
    // Note that you need to ensure the peer has connected to signaling server
    // before using methods of peer instance.
    if (!peer.open) {
      return;
    }

    const mediaConnection = peer.call(remoteId.value, localStream);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for caller
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer.once('open', id => {
    localId.textContent = id
    // startVideo()
  });

  // Register callee handler
  peer.on('call', mediaConnection => {
    mediaConnection.answer(localStream);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for callee
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer.on('error', console.error);







  function startVideo() {

    // start tracking
    ctrack.init();
    ctrack.start(localVideo);
    trackingStarted = true;
    // start loop to draw face
    drawLoop();
  }

  function drawLoop() {
    requestAnimFrame(drawLoop);
    overlayCC.clearRect(0, 0, localVideo.clientWidth, localVideo.clientHeight);
    //psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
    console.log(ctrack.getCurrentPosition())
    if (ctrack.getCurrentPosition()) {
      ctrack.draw(overlay);
    }
  }
})();