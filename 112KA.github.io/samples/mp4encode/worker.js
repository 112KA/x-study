importScripts(
  "https://unpkg.com/h264-mp4-encoder@1.0.12/embuild/dist/h264-mp4-encoder.web.js"
);

var encoder, width, height, pixels, nEncoded;

onmessage = async function (event) {
  var data = event.data,
    ret = {
      command: data.command,
    };
  switch (data.command) {
    case "initialize":
      if (!encoder) {
        width = data.width;
        height = data.height;
        pixels = new Uint8Array(width * height * 4);

        encoder = await HME.createH264MP4Encoder();
        encoder.width = width;
        encoder.height = height;
        encoder.initialize();

        nEncoded = 0;
      }
      postMessage(ret);
      break;
    case "addframe":
      //readPixelsで読んだpixelは上下逆になるので戻す
      for (var i = 0; i < height; i++) {
        pixels.set(
          data.pixels.slice(i * (width * 4), (i + 1) * (width * 4)),
          (height - i - 1) * width * 4
        );
      }
      encoder.addFrameRgba(pixels);
      ret.nEncoded = ++nEncoded;
      postMessage(ret);
      break;
    case "finalize":
      encoder.finalize();

      var uint8Array = encoder.FS.readFile(encoder.outputFilename);
      ret.encoded = uint8Array;
      ret.outputFilename = encoder.outputFilename;
      ret.width = width;
      ret.height = height;
      postMessage(ret, [uint8Array.buffer]);

      encoder.delete();
      encoder = null;
      break;
  }
};
