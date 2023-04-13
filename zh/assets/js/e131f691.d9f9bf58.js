"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},63287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"Upgrade a Hardened Custom/Imported Cluster to Kubernetes v1.25"},i=void 0,l={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25",title:"Upgrade a Hardened Custom/Imported Cluster to Kubernetes v1.25",description:"Kubernetes v1.25 changes how clusters describe and implement security policies. From this version forward, Pod Security Policies (PSPs) are no longer available. Kubernetes v1.25 replaces them with new security objects: Pod Security Standards (PSS), and Pod Security Admissions (PSAs).",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25.md",tags:[],version:"current",lastUpdatedAt:1681396164,formattedLastUpdatedAt:"2023\u5e744\u670813\u65e5",frontMatter:{title:"Upgrade a Hardened Custom/Imported Cluster to Kubernetes v1.25"},sidebar:"tutorialSidebar",previous:{title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},next:{title:"Rancher Server Kubernetes \u96c6\u7fa4\u7684\u95ee\u9898\u6392\u67e5",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"}},s={},d=[{value:"Upgrading Imported Hardened Clusters to Kubernetes v1.25 or Later",id:"upgrading-imported-hardened-clusters-to-kubernetes-v125-or-later",level:2},{value:"Upgrading Custom Hardened Clusters to Kubernetes v1.25 or Later",id:"upgrading-custom-hardened-clusters-to-kubernetes-v125-or-later",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("Tabs"),c=u("TabItem"),m={toc:d};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kubernetes v1.25 changes how clusters describe and implement security policies. From this version forward, ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/"},"Pod Security Policies (PSPs)")," are no longer available. Kubernetes v1.25 replaces them with new security objects: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"Pod Security Standards (PSS)"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admissions (PSAs)"),". "),(0,a.kt)("p",null,"If you have custom or imported hardened clusters, you must take special preparations to ensure that the upgrade from an earlier version of Kubernetes to v1.25 or later goes smoothly."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"After you upgrade to v1.25, add the necessary Rancher namespace exemptions. See ",(0,a.kt)("a",{parentName:"p",href:"./psa-config-templates.md#exempting-required-rancher-namespaces"},"Pod Security Admission (PSA) Configuration Templates")," for more details.")),(0,a.kt)("h2",{id:"upgrading-imported-hardened-clusters-to-kubernetes-v125-or-later"},"Upgrading Imported Hardened Clusters to Kubernetes v1.25 or Later"),(0,a.kt)(p,{groupId:"k8s-distro",mdxType:"Tabs"},(0,a.kt)(c,{value:"RKE2",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Perform the following on each node in the cluster: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Save ",(0,a.kt)("a",{target:"_blank",href:r(56027).Z},(0,a.kt)("code",null,"rancher-psact.yaml"))," in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2"),"."),(0,a.kt)("li",{parentName:"ol"},"Edit the RKE2 configuration file:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"profile")," field to ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-1.23"),"."),(0,a.kt)("li",{parentName:"ol"},"Specify the path for the configuration file that you just added: ",(0,a.kt)("inlineCode",{parentName:"li"},"pod-security-admission-config-file: /etc/rancher/rke2/rancher-psact.yaml"),"."))))),(0,a.kt)(c,{value:"K3s",mdxType:"TabItem"},(0,a.kt)("p",null,"Perform the following on each node in the cluster:"),(0,a.kt)("p",null,"Follow the official K3s instructions on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/known-issues#hardened-125"},"Upgrading Hardened Clusters from v1.24.x to v1.25.x"),", but use a ",(0,a.kt)("a",{target:"_blank",href:r(56027).Z},"custom")," Rancher PSA configuration template, instead of the configuration provided on the official K3s site."))),(0,a.kt)("p",null,"After you perform these steps, you can upgrade the cluster's Kubernetes version through the Rancher UI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the cluster you want to update in the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," table, and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes Version")," dropdown menu, select the version that you would like to use."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("h2",{id:"upgrading-custom-hardened-clusters-to-kubernetes-v125-or-later"},"Upgrading Custom Hardened Clusters to Kubernetes v1.25 or Later"),(0,a.kt)(p,{groupId:"k8s-distro",mdxType:"Tabs"},(0,a.kt)(c,{value:"RKE2",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the cluster you want to update in the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," table, and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Basics > Security"),", in the ",(0,a.kt)("strong",{parentName:"li"},"CIS Profile")," dropdown menu, select ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-1.23"),". "),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Default Pod Security Admission")," dropdown menu, select ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-restricted"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes Version")," dropdown menu, select the version that you would like to use."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),"."))),(0,a.kt)(c,{value:"K3s",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the cluster you want to update in the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," table, and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Edit YAML"),"."),(0,a.kt)("li",{parentName:"ol"},"Delete ",(0,a.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicy")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver-arg.enable-admission-plugins")),(0,a.kt)("li",{parentName:"ol"},"Add this line to the ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," field: ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted")),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetesVersion")," to your chosen version (v1.25 or later)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")))))}k.isMDXComponent=!0},56027:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/rancher-psact-22728716f0ef43576c1a3ef2b94fc1b8.yaml"}}]);