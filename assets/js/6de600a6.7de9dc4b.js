"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33620],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,p=g["".concat(u,".").concat(m)]||g[m]||d[m]||o;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Alertmanager Configuration",weight:1},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",title:"Alertmanager Configuration",description:"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",tags:[],version:"current",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Alertmanager Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Configuration",permalink:"/pages-for-subheaders/advanced-configuration"},next:{title:"Prometheus Configuration",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"}},c={},d=[{value:"About the Alertmanager Custom Resource",id:"about-the-alertmanager-custom-resource",level:2},{value:"Deeply Nested Routes",id:"deeply-nested-routes",level:3},{value:"Multiple Alertmanager Replicas",id:"multiple-alertmanager-replicas",level:3}],g={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications."),(0,o.kt)("p",null,"When Receivers and Routes are updated, the monitoring application will automatically update the Alertmanager custom resource to be consistent with those changes."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#3-how-alertmanager-works"},"this section.")))),(0,o.kt)("h2",{id:"about-the-alertmanager-custom-resource"},"About the Alertmanager Custom Resource"),(0,o.kt)("p",null,"By default, Rancher Monitoring deploys a single Alertmanager onto a cluster that uses a default Alertmanager Config Secret."),(0,o.kt)("p",null,"You may want to edit the Alertmanager custom resource if you would like to take advantage of advanced options that are not exposed in the Rancher UI forms, such as the ability to create a routing tree structure that is more than two levels deep."),(0,o.kt)("p",null,"It is also possible to create more than one Alertmanager in a cluster, which may be useful if you want to implement namespace-scoped monitoring. In this case, you should manage the Alertmanager custom resources  using the same underlying Alertmanager Config Secret."),(0,o.kt)("h3",{id:"deeply-nested-routes"},"Deeply Nested Routes"),(0,o.kt)("p",null,"While the Rancher UI only supports a routing tree that is two levels deep, you can configure more deeply nested routing structures by editing the Alertmanager YAML."),(0,o.kt)("h3",{id:"multiple-alertmanager-replicas"},"Multiple Alertmanager Replicas"),(0,o.kt)("p",null,"As part of the chart deployment options, you can opt to increase the number of replicas of the Alertmanager deployed onto your cluster. The replicas can all be managed using the same underlying Alertmanager Config Secret."),(0,o.kt)("p",null,"This Secret should be updated or modified any time you want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add in new notifiers or receivers"),(0,o.kt)("li",{parentName:"ul"},"Change the alerts that should be sent to specific notifiers or receivers"),(0,o.kt)("li",{parentName:"ul"},"Change the group of alerts that are sent out")),(0,o.kt)("p",null,"By default, you can either choose to supply an existing Alertmanager Config Secret (i.e. any Secret in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace) or allow Rancher Monitoring to deploy a default Alertmanager Config Secret onto your cluster."),(0,o.kt)("p",null,"By default, the Alertmanager Config Secret created by Rancher will never be modified or deleted on an upgrade or uninstall of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart. This restriction prevents users from losing or overwriting their alerting configuration when executing operations on the chart."),(0,o.kt)("p",null,"For more information on what fields can be specified in the Alertmanager Config Secret, please look at the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager docs.")),(0,o.kt)("p",null,"The full spec for the Alertmanager configuration file and what it takes in can be found ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"here.")))}m.isMDXComponent=!0}}]);