class GLSLViewer {
  constructor(container, glsl) {
    // properties
    this.camera   = new THREE.Camera();
    this.scene    = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.uniforms = {
      resolution: { type:"v2", value:new THREE.Vector2() },
      mouse:      { type:"v2", value:new THREE.Vector2() },
      time:       { type:"f",  value:1 }
    };
    this.timeDisplay = document.getElementById('time');
    this.overlay = document.getElementById('overlay');
    
    // set shaders
    this.scene.add(new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: "void main(){gl_Position=vec4(position,1.);}",
      fragmentShader: glsl.textContent
    })));
    this.camera.position.z = 1;
    
    // dom and event
    container.appendChild(this.renderer.domElement);
    window.addEventListener('resize', ()=>this.adjustScreen());
    document.getElementById('play').addEventListener('click', ()=>this.pause());
    document.getElementById('stop').addEventListener('click', ()=>this.stop());
    this.overlay.addEventListener('click', ()=>this.pause());
    document.getElementById('resolution').addEventListener('change', (e)=>{
      this.resolution = parseFloat(e.target.value);
      this.adjustScreen();
      this.start();
    });
    container.addEventListener('mousemove', (e)=>{
      this.uniforms.mouse.value.x = e.clientX / (this.renderer.domElement.width*this.resolution);
      this.uniforms.mouse.value.y = 1-e.clientY / (this.renderer.domElement.height*this.resolution);
    });
    
    // initialize footer
    this.resolution = glsl.getAttribute("initialResolution") || 2;
    this.initialTime = glsl.getAttribute("initialTime") || 0;
    document.getElementById('link').setAttribute("href", "https://glslfan.com/?channel="+glsl.getAttribute("channel"));
    document.getElementById('title').textContent = glsl.getAttribute("title") + " by " + glsl.getAttribute("user") + " - glslfan.com ";
    let options = document.getElementById('resolution').children;
    for (let i=0; i<options.length; i++) {
      if (options[i].value == this.resolution) options[i].setAttribute("selected","selected")
    }

    // start
    this.adjustScreen();
    this.stop();
  }
  
  start() {
    this.uniforms.time.value = parseFloat(this.timeDisplay.value);
    this.prevtime = performance.now();
    this.animate();
  }
  
  stop() {
    this.timeDisplay.value = this.initialTime;
    this.paused = true;
    this.start();
    this.overlay.className = "";
  }
  
  pause() {
    this.paused = !this.paused;
    document.getElementById('play').className = this.paused ? "paused" : "";
    this.overlay.className = "hidden";
    this.start();
  }
  
  adjustScreen() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio / this.resolution);
    this.uniforms.resolution.value.x = this.renderer.domElement.width;
    this.uniforms.resolution.value.y = this.renderer.domElement.height;
  }
  
  animate() {
    const now = performance.now(),
          delta = (now - this.prevtime) / 1000;
    this.prevtime = now;
    this.uniforms.time.value += delta;
    this.renderer.render( this.scene, this.camera );
    this.timeDisplay.value = String(Math.floor(this.uniforms.time.value * 100) / 100);
    if (!this.paused) requestAnimationFrame( this.animate.bind(this) );
  }
}

let viewer = new GLSLViewer(
  document.getElementById('container'), 
  document.getElementById('glslcode')
);