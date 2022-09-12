"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18064],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],l={title:"Rendering the Helm Template in an Air-Gapped Environment",shortTitle:"Air Gap Upgrade",weight:1},o=void 0,p={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",title:"Rendering the Helm Template in an Air-Gapped Environment",description:"These instructions assume you have already followed the instructions for a Kubernetes upgrade on this page, including the prerequisites, up until step 3. Upgrade Rancher.",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",tags:[],version:"current",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Rendering the Helm Template in an Air-Gapped Environment",shortTitle:"Air Gap Upgrade",weight:1},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},next:{title:"Installing Rancher on Amazon EKS",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"}},d={},u=[{value:"Rancher Helm Template Options",id:"rancher-helm-template-options",level:3},{value:"Option A: Default Self-signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Certificates from Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:3},{value:"Apply the Rendered Templates",id:"apply-the-rendered-templates",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"These instructions assume you have already followed the instructions for a Kubernetes upgrade on ",(0,s.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this page,")," including the prerequisites, up until step 3. Upgrade Rancher."))),(0,s.kt)("h3",{id:"rancher-helm-template-options"},"Rancher Helm Template Options"),(0,s.kt)("p",null,"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,s.kt)("p",null,"Based on the choice you made during installation, complete one of the procedures below."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,s.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-signed Certificate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates from Files using Kubernetes Secrets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,s.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,s.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"apply-the-rendered-templates"},"Apply the Rendered Templates"),(0,s.kt)("p",null,"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")),(0,s.kt)("h1",{id:"verify-the-upgrade"},"Verify the Upgrade"),(0,s.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Having network issues following upgrade?"),(0,s.kt)("p",{parentName:"div"},"See ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),"."))),(0,s.kt)("h1",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,s.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}m.isMDXComponent=!0}}]);