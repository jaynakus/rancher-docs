"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54660],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"1. Set up Infrastructure",weight:100},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",title:"1. Set up Infrastructure",description:"In this section, you will provision the underlying infrastructure for your Rancher management server with internete access through a HTTP proxy.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure.md",tags:[],version:"current",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"1. Set up Infrastructure",weight:100},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher behind an HTTP Proxy",permalink:"/pages-for-subheaders/rancher-behind-an-http-proxy"},next:{title:"2. Install Kubernetes",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"}},u={},d=[{value:"Why three nodes?",id:"why-three-nodes",level:3},{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up the Load Balancer",id:"2-set-up-the-load-balancer",level:3},{value:"3. Set up the DNS Record",id:"3-set-up-the-dns-record",level:3},{value:"Next: Set up a Kubernetes cluster",id:"next-set-up-a-kubernetes-cluster",level:3}],h={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you will provision the underlying infrastructure for your Rancher management server with internete access through a HTTP proxy."),(0,o.kt)("p",null,"To install the Rancher management server on a high-availability RKE cluster, we recommend setting up the following infrastructure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Three Linux nodes,")," typically virtual machines, in an infrastructure provider such as Amazon's EC2, Google Compute Engine, or vSphere."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A load balancer")," to direct front-end traffic to the three nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it.")),(0,o.kt)("p",null,"These nodes must be in the same region/data center. You may place these servers in separate availability zones."),(0,o.kt)("h3",{id:"why-three-nodes"},"Why three nodes?"),(0,o.kt)("p",null,"In an RKE cluster, Rancher server data is stored on etcd. This etcd database runs on all three nodes."),(0,o.kt)("p",null,"The etcd database requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can suffer from ",(0,o.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"split brain"),", requiring the cluster to be restored from backup. If one of the three etcd nodes fails, the two remaining nodes can elect a leader because they have the majority of the total number of etcd nodes."),(0,o.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,o.kt)("p",null,"These hosts will connect to the internet through an HTTP proxy."),(0,o.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,o.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,o.kt)("h3",{id:"2-set-up-the-load-balancer"},"2. Set up the Load Balancer"),(0,o.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,o.kt)("p",null,"When Kubernetes gets set up in a later step, the RKE tool will deploy an NGINX Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,o.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the NGINX Ingress controller to listen for traffic destined for the Rancher hostname. The NGINX Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,o.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,o.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,o.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications."))),(0,o.kt)("h3",{id:"3-set-up-the-dns-record"},"3. Set up the DNS Record"),(0,o.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,o.kt)("p",null,"Depending on your environment, this may be an A record pointing to the LB IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,o.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,o.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,o.kt)("h3",{id:"next-set-up-a-kubernetes-cluster"},(0,o.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"},"Next: Set up a Kubernetes cluster")))}p.isMDXComponent=!0}}]);