(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["85c55c70"],{"85c55c70":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var i=n("e52de471"),l=n("f579133b"),o=n("0d1c854e"),a=n("e6168191");let r=(0,a.createStyles)(({token:e,css:t})=>{let{colorIcon:n,colorText:i,iconCls:l}=e;return{editButton:t`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: ${e.marginXS}px;
        ${l} {
          display: block;
          color: ${n};
          font-size: ${e.fontSizeLG}px;
          transition: all ${e.motionDurationSlow};
          &:hover {
            color: ${i};
          }
        }
      }
    `};});var d=({title:e,filename:t})=>{let{styles:n}=r();return(0,i.jsx)(o.Tooltip,{title:e,children:(0,i.jsx)("a",{className:n.editButton,href:`https://github.com/ant-design/ant-design/edit/master/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(l.EditOutlined,{})})});};}}]);