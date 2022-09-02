"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22483],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Managing Node Templates",weight:7010},s=void 0,p={unversionedId:"reference-guides/user-settings/manage-node-templates",id:"reference-guides/user-settings/manage-node-templates",title:"Managing Node Templates",description:"When you provision a cluster hosted by an infrastructure provider, node templates are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:",source:"@site/docs/reference-guides/user-settings/manage-node-templates.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/manage-node-templates",permalink:"/docs/reference-guides/user-settings/manage-node-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/user-settings/manage-node-templates.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Managing Node Templates",weight:7010},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/docs/reference-guides/user-settings/api-keys"},next:{title:"Managing Cloud Credentials",permalink:"/docs/reference-guides/user-settings/manage-cloud-credentials"}},d={},u=[{value:"Creating a Node Template",id:"creating-a-node-template",level:2},{value:"Updating a Node Template",id:"updating-a-node-template",level:2},{value:"Cloning Node Templates",id:"cloning-node-templates",level:2},{value:"Deleting a Node Template",id:"deleting-a-node-template",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you provision a cluster ",(0,o.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted by an infrastructure provider"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While ",(0,o.kt)("a",{parentName:"li",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provisioning a node pool cluster"),"."),(0,o.kt)("li",{parentName:"ul"},"At any time, from your ",(0,o.kt)("a",{parentName:"li",href:"#creating-a-node-template-from-user-settings"},"user settings"),".")),(0,o.kt)("p",null,"When you create a node template, it is bound to your user profile. Node templates cannot be shared among users. You can delete stale node templates that you no longer user from your user settings."),(0,o.kt)("h2",{id:"creating-a-node-template"},"Creating a Node Template"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one of the cloud providers available. Then follow the instructions on screen to configure the template.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"updating-a-node-template"},"Updating a Node Template"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"RKE1 Configuration > Node Templates"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the node template that you want to edit and click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Edit"),"."),(0,o.kt)("p",{parentName:"li"},"   :::note"),(0,o.kt)("p",{parentName:"li"},"   The default ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," and any node driver, that has fields marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", are required to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider#cloud-credentials"},"cloud credentials"),"."),(0,o.kt)("p",{parentName:"li"},"   :::\n")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the required information and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The node template is updated. All node pools using this node template will automatically use the updated information when new nodes are added."),(0,o.kt)("h2",{id:"cloning-node-templates"},"Cloning Node Templates"),(0,o.kt)("p",null,"When creating new node templates from your user settings, you can clone an existing template and quickly update its settings rather than creating a new one from scratch. Cloning templates saves you the hassle of re-entering access keys for the cloud provider."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the template you want to clone. Then select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Clone"),"."),(0,o.kt)("li",{parentName:"ol"},"Complete the rest of the form.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is cloned and configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"deleting-a-node-template"},"Deleting a Node Template"),(0,o.kt)("p",null,"When you no longer use a node template, you can delete it from your user settings."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one or more template from the list. Then click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),". Confirm the delete when prompted.")))}m.isMDXComponent=!0}}]);