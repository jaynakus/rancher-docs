"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88812],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],d={title:"Nodes and Node Pools",weight:2030},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",id:"how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",title:"Nodes and Node Pools",description:"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's Node tab. Depending on the option used to provision the cluster, there are different node options available.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",tags:[],version:"current",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Nodes and Node Pools",weight:2030},sidebar:"tutorialSidebar",previous:{title:"Encryption Key Rotation",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key"},next:{title:"Removing Kubernetes Components from Nodes",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"}},u={},p=[{value:"Node Options Available for Each Cluster Creation Option",id:"node-options-available-for-each-cluster-creation-option",level:2},{value:"Nodes Hosted by an Infrastructure Provider",id:"nodes-hosted-by-an-infrastructure-provider",level:3},{value:"Nodes Provisioned by Hosted Kubernetes Providers",id:"nodes-provisioned-by-hosted-kubernetes-providers",level:3},{value:"Registered Nodes",id:"registered-nodes",level:3},{value:"Managing and Editing Individual Nodes",id:"managing-and-editing-individual-nodes",level:2},{value:"Viewing a Node in the Rancher API",id:"viewing-a-node-in-the-rancher-api",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Scaling Nodes",id:"scaling-nodes",level:2},{value:"SSH into a Node Hosted by an Infrastructure Provider",id:"ssh-into-a-node-hosted-by-an-infrastructure-provider",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Draining a Node",id:"draining-a-node",level:2},{value:"Aggressive and Safe Draining Options",id:"aggressive-and-safe-draining-options",level:3},{value:"Grace Period",id:"grace-period",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Drained and Cordoned State",id:"drained-and-cordoned-state",level:3},{value:"Labeling a Node to be Ignored by Rancher",id:"labeling-a-node-to-be-ignored-by-rancher",level:2},{value:"Labeling Nodes to be Ignored with kubectl",id:"labeling-nodes-to-be-ignored-with-kubectl",level:3}],c={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's ",(0,o.kt)("strong",{parentName:"p"},"Node")," tab. Depending on the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"option used")," to provision the cluster, there are different node options available."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to manage the ",(0,o.kt)("em",{parentName:"p"},"cluster")," and not individual nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cluster-configuration"},"Editing Clusters"),"."))),(0,o.kt)("h2",{id:"node-options-available-for-each-cluster-creation-option"},"Node Options Available for Each Cluster Creation Option"),(0,o.kt)("p",null,"The following table lists which node options are available for each type of cluster in Rancher. Click the links in the ",(0,o.kt)("strong",{parentName:"p"},"Option")," column for more detailed information about each feature."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"Nodes Hosted by an Infrastructure Provider")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/pages-for-subheaders/use-existing-nodes"},"Custom Node")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Cluster")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"Registered EKS Nodes")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"All Other Registered Nodes")),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#cordoning-a-node"},"Cordon")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#draining-a-node"},"Drain")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable ",(0,o.kt)("em",{parentName:"td"},"and")," evicts all pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#managing-and-editing-individual-nodes"},"Edit")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter a custom name, description, label, or taints for a node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#viewing-a-node-in-the-rancher-api"},"View API")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"View API data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#deleting-a-node"},"Delete")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"Deletes defective nodes from the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#ssh-into-a-node-hosted-by-an-infrastructure-provider"},"Download Keys")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Download SSH key in order to SSH into the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#scaling-nodes"},"Node Scaling")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Scale the number of nodes in the node pool up or down.")))),(0,o.kt)("p",null,"*"," Delete option accessible via View API"),(0,o.kt)("h3",{id:"nodes-hosted-by-an-infrastructure-provider"},"Nodes Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"Node pools are available when you provision Rancher-launched Kubernetes clusters on nodes that are ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted in an infrastructure provider.")),(0,o.kt)("p",null,"Clusters provisioned using ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"one of the node pool options")," can be scaled up or down if the node pool is edited."),(0,o.kt)("p",null,"A node pool can also automatically maintain the node scale that's set during the initial cluster provisioning if ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")," This scale determines the number of active nodes that Rancher maintains for the cluster."),(0,o.kt)("p",null,"Rancher uses ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," to replace nodes in the node pool. Each node template uses cloud provider credentials to allow Rancher to set up the node in the infrastructure provider."),(0,o.kt)("h3",{id:"nodes-provisioned-by-hosted-kubernetes-providers"},"Nodes Provisioned by Hosted Kubernetes Providers"),(0,o.kt)("p",null,"Options for managing nodes ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted by a Kubernetes provider")," are somewhat limited in Rancher. Rather than using the Rancher UI to make edits such as scaling the number of nodes up or down, edit the cluster directly."),(0,o.kt)("h3",{id:"registered-nodes"},"Registered Nodes"),(0,o.kt)("p",null,"Although you can deploy workloads to a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"registered cluster")," using Rancher, you cannot manage individual cluster nodes. All management of imported cluster nodes must take place outside of Rancher."),(0,o.kt)("h2",{id:"managing-and-editing-individual-nodes"},"Managing and Editing Individual Nodes"),(0,o.kt)("p",null,"Editing a node lets you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change its name"),(0,o.kt)("li",{parentName:"ul"},"Change its description"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")),(0,o.kt)("li",{parentName:"ul"},"Add/Remove ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints"))),(0,o.kt)("p",null,"To manage individual nodes, browse to the cluster that you want to manage and then select ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," from the main menu. You can open the options menu for a node by clicking its ",(0,o.kt)("strong",{parentName:"p"},"\u22ee")," icon (",(0,o.kt)("strong",{parentName:"p"},".."),".)."),(0,o.kt)("h2",{id:"viewing-a-node-in-the-rancher-api"},"Viewing a Node in the Rancher API"),(0,o.kt)("p",null,"Select this option to view the node's ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-the-api"},"API endpoints"),"."),(0,o.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,o.kt)("p",null,"Use ",(0,o.kt)("strong",{parentName:"p"},"Delete")," to remove defective nodes from the cloud provider."),(0,o.kt)("p",null,"When you the delete a defective node, Rancher can automatically replace it with an identically provisioned node if the node is in a node pool and ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your cluster is hosted by an infrastructure provider, and you want to scale your cluster down instead of deleting a defective node, ",(0,o.kt)("a",{parentName:"p",href:"#scaling-nodes"},"scale down")," rather than delete."))),(0,o.kt)("h2",{id:"scaling-nodes"},"Scaling Nodes"),(0,o.kt)("p",null,"For nodes hosted by an infrastructure provider, you can scale the number of nodes in each ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"node pool")," by using the scale controls. This option isn't available for other cluster types."),(0,o.kt)("h2",{id:"ssh-into-a-node-hosted-by-an-infrastructure-provider"},"SSH into a Node Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes hosted by an infrastructure provider"),", you have the option of downloading its SSH key so that you can connect to it remotely from your desktop."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to SSH into a node and click the name of the cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Machine Pools")," tab, find the node that you want to remote into and click  ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Download SSH Key"),". A ZIP file containing files used for SSH will be downloaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the ZIP file to any location.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Terminal. Change your location to the extracted ZIP file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ssh -i id_rsa root@<IP_OF_HOST>\n")))),(0,o.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cordoning")," a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions.  When you're done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("h2",{id:"draining-a-node"},"Draining a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Draining")," is the process of first cordoning the node, and then evicting all its pods. This feature is useful for performing node maintenance (like kernel upgrades or hardware maintenance). It prevents new pods from deploying to the node while redistributing existing pods so that users don't experience service interruption."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with a replica set, the pod is replaced by a new pod that will be scheduled to a new node. Additionally, if the pod is part of a service, then clients will automatically be redirected to the new pod.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with no replica set, you need to bring up a new copy of the pod, and assuming it is not part of a service, redirect clients to it."))),(0,o.kt)("p",null,"You can drain nodes that are in either a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state. When you drain a node, the node is cordoned, the nodes are evaluated for conditions they must meet to be drained, and then (if it meets the conditions) the node evicts its pods."),(0,o.kt)("p",null,"However, you can override the conditions draining when you initiate the drain. You're also given an opportunity to set a grace period and timeout value."),(0,o.kt)("h3",{id:"aggressive-and-safe-draining-options"},"Aggressive and Safe Draining Options"),(0,o.kt)("p",null,"When you configure the upgrade strategy for the cluster, you will be able to enable node draining. If node draining is enabled, you will be able to configure how pods are deleted and rescheduled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aggressive Mode")),(0,o.kt)("p",{parentName:"li"},"  In this mode, pods won't get rescheduled to a new node, even if they do not have a controller. Kubernetes expects you to have your own logic that handles the deletion of these pods."),(0,o.kt)("p",{parentName:"li"},"  Kubernetes also expects the implementation to decide what to do with pods using emptyDir. If a pod uses emptyDir to store local data, you might not be able to safely delete it, since the data in the emptyDir will be deleted once the pod is removed from the node. Choosing aggressive mode will delete these pods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Safe Mode")),(0,o.kt)("p",{parentName:"li"},"  If a node has standalone pods or ephemeral data it will be cordoned but not drained."))),(0,o.kt)("h3",{id:"grace-period"},"Grace Period"),(0,o.kt)("p",null,"The timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. For example, when pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If negative, the default value specified in the pod will be used."),(0,o.kt)("h3",{id:"timeout"},"Timeout"),(0,o.kt)("p",null,"The amount of time drain should continue to wait before giving up."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Kubernetes Known Issue:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/pull/64378"},"timeout setting")," was not enforced while draining a node before Kubernetes 1.12."))),(0,o.kt)("h3",{id:"drained-and-cordoned-state"},"Drained and Cordoned State"),(0,o.kt)("p",null,"If there's any error related to user input, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," state because the drain failed. You can either correct the input and attempt to drain the node again, or you can abort by uncordoning the node."),(0,o.kt)("p",null,"If the drain continues without error, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"draining")," state. You'll have the option to stop the drain when the node is in this state, which will stop the drain process and change the node's state to ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned"),"."),(0,o.kt)("p",null,"Once drain successfully completes, the node will be in a state of ",(0,o.kt)("inlineCode",{parentName:"p"},"drained"),". You can then power off or delete the node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Want to know more about cordon and drain?")," See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/cluster-management/#maintenance-on-a-node"},"Kubernetes documentation"),"."),(0,o.kt)("h2",{id:"labeling-a-node-to-be-ignored-by-rancher"},"Labeling a Node to be Ignored by Rancher"),(0,o.kt)("p",null,"Some solutions, such as F5's BIG-IP integration, may require creating a node that is never registered to a cluster."),(0,o.kt)("p",null,"Since the node will never finish registering, it will always be shown as unhealthy in the Rancher UI."),(0,o.kt)("p",null,"In that case, you may want to label the node to be ignored by Rancher so that Rancher only shows nodes as unhealthy when they are actually failing."),(0,o.kt)("p",null,"You can label nodes to be ignored by using a setting in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/24172"},"open issue")," in which nodes labeled to be ignored can get stuck in an updating state."))),(0,o.kt)("h3",{id:"labeling-nodes-to-be-ignored-with-kubectl"},"Labeling Nodes to be Ignored with kubectl"),(0,o.kt)("p",null,"To add a node that will be ignored by Rancher, use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to create a node that has the following label:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cattle.rancher.io/node-status: ignore\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," If you add the node to a cluster, Rancher will not attempt to sync with this node. The node can still be part of the cluster and can be listed with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("p",null,"If the label is added before the node is added to the cluster, the node will not be shown in the Rancher UI."),(0,o.kt)("p",null,"If the label is added after the node is added to a Rancher cluster, the node will not be removed from the UI."),(0,o.kt)("p",null,"If you delete the node from the Rancher server using the Rancher UI or API, the node will not be removed from the cluster if the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," is listed in the Rancher settings in the Rancher API under ",(0,o.kt)("inlineCode",{parentName:"p"},"v3/settings/ignore-node-name"),"."))}h.isMDXComponent=!0}}]);