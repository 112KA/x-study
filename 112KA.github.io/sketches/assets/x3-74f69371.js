var T=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var i=(a,e,t)=>(T(a,e,"read from private field"),t?t.call(a):e.get(a)),u=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},h=(a,e,t,n)=>(T(a,e,"write to private field"),n?n.call(a,t):e.set(a,t),t);import{E as F,L as _,G as k,D as E,K as O,W as R,T as z,a as B,M as G,S as H,b as M,c as N,d as W,R as K,F as $,e as S,I}from"./vendor-7744dd83.js";import{D as P,a as C}from"./x-d4d866bf.js";const w="[AssetLoader]";var c,d,m,f,b,p;class Y extends F{constructor({dracoDecoderPath:t,ktx2TranscoderPath:n}){super();u(this,c,void 0);u(this,d,void 0);u(this,m,void 0);u(this,f,void 0);u(this,b,void 0);u(this,p,void 0);h(this,d,[]),h(this,m,new P),this.models={},this.textures={},h(this,f,()=>{}),h(this,b,(r,o,l)=>{this.dispatchEvent({type:"progress",url:r,progress:o/l})}),h(this,p,r=>{}),h(this,c,new _(i(this,f),i(this,b),i(this,p)));const s=new k(i(this,c));if(t!==void 0){const r=new E().setDecoderPath(t);s.setDRACOLoader(r)}if(n!==void 0){const r=new O(i(this,c)).setTranscoderPath(n).detectSupport(new R);s.setKTX2Loader(r),r.workerConfig.etc1Supported=!1,i(this,c).addHandler(/\.(ktx2)$/i,r)}i(this,c).addHandler(/\.(gltf|glb)$/i,s),i(this,c).addHandler(/\.(png|jpg)$/i,new z(i(this,c)))}addResources(t){h(this,d,i(this,d).concat(t))}async load(){if(i(this,d).length===0){console.warn(w,"no resorces");return}console.groupCollapsed("Asset load info");let t,n;for(const{name:s,path:r}of i(this,d)){console.log(w,"load",s,r);const o=i(this,c).getHandler(r);C(o),t=await o.loadAsync(`${r}`),console.log({loadedObject:t}),t instanceof B?n=this.textures:n=this.models,n[s]=t}console.groupEnd(),this.dispatchEvent({type:"loaded"})}}c=new WeakMap,d=new WeakMap,m=new WeakMap,f=new WeakMap,b=new WeakMap,p=new WeakMap;const U=`

#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

        #ifdef USE_INSTANCING
            
            int j = 4 * int(i);
            vec4 v1 = texelFetch(boneTexture, ivec2( j, gl_InstanceID ), 0);
            vec4 v2 = texelFetch(boneTexture, ivec2( j + 1, gl_InstanceID ), 0);
            vec4 v3 = texelFetch(boneTexture, ivec2( j + 2, gl_InstanceID ), 0);
            vec4 v4 = texelFetch(boneTexture, ivec2( j + 3, gl_InstanceID ), 0);
            
        #else

            float j = i * 4.0;
            float x = mod( j, float( boneTextureSize ) );
            float y = floor( j / float( boneTextureSize ) );

            float dx = 1.0 / float( boneTextureSize );
            float dy = 1.0 / float( boneTextureSize );

            y = dy * ( y + 0.5 );

            vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
            vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
            vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
            vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

        #endif

        mat4 bone = mat4( v1, v2, v3, v4 );

        return bone;

	}

#endif
`;class X extends G{onBeforeCompile(e,t){e.vertexShader=e.vertexShader.replace(`#include <skinning_pars_vertex>
`,U)}}const A=new M;class D extends H{constructor(e=[],t=[],n=1){super(e,t),this._count=n,this.boneMatrices=new Float32Array(e.length*16*this._count)}init(){const e=this.bones,t=this.boneInverses;if(t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new M)}}computeBoneTexture(){const e={width:this.bones.length*4,height:N.ceilPowerOfTwo(this._count)};e.height=Math.max(e.height,4);const t=new Float32Array(e.width*e.height*4);t.set(this.boneMatrices);const n=new W(t,e.width,e.height,K,$);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e.width,this}updateAt(e){const t=this.bones,n=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let o=0,l=t.length;o<l;o++){const v=t[o].matrixWorld;A.multiplyMatrices(v,n[o]),A.toArray(s,16*(o+e*t.length))}r!==null&&(r.needsUpdate=!0)}update(){}}const q=new M;class L extends S{constructor(e,t,n=1){super(e,t),this.count=n,this.instanceColor=null,this.isInstancedMesh=!0,this.frustumCulled=!1,this.instanceMatrix=new I(new Float32Array(n*16),16);for(let s=0;s<n;s++)this.setMatrixAt(s,q)}copy(e){if(super.copy(e),e.isInstancedMesh){const t=e;this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count}return this}bind(e,t){if(!(e instanceof D)){console.warn("must extend InstancedSkeleton");return}super.bind(e,t)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16),this.instanceMatrix.needsUpdate=!0}getColorAt(e,t){C(this.instanceColor),t.fromArray(this.instanceColor.array,e*3)}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new I(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}}class x{static convertToInstancedObject(e,t){const n=x.replaceInstancedObject(e,t),s=new Map,r=new Map;return x.parallelTraverse(e,n,function(o,l){s.set(l,o),r.set(o,l)}),n.traverse(o=>{if(o instanceof L){const l=o,j=s.get(o).skeleton.bones;l.skeleton.bones=j.map(y=>{const g=r.get(y);return g==null||g.matrixWorld.copy(y.matrixWorld),g})}}),n}static replaceInstancedObject(e,t){let n;if(e instanceof S){const{geometry:s,material:r}=e;n=new L(s,r,t).copy(e),n.material=new X({map:r.map});const{bones:o,boneInverses:l}=e.skeleton,v=new D(o,l,t);n.bind(v,e.bindMatrix)}else n=e.clone(!1);for(let s=0;s<e.children.length;s++){const r=x.replaceInstancedObject(e.children[s],t);n.add(r)}return n}static parallelTraverse(e,t,n){n(e,t);for(let s=0;s<e.children.length;s++)x.parallelTraverse(e.children[s],t.children[s],n)}}export{Y as A,L as I,x as a};
