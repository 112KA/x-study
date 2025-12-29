varying vec2 vUv;
uniform float u_time;

/**
 * Line関数
 * @params uv     位置データ
 * @params speed  波の速さ
 * @params height 周波数の高さ
 * @params col    色データ
 */
vec4 Line(vec2 uv, float speed, float height, vec3 col){
  uv.y += smoothstep(1., 0., abs(uv.x)) * sin(u_time * speed + uv.x * height) * .2;
  return vec4(
    smoothstep(
      .06 * smoothstep(.2, .9, abs(uv.x)), 
      0., 
      abs(uv.y) - .004
    ) * col, 
    1.0) * smoothstep(1., .3, abs(uv.x));
}

void main() {
  vec2 uv = vUv;
  uv -= 0.5; // 中心
  uv.x *= 1.6; // [0:1.6]区画にスケール
  vec4 color = vec4(0.);
  float lattice = 5.0;
  for (float i = 0.; i <= lattice; i += 1.) {
    float lattice = 5.0;
    float t = i / lattice; // [0, 0.25, 0.50, 0.75, 1.0]
    color += Line(
      uv, 
      1. + t,
      4. + t, 
      vec3(
        .2 + t * .7, 
        .2 + t * .4, 
        0.3
      )
    );
}

  gl_FragColor = vec4(color);
}
