"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60486],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41223:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"Azure Machine Configuration",weight:2},l=void 0,s={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure",title:"Azure Machine Configuration",description:"For more information about Azure, refer to the official Azure documentation.",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure",permalink:"/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Azure Machine Configuration",weight:2},sidebar:"tutorialSidebar",previous:{title:"DigitalOcean Machine Configuration",permalink:"/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"},next:{title:"single-node-rancher-in-docker",permalink:"/docs/pages-for-subheaders/single-node-rancher-in-docker"}},c={},d=[{value:"Environment",id:"environment",level:3},{value:"Location",id:"location",level:3},{value:"Resource Group",id:"resource-group",level:3},{value:"Availability Set (unmanaged)",id:"availability-set-unmanaged",level:3},{value:"Image",id:"image",level:3},{value:"VM Size",id:"vm-size",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Fault Domain Count",id:"fault-domain-count",level:3},{value:"Update Domain Count",id:"update-domain-count",level:3},{value:"Purchase Plan",id:"purchase-plan",level:3},{value:"Subnet",id:"subnet",level:3},{value:"Subnet Prefix",id:"subnet-prefix",level:3},{value:"Virtual Network",id:"virtual-network",level:3},{value:"Public IP Options",id:"public-ip-options",level:3},{value:"No Public IP",id:"no-public-ip",level:4},{value:"Static Public IP",id:"static-public-ip",level:4},{value:"Use Private IP",id:"use-private-ip",level:3},{value:"Private IP Address",id:"private-ip-address",level:3},{value:"Network Security Group",id:"network-security-group",level:3},{value:"DNS Label",id:"dns-label",level:3},{value:"Storage Type",id:"storage-type",level:3},{value:"Use Managed Disks",id:"use-managed-disks",level:3},{value:"Managed Disk Size",id:"managed-disk-size",level:3},{value:"SSH Username",id:"ssh-username",level:3},{value:"Open Port",id:"open-port",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For more information about Azure, refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/?product=featured"},"Azure documentation.")),(0,i.kt)("h3",{id:"environment"},"Environment"),(0,i.kt)("p",null,"Microsoft provides multiple ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/cloud?view=azure-cli-latest"},"clouds")," for compliance with regional laws, which are available for your use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AzurePublicCloud"),(0,i.kt)("li",{parentName:"ul"},"AzureGermanCloud"),(0,i.kt)("li",{parentName:"ul"},"AzureChinaCloud"),(0,i.kt)("li",{parentName:"ul"},"AzureUSGovernmentCloud")),(0,i.kt)("h3",{id:"location"},"Location"),(0,i.kt)("p",null,"Configure the cluster and node ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/regions"},"location"),"."),(0,i.kt)("h3",{id:"resource-group"},"Resource Group"),(0,i.kt)("p",null,"A resource group is a container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization. Generally, add resources that share the same lifecycle to the same resource group so you can easily deploy, update, and delete them as a group."),(0,i.kt)("p",null,"Use an existing resource group or enter a resource group name and one will be created for you."),(0,i.kt)("p",null,"For information on managing resource groups, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"Azure documentation.")),(0,i.kt)("h3",{id:"availability-set-unmanaged"},"Availability Set (unmanaged)"),(0,i.kt)("p",null,"Name or ID of an existing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview"},"availability set")," to add the VM to."),(0,i.kt)("h3",{id:"image"},"Image"),(0,i.kt)("p",null,"The name of the operating system image provided as an ARM resource identifier. Requires using managed disk."),(0,i.kt)("h3",{id:"vm-size"},"VM Size"),(0,i.kt)("p",null,"Choose a size for each VM in the node pool. For details about each VM size, see ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/"},"this page.")),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("h3",{id:"fault-domain-count"},"Fault Domain Count"),(0,i.kt)("p",null,"Fault domains define the group of virtual machines that share a common power source and network switch. If the availability set has already been created, the fault domain count will be ignored."),(0,i.kt)("p",null,"For more information on fault domains, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work"},"refer here"),"."),(0,i.kt)("h3",{id:"update-domain-count"},"Update Domain Count"),(0,i.kt)("p",null,"Update domains indicate groups of virtual machines and underlying physical hardware that can be rebooted at the same time. If the availability set has already been created, the update domain count will be ignored."),(0,i.kt)("p",null,"For more information on update domains, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work"},"refer here"),"."),(0,i.kt)("h3",{id:"purchase-plan"},"Purchase Plan"),(0,i.kt)("p",null,"Some VM images in the Azure Marketplace require a plan. If applicable, select a purchase plan, formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher:product:plan"),", to use with your chosen image."),(0,i.kt)("h3",{id:"subnet"},"Subnet"),(0,i.kt)("p",null,"The name of the subnet when creating a new VNet or referencing an existing one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-machine")),(0,i.kt)("h3",{id:"subnet-prefix"},"Subnet Prefix"),(0,i.kt)("p",null,"The subnet IP address prefix to use when creating a new VNet in CIDR format."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.0.0/16")),(0,i.kt)("h3",{id:"virtual-network"},"Virtual Network"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"},"virtual network")," to use or create if one does not exist. Formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"[resourcegroup:]name"),"."),(0,i.kt)("h3",{id:"public-ip-options"},"Public IP Options"),(0,i.kt)("h4",{id:"no-public-ip"},"No Public IP"),(0,i.kt)("p",null,"Do not allocate a public IP address."),(0,i.kt)("h4",{id:"static-public-ip"},"Static Public IP"),(0,i.kt)("p",null,"Allocate a static public IP address."),(0,i.kt)("h3",{id:"use-private-ip"},"Use Private IP"),(0,i.kt)("p",null,"Use a static private IP address."),(0,i.kt)("h3",{id:"private-ip-address"},"Private IP Address"),(0,i.kt)("p",null,"Configure a static private IP address to use."),(0,i.kt)("h3",{id:"network-security-group"},"Network Security Group"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"},"network security group")," to use. All nodes using this template will use the supplied network security group. If no network security group is provided, a new one will be created for each node."),(0,i.kt)("h3",{id:"dns-label"},"DNS Label"),(0,i.kt)("p",null,"A unique DNS name label for the public IP address."),(0,i.kt)("h3",{id:"storage-type"},"Storage Type"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview"},"storage account")," type to use with your VMs. Options include Standard LRS, Standard ZRS, Standard GRS, Standard RAGRS, and Premium LRS."),(0,i.kt)("h3",{id:"use-managed-disks"},"Use Managed Disks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview"},"Azure managed disks")," are block-level storage volumes that are managed by Azure and used with Azure Virtual Machines. Managed disks are designed for 99.999% availability. Managed disks achieve this by providing you with three replicas of your data, allowing for high durability."),(0,i.kt)("h3",{id:"managed-disk-size"},"Managed Disk Size"),(0,i.kt)("p",null,"The size in GB for the disk for each node."),(0,i.kt)("h3",{id:"ssh-username"},"SSH Username"),(0,i.kt)("p",null,"The username used to create an SSH connection to your nodes."),(0,i.kt)("h3",{id:"open-port"},"Open Port"),(0,i.kt)("p",null,"Opens inbound traffic on specified ports. When using an existing Network Security Group, Open Ports are ignored."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"2379/tcp, 2380/tcp, 6443/tcp, 9796/tcp, 10250/tcp, 10251/tcp, 10252/tcp, 10256/tcp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"8472/udp, 4789/udp")))}m.isMDXComponent=!0}}]);