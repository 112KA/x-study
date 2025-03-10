import"./global-BgcujqX7.js";import{n as X,c as Y}from"./x-CdHasm9z.js";import{g as O,h as $,U as H,V as f,i as J,j as K,k as Q,P as ee,l as te,m as ie,W as ne,n as oe,O as se,A as ae,o as M,p as re,q as le,r as S,s as b,t as g,u as D,N as T,B as ce,v as me,w as de,M as ue,x as pe,y as E,z as he,C as L,H as v,J as ve,Q as B,X as xe,Y as fe,Z as ge,I as N,_ as we}from"./vendor-7bT8h9h2.js";class Pe{constructor({renderer:e,scene:t,camera:i}){this.fxaaPass=new O($),this.unrealBloomPass=new H(new f(0,0),1.5,0,0),this.pixelRatio=e.getPixelRatio(),this.effectComposer=new J(e),this.effectComposer.addPass(new K(t,i)),this.effectComposer.addPass(this.unrealBloomPass),this.effectComposer.addPass(this.fxaaPass)}render(){this.effectComposer.render()}resize(e,t){this.effectComposer.setSize(e,t),this.unrealBloomPass.resolution.set(e,t),this.fxaaPass.material.uniforms.resolution.value.set(1/(e*this.pixelRatio),1/(t*this.pixelRatio))}}class ye{constructor({canvas:e}){var i;this.scene=new Q,this.camera=new ee(45,1,10,3e3),this._stats=te(),this.pointLight=new ie(13421772,10,1e3),this.renderer=new ne({canvas:e,antialias:!1,alpha:!1}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(1),this.renderer.shadowMap.type=oe,this.renderer.shadowMap.enabled=!0,this.camera.position.set(0,5,1e3),this._cameraControls=new se(this.camera,this.renderer.domElement);const t=new ae(16777215);this.scene.add(t),this.pointLight.position.y=500,this.pointLight.castShadow=!0,this.pointLight.shadow.camera.near=10,this.pointLight.shadow.camera.far=1e3,this.pointLight.shadow.bias=.001,this.pointLight.shadow.radius=30,this.pointLight.shadow.mapSize.width=1024,this.pointLight.shadow.mapSize.height=1024,this.pointLight.shadow.normalBias=1,this.scene.add(this.pointLight),(i=document.querySelector("body"))==null||i.appendChild(this._stats.dom),this.postprocess=new Pe(this)}render(){this._cameraControls.update(),this.postprocess.render(),this._stats.update()}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.postprocess.resize(e,t)}setDeviceSize(e){switch(console.log({deviceSize:e}),e){case"sm":this.camera.position.set(0,5,2e3);break;case"md":this.camera.position.set(0,5,700);break;case"lg":this.camera.position.set(0,5,500);break}}}class _e extends M{constructor({scene:e}){const t=new re(4e3,4e3,10,10),i=new le({roughness:.7,metalness:1,color:3355443,emissive:0});super(t,i),this.position.y=-150,this.rotation.x=-1.57,this.receiveShadow=!0,e.add(this)}}const ze=`#define GLSLIFY 1
// uniform vec2 resolution;
// uniform sampler2D texturePosition;
uniform sampler2D textureDefaultPosition;
uniform float time;
uniform float speed;
uniform float dieSpeed;
uniform float radius;
uniform float curlSize;
uniform float attraction;
// uniform float rotation;
// uniform float initAnimation;
// uniform vec3 mouse3d;

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
}

#define F4 0.309016994374947451

vec4 simplexNoiseDerivatives (vec4 v) {
    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);

    vec4 i  = floor(v + dot(v, vec4(F4)) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point
    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));

    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance
    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);

    vec3 temp0 = -6.0 * m0 * m0 * values0;
    vec2 temp1 = -6.0 * m1 * m1 * values1;

    vec3 mmm0 = m0 * m0 * m0;
    vec2 mmm1 = m1 * m1 * m1;

    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;
    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;
    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;
    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;

    return vec4(dx, dy, dz, dw) * 49.0;
}

vec3 curl( in vec3 p, in float noiseTime, in float persistence ) {

    vec4 xNoisePotentialDerivatives = vec4(0.0);
    vec4 yNoisePotentialDerivatives = vec4(0.0);
    vec4 zNoisePotentialDerivatives = vec4(0.0);

    for (int i = 0; i < 3; ++i) {

        float twoPowI = pow(2.0, float(i));
        float scale = 0.5 * twoPowI * pow(persistence, float(i));

        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;
        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;
        zNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;
    }

    return vec3(
        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],
        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],
        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]
    );

}

// #pragma glslify: rotate = require(./rotate)

// const vec3 yAxis = vec3(0.0, 1.0, 0.0);
// const float PI = 3.14159;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;

  vec4 positionInfo = texture2D( texturePosition, uv );
  // vec3 position = mix(vec3(0.0, -200.0, 0.0), positionInfo.xyz, smoothstep(0.0, 0.3, initAnimation));
  vec3 position = positionInfo.xyz;
  float life = positionInfo.a - dieSpeed;

  vec3 followPosition = vec3(0., 0., 0.);//mix(vec3(0.0, -(1.0 - initAnimation) * 200.0, 0.0), mouse3d, smoothstep(0.2, 0.7, initAnimation));

  if(life < 0.0) {
      positionInfo = texture2D( textureDefaultPosition, uv );
      position = positionInfo.xyz;
      // position = positionInfo.xyz * (1.0 + sin(time * 15.0) * 0.2 + (1.0 - initAnimation)) * 0.4 * radius;
      // position += followPosition;
      life = 0.5 + fract(positionInfo.w * 21.4131 + time);
  } else {
      vec3 delta = followPosition - position;
      position += delta * (0.005 + life * 0.01) * attraction * (1.0 - smoothstep(50.0, 350.0, length(delta))) *speed;
      position += curl(position * curlSize, time, 0.1 + (1.0 - life) * 0.1) *speed;
      // float mid = 0.5;
      // // float rotation = mod(time / 1000. * 100., PI * 2. * 100.) / 100.;
      // // position = rotate(time/1000., yAxis, position - mid) + mid;
      // position = rotate(rotation, yAxis, position);
  }

  gl_FragColor = vec4(position, life);

}
`,Se=`
uniform sampler2D texturePosition;
#include <common>
#include <shadowmap_pars_vertex>

void main() {
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  // objectNormal.z = 1.;
  
  vec4 positionInfo = texture2D( texturePosition, uv );

  vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );
  vec4 mvPosition = viewMatrix * worldPosition;
  mvPosition += vec4(position * smoothstep(0.0, 0.2, positionInfo.w), 0.0);
  // mvPosition += vec4(position, 0.0);

  gl_Position = projectionMatrix * mvPosition;

  // gl_PointSize = 3.0;
  gl_PointSize = 1300.0 / length( mvPosition.xyz );
  // gl_PointSize = 1300.0 / length( mvPosition.xyz ) * smoothstep(0.0, 0.2, positionInfo.w)

  #include <shadowmap_vertex>
}`,be=`
#include <common>
#include <bsdfs>
#include <packing>
// #include <fog_pars_vertex>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

  // vec3 outgoingLight = mix(color2, color1, smoothstep(0.0, 0.7, vLife));
  vec3 outgoingLight = vec3(1.,1.,1.);
  float shadowMask = getShadowMask();
    outgoingLight *= shadowMask;//pow(shadowMask, vec3(0.75));
// #include <fog_fragment>
// #include <linear_to_gamma_fragment>
  gl_FragColor = vec4( outgoingLight, 1.0 );
}`,De=`uniform sampler2D texturePosition;

varying vec3 vWorldPosition;

void main() {
  
  vec4 positionInfo = texture2D( texturePosition, uv );

  vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );
  vec4 mvPosition = viewMatrix * worldPosition;
  mvPosition += vec4(position * smoothstep(0.0, 0.2, positionInfo.w), 0.0);
  // mvPosition += vec4(position, 0.0);

  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;

  // gl_PointSize = 1300.0 / length(mvPosition.xyz);
  // gl_PointSize = 1300.0 / length( mvPosition.xyz ) * smoothstep(0.0, 0.2, positionInfo.w);
  gl_PointSize = 1.;

}`,G=`
// uniform vec3 lightPos;
// #define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>

void main () {
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );
	// gl_FragColor = vec4(0.,0.,0.,1.);
	// gl_FragColor = packDepthToRGBA( 0. );
	// gl_FragColor = packDepthToRGBA( 100./1000. );
}`,Ie=`#include <common>
#include <shadowmap_pars_vertex>

attribute float instanceIndex;
attribute vec3 color;

uniform sampler2D texturePosition;
uniform float size;
uniform float distance;

varying vec3 vColor;
varying float vDistance;

void main() {
  vColor = color;

  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  
  vec2 textureUv;
  textureUv.x = mod(instanceIndex, (size - 1.));
  textureUv.y = float(instanceIndex / (size -1.));
  textureUv /= (size - 1.);
  
  vec4 positionInfo = texture2D( texturePosition, textureUv );

  // vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );
  vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );
  vec4 mvPosition = viewMatrix * worldPosition;
  vDistance = abs(distance - -mvPosition.z) / distance;
  float scale = 1. + vDistance * 2.0;
  mvPosition += vec4(position * scale * smoothstep(0.0, 1.0, positionInfo.w), 0.0);

  gl_Position = projectionMatrix * mvPosition;

  #include <shadowmap_vertex>
}`,Me=`
#include <common>
#include <bsdfs>
#include <packing>
// #include <fog_pars_vertex>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

varying vec3 vColor;
varying float vDistance;

void main() {

  vec3 outgoingLight = vColor;
  float shadowMask = getShadowMask();
    outgoingLight *= shadowMask;//pow(shadowMask, vec3(0.75));
  gl_FragColor = vec4( outgoingLight, (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)) );
  // gl_FragColor = vec4( outgoingLight, 0.1 );
}`,Ce=`attribute float instanceIndex;

uniform sampler2D texturePosition;
uniform float size;

varying vec3 vWorldPosition;

void main() {
  
  vec2 textureUv;
  textureUv.x = mod(instanceIndex, (size - 1.));
  textureUv.y = float(instanceIndex / (size -1.));
  textureUv /= (size - 1.);
  
  vec4 positionInfo = texture2D( texturePosition, textureUv );

  vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );
  vec4 mvPosition = viewMatrix * worldPosition;
  // mvPosition += vec4(position.xyz * smoothstep(0.0, 0.2, positionInfo.w), 0.0);
  mvPosition += vec4(position.xyz * smoothstep(0.0, 1.0, positionInfo.w), 0.0);
  // mvPosition += vec4(position, 0.0);

  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;
}`,Ae={fragment:`${ze}`},_={vertex:Se,fragment:be},z={vertex:De,fragment:G},k={vertex:Ie,fragment:Me},R={vertex:Ce,fragment:G},Z=256;class A extends S{constructor(e={}){e.uniforms=b.merge([{texturePosition:{type:"t",value:void 0},referencePosition:{type:"v3",value:new g},nearDistance:{type:"f",value:10},farDistance:{type:"f",value:1e3},size:{type:"f",value:0}},D.common]),e.blending=T,super(e),this.referencePosition=new g,this.isMeshDistanceMaterial=!0}}class Fe{constructor(e=new f,t=new f){this.start=e,this.end=t,this.set(e,t)}set(e,t){this.start=e,this.end=t}distance(){return this.start.distanceTo(this.end)}delta(e){return e.subVectors(this.end,this.start)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}}const x=new Fe;class Te{constructor(e){this._shapes=e,this._lines=[],this._cumulativeTotal=0,this._distributions=[];for(const n of this._shapes)this._buildShpae(n);const t=this._distributions.reduce((n,a)=>Number(n)+a.length,0);this._distribution=new Float32Array(t);let i=0;for(const n of this._distributions)this._distribution.set(n,i),i+=n.length}_buildShpae(e){const{shape:i,holes:n}=e.extractPoints(12);let a;a=new Float32Array(i.length-1);for(let o=0;o<i.length-1;o++)x.set(i[o],i[o+1]),this._cumulativeTotal+=x.distance(),a[o]=this._cumulativeTotal,this._lines.push([i[o],i[o+1]]);this._distributions.push(a);for(let o=0,l=n.length;o<l;o++){const r=n[o];a=new Float32Array(r.length-1);for(let s=0;s<r.length-1;s++)x.set(r[s],r[s+1]),this._cumulativeTotal+=x.distance(),a[s]=this._cumulativeTotal,this._lines.push([r[s],r[s+1]]);this._distributions.push(a)}}sample(e){const t=this._distribution[this._distribution.length-1],i=this._binarySearch(Math.random()*t);return x.set(this._lines[i][0],this._lines[i][1]),x.at(Math.random(),e),e.z=0,this}_binarySearch(e){const t=this._distribution;let i=0,n=t.length-1,a=-1;for(;i<=n;){const o=Math.ceil((i+n)/2);if(o===0||t[o-1]<=e&&t[o]>e){a=o;break}e<t[o]?n=o-1:i=o+1}return a}getCenterOffset(){const e=new f,t=new ce;let i=[];for(const n of this._shapes)i=i.concat(n.getPoints());return t.setFromPoints(i),t.getCenter(e),e}}const Le=new me().parse(de),j=Z,Be=j*j;class U{constructor(e,t,i){var r;this.text=e,this.size=150,this.material=new ue({color:0,opacity:.8,transparent:!0,side:pe});const n=Le.generateShapes(e,this.size);this.sampler=new Te(n),this.geometry=new E(n),this.geometry.computeBoundingBox(),this.mesh=new M(this.geometry,this.material),this.mesh.visible=!1,t.add(this.mesh),this.positionTexture=i.createTexture();const a=this.positionTexture.image.data,o=new g,l=new g;(r=this.geometry.boundingBox)==null||r.getCenter(l),this.geometry.translate(-l.x,-l.y,-l.z);for(let s=0;s<Be;s++)this.sampler.sample(o),a.set([o.x-l.x,o.y-l.y,o.z,Math.random()],s*4)}set visible(e){this.mesh.visible=e}}const m=Z,d=m*m;class Ne{constructor({scene:e,renderer:t,camera:i}){this.mesh=this._createInstanceMesh(),e.add(this.mesh),this.computeRenderer=new he(m,m,t),this._textList={text1:new U("bravo!",e,this.computeRenderer),text2:new U("Japan",e,this.computeRenderer)},this._currentText=this._textList.text1,this._currentText.visible=!0,this.positionVariable=this.computeRenderer.addVariable("texturePosition",Ae.fragment,this._currentText.positionTexture);const n=this.positionVariable.material.uniforms;n.textureDefaultPosition={value:this._currentText.positionTexture},n.mouse3d={value:new g},n.speed={value:1},n.dieSpeed={value:.02},n.radius={value:.1},n.curlSize={value:.01},n.attraction={value:-1},n.time={value:0},console.log("positionUniform",n),this.computeRenderer.setVariableDependencies(this.positionVariable,[this.positionVariable]);const a=this.computeRenderer.init();a!==null&&console.error(a)}_createPointMesh(){const e=new L,t=new S({uniforms:b.merge([{texturePosition:{type:"t",value:void 0}},D.lights]),vertexShader:_.vertex,fragmentShader:_.fragment,lights:!0,blending:T}),i=new Float32Array(d*3),n=new Float32Array(d*2),a=new Float32Array(d*3);let o,l;for(let s=0;s<d;s++)o=s%m/m,l=~~(s/m)/m,n.set([o,l],s*2),a.set([0,0,-1],s*3);e.setAttribute("position",new v(i,3)),e.setAttribute("uv",new v(n,2)),e.setAttribute("normal",new v(a,3));const r=new ve(e,t);return r.customDistanceMaterial=new A({vertexShader:z.vertex,fragmentShader:z.fragment}),r.castShadow=!0,r.receiveShadow=!0,r}_createTriangleMesh(){const e=new L,t=new S({uniforms:b.merge([D.lights,{texturePosition:{type:"t",value:void 0}}]),vertexShader:_.vertex,fragmentShader:_.fragment,lights:!0,blending:T,shadowSide:B}),i=new Float32Array(d*3*3),n=new Float32Array(d*2*3),a=new Float32Array(d*3*3),{PI:o,sin:l,cos:r}=Math,s=o*2/3,w=[l(s*2+o),r(s*2+o),0,l(s+o),r(s+o),0,l(s*3+o),r(s*3+o),0];let u,P;for(let p=0;p<d;p++)i.set(w,p*9),u=p%m/m,P=~~(p/m)/m,n.set([u,P,u,P,u,P],p*6),a.set([0,0,1,0,0,1,0,0,1],p*9);e.setAttribute("position",new v(i,3)),e.setAttribute("uv",new v(n,2)),e.setAttribute("normal",new v(a,3));const y=new M(e,t);return y.customDistanceMaterial=new A({vertexShader:z.vertex,fragmentShader:z.fragment}),y.castShadow=!0,y.receiveShadow=!0,y}_createInstanceMesh(){const e=new xe,t=new S({uniforms:b.merge([D.lights,{size:{value:m},texturePosition:{value:void 0},distance:{value:1e3}}]),vertexShader:k.vertex,fragmentShader:k.fragment,lights:!0,transparent:!0,blending:fe,shadowSide:B}),i=new Float32Array(d*1),n=new Float32Array(d*3);for(let s=0;s<d;s++)i[s]=s,n.set([Math.random(),Math.random(),Math.random()],s*3);const a=[],o=5;for(let s=0;s<o*2;s++){const w=s%2===1?1:2,u=s/o*Math.PI;a.push(new f(Math.cos(u)*w,Math.sin(u)*w))}const l=new ge(a);e.copy(new E(l)),e.setAttribute("instanceIndex",new N(i,1,!1,1)),e.setAttribute("color",new N(n,3,!1,1)),e.instanceCount=d;const r=new M(e,t);return r.customDistanceMaterial=new A({vertexShader:R.vertex,fragmentShader:R.fragment}),r.castShadow=!0,r.receiveShadow=!0,r}set textObjectKey(e){const{uniforms:t}=this.positionVariable.material;this._currentText.visible=!1,this._currentText=this._textList[e],t.textureDefaultPosition.value=this._currentText.positionTexture,this._currentText.visible=!0}update(e,t){this.positionVariable.material.uniforms.time.value+=e*.001,this.computeRenderer.compute();const i=this.computeRenderer.getCurrentRenderTarget(this.positionVariable).texture;this.mesh.material.uniforms.texturePosition.value=i,this.mesh.customDistanceMaterial.uniforms.texturePosition.value=i}setDeviceSize(e){console.log({deviceSize:e}),e==="sm"?this.mesh.material.uniforms.distance.value=2e3:this.mesh.material.uniforms.distance.value=1e3}}class ke{constructor(e,t){this._folder=e.addFolder({title:"Light",expanded:!1}),this._folder.addInput(t.position,"y",{min:200,max:800,step:10})}}class Re{constructor(e,t){this._particle=t,this._folder=e.addFolder({title:"Particle",expanded:!1});const{uniforms:i}=t.positionVariable.material;this._folder.addInput(i.speed,"value",{label:"speed",min:0,max:1,step:.1}),this._folder.addInput(i.dieSpeed,"value",{label:"dieSpeed",min:.001,max:.5,step:.001}),this._folder.addInput(i.radius,"value",{label:"radius",min:0,max:.3,step:.01}),this._folder.addInput(i.curlSize,"value",{label:"curlSize",min:.001,max:.05,step:.001}),this._folder.addInput(i.attraction,"value",{label:"attraction",min:-2,max:2,step:.1}),this._folder.addBlade({view:"list",label:"text",options:[{text:"text1",value:"text1"},{text:"text2",value:"text2"}],value:"text1"}).on("change",n=>{this._particle.textObjectKey=n.value})}}class je{constructor(e,t){this._folder=e.addFolder({title:"PostProcess",expanded:!1}),this._folder.addInput(t.unrealBloomPass,"enabled",{label:"bloom"}),this._folder.addInput(t.unrealBloomPass,"threshold",{min:0,max:1,step:.1}),this._folder.addInput(t.unrealBloomPass,"strength",{min:0,max:3,step:.1}),this._folder.addInput(t.unrealBloomPass,"radius",{min:0,max:1,step:.01}),this._folder.addSeparator(),this._folder.addInput(t.fxaaPass,"enabled",{label:"fxaa"})}}class Ue{constructor({postprocess:e,pointLight:t},i){this._pane=new we.Pane,this._particle=new Re(this._pane,i),this._light=new ke(this._pane,t),this._postprocess=new je(this._pane,e)}}const q=document.getElementById("canvas");X(q);const h=new ye({canvas:q}),C=new Ne(h);new _e(h);new Ue(h,C);const F=new Y;let I;function Ve(){I=Date.now(),W(),V(),window.addEventListener("resize",V),h.setDeviceSize(F.deviceSize),C.setDeviceSize(F.deviceSize),F.addEventListener("change",Ee)}function Ee(c){const{deviceSize:e}=c.detail;h.setDeviceSize(e),C.setDeviceSize(e)}function W(){const c=Date.now(),e=c-I;I=c,C.update(e,I),h.render(),requestAnimationFrame(W)}function V(){h.resize()}Ve();
