var T=s=>{throw TypeError(s)};var y=(s,t,e)=>t.has(s)||T("Cannot "+e);var i=(s,t,e)=>(y(s,t,"read from private field"),e?e.call(s):t.get(s)),x=(s,t,e)=>t.has(s)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),l=(s,t,e,n)=>(y(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e);import{E as j,L as D,G as E,D as F,K as O,W as R,T as z,a as B,R as G,M as H,S as U,b as M,c as $,d as N,e as P,F as W,f as k,I as w}from"./vendor-7bT8h9h2.js";import{u as K,n as C}from"./x-CdHasm9z.js";const A="[AssetLoader]";var c,h,m,f,p,b;class Z extends j{constructor(){super();x(this,c);x(this,h);x(this,m);x(this,f);x(this,p);x(this,b);l(this,h,[]),l(this,m,new K),this.models={},this.textures={},l(this,f,(a,u,d)=>{this.dispatchEvent({type:"progress",url:a,progress:u/d})}),l(this,p,()=>{}),l(this,b,a=>{});const e=`https://unpkg.com/three@0.${G}.x`;l(this,c,new D(i(this,p),i(this,f),i(this,b)));const n=new E(i(this,c)),r=new F().setDecoderPath(`${e}/examples/jsm/libs/draco/gltf/`);n.setDRACOLoader(r);const o=new O(i(this,c)).setTranscoderPath(`${e}/examples/jsm/libs/basis/`).detectSupport(new R);n.setKTX2Loader(o),o.workerConfig.etc1Supported=!1,i(this,c).addHandler(/\.(ktx2)$/i,o),i(this,c).addHandler(/\.(gltf|glb)$/i,n),i(this,c).addHandler(/\.(png|jpg)$/i,new z(i(this,c)))}addResources(e){l(this,h,i(this,h).concat(e))}async load(){if(i(this,h).length===0){console.warn(A,"no resorces");return}console.groupCollapsed("Asset load info");let e;for(const{name:n,path:r}of i(this,h)){console.log(A,"load",n,r);const o=i(this,c).getHandler(r);C(o);const a=await o.loadAsync(`${r}`);console.log({loadedObject:a}),a instanceof B?e=this.textures:e=this.models,e[n]=a}console.groupEnd(),this.dispatchEvent({type:"loaded"})}}c=new WeakMap,h=new WeakMap,m=new WeakMap,f=new WeakMap,p=new WeakMap,b=new WeakMap;const X=`

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
`;class V extends H{onBeforeCompile(t,e){t.vertexShader=t.vertexShader.replace(`#include <skinning_pars_vertex>
`,X)}}const S=new M;class _ extends U{constructor(t=[],e=[],n=1){super(t,e),this._count=n,this.boneMatrices=new Float32Array(t.length*16*this._count)}init(){const t=this.bones,e=this.boneInverses;if(e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new M)}}computeBoneTexture(){const t={width:this.bones.length*4,height:$.ceilPowerOfTwo(this._count)};t.height=Math.max(t.height,4);const e=new Float32Array(t.width*t.height*4);e.set(this.boneMatrices);const n=new N(e,t.width,t.height,P,W);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t.width,this}updateAt(t){const{bones:e,boneInverses:n,boneMatrices:r,boneTexture:o}=this;for(let a=0,u=e.length;a<u;a++){const d=e[a].matrixWorld;S.multiplyMatrices(d,n[a]),S.toArray(r,16*(a+t*e.length))}o!==null&&(o.needsUpdate=!0)}update(){}}const q=new M;class L extends k{constructor(t,e,n=1){super(t,e),this.count=n,this.instanceColor=null,this.isInstancedMesh=!0,this.frustumCulled=!1,this.instanceMatrix=new w(new Float32Array(n*16),16);for(let r=0;r<n;r++)this.setMatrixAt(r,q)}copy(t){if(super.copy(t),t.isInstancedMesh){const e=t;this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count}return this}bind(t,e){if(!(t instanceof _)){console.warn("must extend InstancedSkeleton");return}super.bind(t,e)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16),this.instanceMatrix.needsUpdate=!0}getColorAt(t,e){C(this.instanceColor),e.fromArray(this.instanceColor.array,t*3)}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new w(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}}const v={convertToInstancedObject(s,t){const e=v.replaceInstancedObject(s,t),n=new Map,r=new Map;return v.parallelTraverse(s,e,(o,a)=>{n.set(a,o),r.set(o,a)}),e.traverse(o=>{if(o instanceof L){const a=o,d=n.get(o).skeleton.bones;a.skeleton.bones=d.map(I=>{const g=r.get(I);return g==null||g.matrixWorld.copy(I.matrixWorld),g})}}),e},replaceInstancedObject(s,t){let e;if(s instanceof k){const{geometry:n,material:r}=s,o=new L(n,r,t).copy(s);o.material=new V({map:r.map});const{bones:a,boneInverses:u}=s.skeleton,d=new _(a,u,t);o.bind(d,s.bindMatrix),e=o}else e=s.clone(!1);for(let n=0;n<s.children.length;n++){const r=v.replaceInstancedObject(s.children[n],t);e.add(r)}return e},parallelTraverse(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)v.parallelTraverse(s.children[n],t.children[n],e)}};export{Z as A,L as I,v as a};
