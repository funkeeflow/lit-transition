(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,e,n){"use strict";n.r(e),n.d(e,"Comp",(function(){return o})),n.d(e,"code",(function(){return c}));var i=n(5),s=n(7);const r=["Another",i.c`<i>one</i>`,"bites","the",i.c`<b>dust</b>`,"Hey,","I'm","gonna","get","you","too"];class o extends i.a{static get properties(){return{i:Number}}connectedCallback(){super.connectedCallback(),this.interval=setInterval(()=>this.i=((this.i||0)+1)%r.length,1200)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval)}render(){return Object(s.transition)(r.map(t=>i.c`<b>${t}</b>`)[this.i],Object(s.slide)({x:"300px"}))}}const c="\nimport { LitElement, html } from 'lit-element';\nimport { transition, slide } from 'lit-transition';\n\n// list of renderable templates\nconst items = [\n  'Another', html`<i>one</i>`, 'bites', 'the', html`<b>dust</b>`,\n  'Hey,', 'I\\'m', 'gonna', 'get', 'you', 'too'\n];\n\nexport class Comp extends LitElement {\n  // this.i is used to cycle through items\n  static get properties() { return { i: Number } }\n\n  // helper to set up periodic updates to this.i\n  connectedCallback() {\n    super.connectedCallback();\n    // toggle every second\n    this.interval = setInterval(() => this.i = ((this.i||0)+1)%items.length, 1200);\n  }\n  // cleans up on unmount\n  disconnectedCallback(){\n    super.disconnectedCallback();\n    clearInterval(this.interval);\n  }\n\n  render() {\n    // cycle through items\n    return transition(\n      items.map(item => html`<b>${item}</b>`)[this.i],\n      slide({x:'300px'})\n    )\n  } \n}\n"}}]);
//# sourceMappingURL=4.js.map