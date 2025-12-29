precision highp float;

varying vec2 vUv;
uniform sampler2D u_texture0;
uniform sampler2D u_texture1;
uniform float progress;
uniform vec2 gradient;

#define N 10.0

void main() {
  vec2 p = vUv;
  float aspect = 1.0;
  
	float v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));
	v = clamp(v, 0.0, 1.0);
	v = floor(v * 14.0) / 14.0;

  float pv = min(v, 1.0 - v) * 2.0;
  if (pv > 0.0) {
    p -= 0.5;
    vec2 steps = vec2(aspect, 1.0) * N / pv;
    p = (floor(p * steps) + 0.5) / steps;
    p += 0.5;
  }
  
  vec4 c0 = texture2D(u_texture0, p);
  vec4 c1 = texture2D(u_texture1, p);
  
  gl_FragColor = mix(c0, c1, v);
}

