"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82229],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,p=u["".concat(c,".").concat(m)]||u[m]||h[m]||s;return r?n.createElement(p,o(o({ref:t},d),{},{components:r})):n.createElement(p,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47409:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Rancher is No Longer Needed",weight:8010},c=void 0,l={unversionedId:"faq/rancher-is-no-longer-needed",id:"faq/rancher-is-no-longer-needed",title:"Rancher is No Longer Needed",description:"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted.",source:"@site/docs/faq/rancher-is-no-longer-needed.md",sourceDirName:"faq",slug:"/faq/rancher-is-no-longer-needed",permalink:"/docs/faq/rancher-is-no-longer-needed",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/rancher-is-no-longer-needed.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Rancher is No Longer Needed",weight:8010},sidebar:"tutorialSidebar",previous:{title:"Container Network Interface (CNI) Providers",permalink:"/docs/faq/container-network-interface-providers"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},d={},h=[{value:"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?",id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters",level:3},{value:"If the Rancher server is deleted, how do I access my downstream clusters?",id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters",level:3},{value:"What if I don&#39;t want Rancher anymore?",id:"what-if-i-dont-want-rancher-anymore",level:3},{value:"What if I don&#39;t want my registered cluster managed by Rancher?",id:"what-if-i-dont-want-my-registered-cluster-managed-by-rancher",level:3},{value:"What if I don&#39;t want my RKE cluster or hosted Kubernetes cluster managed by Rancher?",id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher",level:3}],u={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters"},"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"If the Rancher server is deleted, how do I access my downstream clusters?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#what-if-i-don-t-want-rancher-anymore"},"What if I don't want Rancher anymore?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#what-if-i-don-t-want-my-registered-cluster-managed-by-rancher"},"What if I don't want my registered cluster managed by Rancher?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#what-if-i-don-t-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher"},"What if I don't want my RKE cluster or hosted Kubernetes cluster managed by Rancher?"))),(0,s.kt)("h3",{id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters"},"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?"),(0,s.kt)("p",null,"If Rancher is ever deleted or unrecoverable, all workloads in the downstream Kubernetes clusters managed by Rancher will continue to function as normal."),(0,s.kt)("h3",{id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"If the Rancher server is deleted, how do I access my downstream clusters?"),(0,s.kt)("p",null,"The capability to access a downstream cluster without Rancher depends on the type of cluster and the way that the cluster was created. To summarize:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Registered clusters:")," The cluster will be unaffected and you can access the cluster using the same methods that you did before the cluster was registered into Rancher."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Hosted Kubernetes clusters:")," If you created the cluster in a cloud-hosted Kubernetes provider such as EKS, GKE, or AKS, you can continue to manage the cluster using your provider's cloud credentials."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"RKE clusters:")," To access an ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster,")," the cluster must have the ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," enabled, and you must have already downloaded the cluster's kubeconfig file from the Rancher UI. (The authorized cluster endpoint is enabled by default for RKE clusters.) With this endpoint, you can access your cluster with kubectl directly instead of communicating through the Rancher server's ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages-for-subheaders/rancher-manager-architecture#1-the-authentication-proxy"},"authentication proxy.")," For instructions on how to configure kubectl to use the authorized cluster endpoint, refer to the section about directly accessing clusters with ",(0,s.kt)("a",{parentName:"li",href:"/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"kubectl and the kubeconfig file.")," These clusters will use a snapshot of the authentication as it was configured when Rancher was removed.")),(0,s.kt)("h3",{id:"what-if-i-dont-want-rancher-anymore"},"What if I don't want Rancher anymore?"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The previously recommended ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference-guides/system-tools"},"System Tools")," has been deprecated since June 2022."))),(0,s.kt)("p",null,"If you ",(0,s.kt)("a",{parentName:"p",href:"/docs/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installed Rancher on a Kubernetes cluster,")," remove Rancher by using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"Rancher Cleanup")," tool."),(0,s.kt)("p",null,"As of Rancher v2.5.8, uninstalling Rancher in high-availability (HA) mode will also remove all ",(0,s.kt)("inlineCode",{parentName:"p"},"helm-operation-*")," pods and the following apps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fleet"),(0,s.kt)("li",{parentName:"ul"},"fleet-agent"),(0,s.kt)("li",{parentName:"ul"},"rancher-operator"),(0,s.kt)("li",{parentName:"ul"},"rancher-webhook")),(0,s.kt)("p",null,"Custom resources (CRDs) and custom namespaces will still need to be manually removed."),(0,s.kt)("p",null,"If you installed Rancher with Docker, you can uninstall Rancher by removing the single Docker container that it runs in."),(0,s.kt)("p",null,"Imported clusters will not be affected by Rancher being removed. For other types of clusters, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"accessing downstream clusters when Rancher is removed.")),(0,s.kt)("h3",{id:"what-if-i-dont-want-my-registered-cluster-managed-by-rancher"},"What if I don't want my registered cluster managed by Rancher?"),(0,s.kt)("p",null,"If a registered cluster is deleted from the Rancher UI, the cluster is detached from Rancher, leaving it intact and accessible by the same methods that were used to access it before it was registered in Rancher."),(0,s.kt)("p",null,"To detach the cluster,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the registered cluster that should be detached from Rancher and click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Delete"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The registered cluster is detached from Rancher and functions normally outside of Rancher."),(0,s.kt)("h3",{id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher"},"What if I don't want my RKE cluster or hosted Kubernetes cluster managed by Rancher?"),(0,s.kt)("p",null,'At this time, there is no functionality to detach these clusters from Rancher. In this context, "detach" is defined as the ability to remove Rancher components from the cluster and manage access to the cluster independently of Rancher.'),(0,s.kt)("p",null,"The capability to manage these clusters without Rancher is being tracked in this ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25234"},"issue.")),(0,s.kt)("p",null,"For information about how to access clusters if the Rancher server is deleted, refer to ",(0,s.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"this section.")))}m.isMDXComponent=!0}}]);