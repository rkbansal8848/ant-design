(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["934e2bf1"],{"688a1a81":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var i=l("e52de471"),n=l("0d1c854e");let a=({num:e=3})=>(0,i.jsx)("li",{children:Array.from({length:e}).map((e,t)=>(0,i.jsx)(n.Skeleton.Avatar,{size:"small",active:!0,style:{marginInlineStart:0===t?0:-8}},t))});var r=e=>{let{item:{username:t,url:l}={},loading:r}=e;return r?(0,i.jsx)(a,{}):(null==t?void 0:t.includes("github-actions"))?null:(0,i.jsx)(n.Tooltip,{title:t,children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.Avatar,{size:"small",src:l,alt:t,children:t})})})});};},"934e2bf1":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var i=l("777fffbe"),n=l("e52de471"),a=l("9959ceb9"),r=i._(l("af8527dc")),s=l("e6168191"),o=i._(l("b689591c")),d=l("c40930a6"),u=i._(l("336d3409")),c=i._(l("688a1a81"));let f=(0,s.createStyles)(({token:e,css:t})=>({contributorsList:t`
    margin-top: 120px !important;
  `,listMobile:t`
    margin: 1em 0 !important;
  `,title:t`
    font-size: ${e.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${e.marginXS}px;
  `,list:t`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: -${e.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `}));var m=({filename:e})=>{let{formatMessage:t}=(0,d.useIntl)(),{styles:l}=f(),{isMobile:i}=(0,a.useContext)(u.default);return e?(0,n.jsxs)("div",{className:(0,o.default)(l.contributorsList,{[l.listMobile]:i}),children:[(0,n.jsx)("div",{className:l.title,children:t({id:"app.content.contributors"})}),(0,n.jsx)(r.default,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:e,className:l.list,renderItem:(e,t)=>(0,n.jsx)(c.default,{item:e,loading:t},null==e?void 0:e.url)})]}):null;};}}]);