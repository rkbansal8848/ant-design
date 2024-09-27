(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d95cc369"],{d95cc369:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=l("e52de471");l("ef6442be");var r=l("0d1c854e"),a=l("e6168191");let o=(0,a.createStyles)(({css:e})=>({primary:e`
    background: #5794f7;
    border-color: blue;
    color: wheat;
  `,default:e`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,dashed:e`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,text:e`
    color: gray;
  `,link:e`
    color: blue;
  `})),s=(0,a.createStyles)(({css:e})=>({wrapper:e`
    .ant-btn-primary {
      color: #ec5b56;
    }
    .ant-btn-default {
      color: orange;
    }
    .ant-btn-dashed {
      color: #3976f6;
    }
    .ant-btn-text {
      color: green;
    }
    .ant-btn-link {
      color: #0e98aa;
    }
  `}));var d=()=>{let{styles:e}=o(),{styles:t}=s();return(0,n.jsxs)(r.Flex,{vertical:!0,gap:"middle",children:[(0,n.jsxs)(r.Flex,{gap:"small",children:[(0,n.jsx)(r.ConfigProvider,{theme:{token:{colorPrimary:"red"}},children:(0,n.jsx)(r.Button,{type:"link",children:"Link Button"})}),(0,n.jsx)(r.Button,{type:"link",children:"Link Button"})]}),(0,n.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,n.jsx)(r.Button,{type:"primary",className:e.primary,children:"Primary Button"}),(0,n.jsx)(r.Button,{type:"default",className:e.default,children:"Default Button"}),(0,n.jsx)(r.Button,{type:"dashed",className:e.dashed,children:"Dashed Button"}),(0,n.jsx)(r.Button,{type:"text",className:e.text,children:"Text Button"}),(0,n.jsx)(r.Button,{type:"link",className:e.link,children:"Link Button"})]}),(0,n.jsxs)(r.Flex,{gap:"small",wrap:!0,className:t.wrapper,children:[(0,n.jsx)(r.Button,{type:"primary",children:"Primary Button"}),(0,n.jsx)(r.Button,{type:"default",children:"Default Button"}),(0,n.jsx)(r.Button,{type:"dashed",children:"Dashed Button"}),(0,n.jsx)(r.Button,{type:"text",children:"Text Button"}),(0,n.jsx)(r.Button,{type:"link",children:"Link Button"})]})]});};}}]);