import{j as t,a,F as l}from"./emotion-react-jsx-runtime.browser.esm-1cc7cfce.js";import{I as n,i as c,c as p}from"./Icon-f9c015f2.js";import"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-929668a7.js";import"./extends-34e645d9.js";import"./index-8d47fad6.js";const O=p("div",{target:"e1kgyqn92"})({name:"qp2n5j",styles:"color:#666;font-size:12px"});var S={name:"1fizidn",styles:"flex:none;min-width:auto;padding:0;background:#fff;border:1px solid #666;svg{display:block;margin-right:0;width:48px;height:48px;}"};const w=p("li",{target:"e1kgyqn91"})("display:inline-flex;flex-direction:row;align-items:center;flex:0 1 20%;min-width:120px;padding:0px 7.5px 20px;svg{margin-right:10px;width:24px;height:24px;}",e=>e.minimal&&S,";"),L=p("ul",{target:"e1kgyqn90"})({name:"14hrywh",styles:"display:flex;flex-flow:row wrap;list-style:none"}),F={title:"Data Display/Icon",component:n},r={render:()=>t(l,{children:["There are ",Object.keys(c).length," icons",a(L,{children:Object.keys(c).map(e=>t(w,{children:[a(n,{icon:e,"aria-hidden":!0}),a(O,{children:e})]},e))})]})},s={name:"no labels",render:()=>a(L,{children:Object.keys(c).map(e=>a(w,{minimal:!0,children:a(n,{icon:e,"aria-label":e})},e))})},i={render:e=>t(l,{children:["this is an inline ",a(n,{...e})," icon (default)"]}),args:{icon:"facehappy","aria-label":"Happy face"}},o={render:e=>t(l,{children:["this is a block ",a(n,{...e})," icon"]}),args:{icon:"facehappy","aria-label":"Happy face",block:!0}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map(key => <Item key={key}>
            <Icon icon={key} aria-hidden />
            <Meta>{key}</Meta>
          </Item>)}
      </List>
    </>
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'no labels',
  render: () => <List>
      {Object.keys(icons).map(key => <Item minimal key={key}>
          <Icon icon={key} aria-label={key} />
        </Item>)}
    </List>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,k,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <>
      this is an inline <Icon {...args} /> icon (default)
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face'
  }
}`,...(u=(k=i.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var x,I,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <>
      this is a block <Icon {...args} /> icon
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
    block: true
  }
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const N=["Labels","NoLabels","Inline","Block"];export{o as Block,i as Inline,r as Labels,s as NoLabels,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Icon.stories-de7046bc.js.map
