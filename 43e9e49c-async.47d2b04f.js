(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["43e9e49c"],{"43e9e49c":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var i=n("e52de471");n("f087bf91");var r=n("f579133b"),a=n("0d1c854e"),o=n("e6168191");let l=(0,o.createStyles)(({prefixCls:e,css:t})=>({linearGradientButton:t`
    &.${e}-btn-primary:not([disabled]):not(.${e}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `}));var s=()=>{let{styles:e}=l();return(0,i.jsx)(a.ConfigProvider,{button:{className:e.linearGradientButton},children:(0,i.jsxs)(a.Space,{children:[(0,i.jsx)(a.Button,{type:"primary",size:"large",icon:(0,i.jsx)(r.AntDesignOutlined,{}),children:"Gradient Button"}),(0,i.jsx)(a.Button,{size:"large",children:"Button"})]})});};}}]);