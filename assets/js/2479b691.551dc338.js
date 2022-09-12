"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41772],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Tips for Setting Up Containers",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/containers","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/containers","/rancher/v2.x/en/best-practices/v2.0-v2.4/containers/"]},c=void 0,u={unversionedId:"reference-guides/best-practices/containers",id:"version-2.0-2.4/reference-guides/best-practices/containers",title:"Tips for Setting Up Containers",description:"Running well-built containers can greatly impact the overall performance and security of your environment.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/best-practices/containers.md",sourceDirName:"reference-guides/best-practices",slug:"/reference-guides/best-practices/containers",permalink:"/v2.0-v2.4/reference-guides/best-practices/containers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/best-practices/containers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Tips for Setting Up Containers",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/containers","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/containers","/rancher/v2.x/en/best-practices/v2.0-v2.4/containers/"]},sidebar:"tutorialSidebar",previous:{title:"Best Practices Guide",permalink:"/v2.0-v2.4/pages-for-subheaders/best-practices"},next:{title:"Rancher Deployment Strategies",permalink:"/v2.0-v2.4/reference-guides/best-practices/deployment-strategies"}},l={},p=[{value:"Use a Common Container OS",id:"use-a-common-container-os",level:3},{value:"Start with a FROM scratch container",id:"start-with-a-from-scratch-container",level:3},{value:"Run Container Processes as Unprivileged",id:"run-container-processes-as-unprivileged",level:3},{value:"Define Resource Limits",id:"define-resource-limits",level:3},{value:"Define Resource Requirements",id:"define-resource-requirements",level:3},{value:"Liveness and Readiness Probes",id:"liveness-and-readiness-probes",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Running well-built containers can greatly impact the overall performance and security of your environment."),(0,i.kt)("p",null,"Below are a few tips for setting up your containers."),(0,i.kt)("p",null,"For a more detailed discussion of security for containers, you can also refer to Rancher's ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/complete-guide-container-security"},"Guide to Container Security.")),(0,i.kt)("h3",{id:"use-a-common-container-os"},"Use a Common Container OS"),(0,i.kt)("p",null,"When possible, you should try to standardize on a common container base OS. "),(0,i.kt)("p",null,"Smaller distributions such as Alpine and BusyBox reduce container image size and generally have a smaller attack/vulnerability surface."),(0,i.kt)("p",null,"Popular distributions such as Ubuntu, Fedora, and CentOS are more field-tested and offer more functionality."),(0,i.kt)("h3",{id:"start-with-a-from-scratch-container"},"Start with a FROM scratch container"),(0,i.kt)("p",null,"If your microservice is a standalone static binary, you should use a FROM scratch container. "),(0,i.kt)("p",null,"The FROM scratch container is an ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"official Docker image")," that is empty so that you can use it to design minimal images."),(0,i.kt)("p",null,"This will have the smallest attack surface and smallest image size."),(0,i.kt)("h3",{id:"run-container-processes-as-unprivileged"},"Run Container Processes as Unprivileged"),(0,i.kt)("p",null,"When possible, use a non-privileged user when running processes within your container. While container runtimes provide isolation, vulnerabilities and attacks are still possible. Inadvertent or accidental host mounts can also be impacted if the container is running as root. For details on configuring a security context for a pod or container, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"Kubernetes docs"),"."),(0,i.kt)("h3",{id:"define-resource-limits"},"Define Resource Limits"),(0,i.kt)("p",null,"Apply CPU and memory limits to your pods. This can help manage the resources on your worker nodes and avoid a malfunctioning microservice from impacting other microservices."),(0,i.kt)("p",null,"In standard Kubernetes, you can set resource limits on the namespace level. In Rancher, you can set resource limits on the project level and they will propagate to all the namespaces within the project. For details, refer to the Rancher docs."),(0,i.kt)("p",null,"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project or namespace, all containers will require a respective CPU or Memory field set during creation. To avoid setting these limits on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,i.kt)("p",null,"The Kubernetes docs have more information on how resource limits can be set at the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"container level")," and the namespace level."),(0,i.kt)("h3",{id:"define-resource-requirements"},"Define Resource Requirements"),(0,i.kt)("p",null,"You should apply CPU and memory requirements to your pods. This is crucial for informing the scheduler which type of compute node your pod needs to be placed on, and ensuring it does not over-provision that node. In Kubernetes, you can set a resource requirement by defining ",(0,i.kt)("inlineCode",{parentName:"p"},"resources.requests")," in the resource requests field in a pod's container spec. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"Kubernetes docs"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you set a resource limit for the namespace that the pod is deployed in, and the container doesn't have a specific resource request, the pod will not be allowed to start. To avoid setting these fields on each and every container during workload creation, a default container resource limit can be specified on the namespace.")),(0,i.kt)("p",null,"It is recommended to define resource requirements on the container level because otherwise, the scheduler makes assumptions that will likely not be helpful to your application when the cluster experiences load."),(0,i.kt)("h3",{id:"liveness-and-readiness-probes"},"Liveness and Readiness Probes"),(0,i.kt)("p",null,"Set up liveness and readiness probes for your container. Unless your container completely crashes, Kubernetes will not know it's unhealthy unless you create an endpoint or mechanism that can report container status. Alternatively, make sure your container halts and crashes if unhealthy."),(0,i.kt)("p",null,"The Kubernetes docs show how to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"},"configure liveness and readiness probes for containers.")))}m.isMDXComponent=!0}}]);