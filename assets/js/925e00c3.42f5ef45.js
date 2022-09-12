"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19465],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},36042:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return h}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=["components"],s={title:"Updating the Rancher Certificate",weight:10,aliases:["/rancher/v2.x/en/installation/resources/update-ca-cert/"]},l="Updating a Private CA Certificate",o={unversionedId:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",id:"version-2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate",title:"Updating the Rancher Certificate",description:"Follow these steps to update the SSL certificate of the ingress in a Rancher high availability Kubernetes installation or to switch from the default self-signed certificate to a custom certificate.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",tags:[],version:"2.5",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Updating the Rancher Certificate",weight:10,aliases:["/rancher/v2.x/en/installation/resources/update-ca-cert/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading Cert-Manager with Helm 2",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"},next:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/local-system-charts"}},u={},h=[{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource",level:2},{value:"2. Create/update the CA certificate secret resource",id:"2-createupdate-the-ca-certificate-secret-resource",level:2},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment",level:2},{value:"4. Reconfigure Rancher agents to trust the private CA",id:"4-reconfigure-rancher-agents-to-trust-the-private-ca",level:2},{value:"Why is this step required?",id:"why-is-this-step-required",level:3},{value:"Which method should I choose?",id:"which-method-should-i-choose",level:3},{value:"Method 1: Kubectl command",id:"method-1-kubectl-command",level:3},{value:"Method 2: Manually update checksum",id:"method-2-manually-update-checksum",level:3},{value:"Method 3: Recreate Rancher agents",id:"method-3-recreate-rancher-agents",level:3},{value:"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher",id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher",level:2},{value:"Why is this step required?",id:"why-is-this-step-required-1",level:3},{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource-1",level:2},{value:"2. Delete the CA certificate secret resource",id:"2-delete-the-ca-certificate-secret-resource",level:2},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment-1",level:2},{value:"4. Reconfigure Rancher agents for the non-private/common certificate",id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate",level:2},{value:"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher",id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher-1",level:2},{value:"Why is this step required?",id:"why-is-this-step-required-2",level:3}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,i.kt)("p",null,"Follow these steps to update the SSL certificate of the ingress in a Rancher ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."),(0,i.kt)("p",null,"A summary of the steps is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create or update the ",(0,i.kt)("inlineCode",{parentName:"li"},"tls-rancher-ingress")," Kubernetes secret resource with the new certificate and private key."),(0,i.kt)("li",{parentName:"ol"},"Create or update the ",(0,i.kt)("inlineCode",{parentName:"li"},"tls-ca")," Kubernetes secret resource with the root CA certificate (only required when using a private CA)."),(0,i.kt)("li",{parentName:"ol"},"Update the Rancher installation using the Helm CLI."),(0,i.kt)("li",{parentName:"ol"},"Reconfigure the Rancher agents to trust the new CA certificate."),(0,i.kt)("li",{parentName:"ol"},"Select Force Update of Fleet clusters to connect fleet-agent to Rancher.")),(0,i.kt)("p",null,"The details of these instructions are below."),(0,i.kt)("h2",{id:"1-createupdate-the-certificate-secret-resource"},"1. Create/update the certificate secret resource"),(0,i.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"2-createupdate-the-ca-certificate-secret-resource"},"2. Create/update the CA certificate secret resource"),(0,i.kt)("p",null,"If the new certificate was signed by a private CA, you will need to copy the corresponding root CA certificate into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and create or update the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace. If the certificate was signed by an intermediate CA, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," must contain both the intermediate and root CA certificates (in this order)."),(0,i.kt)("p",null,"To create the initial secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")),(0,i.kt)("p",null,"To update an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"3-reconfigure-the-rancher-deployment"},"3. Reconfigure the Rancher deployment"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before proceeding, generate an API token in the Rancher UI (",(0,i.kt)("b",null,"User > API & Keys"),") and save the Bearer Token which you might need in step 4.")),(0,i.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,i.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,i.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,i.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,i.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,i.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret")," as well as the current chart version to prevent an application upgrade.    "),(0,i.kt)("p",null,"If the certificate was signed by a private CA, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"set privateCA=true")," argument as well. Also make sure to read the documentation describing the initial installation using custom certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set ...\n")),(0,i.kt)("p",null,"When the upgrade is completed, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher_SERVER>/v3/settings/cacerts")," to verify that the value matches the CA certificate written in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret earlier."),(0,i.kt)("h2",{id:"4-reconfigure-rancher-agents-to-trust-the-private-ca"},"4. Reconfigure Rancher agents to trust the private CA"),(0,i.kt)("p",null,"This section covers three methods to reconfigure Rancher agents to trust the private CA. This step is required if either of the following is true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rancher was initially configured to use the Rancher self-signed certificate (",(0,i.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=letsEncrypt"),")"),(0,i.kt)("li",{parentName:"ul"},"The root CA certificate for the new custom certificate has changed")),(0,i.kt)("h3",{id:"why-is-this-step-required"},"Why is this step required?"),(0,i.kt)("p",null,"When Rancher is configured with a certificate signed by a private CA, the CA certificate chain is downloaded into Rancher agent containers. Agents compare the checksum of the downloaded certificate against the ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable. This means that, when the private CA certificate is changed on Rancher server side, the environvment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," must be updated accordingly."),(0,i.kt)("h3",{id:"which-method-should-i-choose"},"Which method should I choose?"),(0,i.kt)("p",null,"Method 1 is the easiest one but requires all clusters to be connected to Rancher after the certificates have been rotated. This is usually the case if the process is performed right after updating the Rancher deployment (Step 3)."),(0,i.kt)("p",null,"If the clusters have lost connection to Rancher but you have ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-admin/cluster-access/ace/"},"Authorized Cluster Endpoints")," enabled, then go with method 2."),(0,i.kt)("p",null,"Method 3 can be used as a fallback if method 1 and 2 are unfeasible."),(0,i.kt)("h3",{id:"method-1-kubectl-command"},"Method 1: Kubectl command"),(0,i.kt)("p",null,"For each cluster under Rancher management (except the ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," Rancher management cluster) run the following command using the Kubeconfig file of the Rancher management cluster (RKE or K3S)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl patch clusters.management.cattle.io <REPLACE_WITH_CLUSTERID> -p \'{"status":{"agentImage":"dummy"}}\' --type merge\n')),(0,i.kt)("p",null,"This command will cause all Agent Kubernetes resources to be reconfigured with the checksum of the new certificate."),(0,i.kt)("h3",{id:"method-2-manually-update-checksum"},"Method 2: Manually update checksum"),(0,i.kt)("p",null,"Manually patch the agent Kubernetes resources by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable to the value matching the checksum of the new CA certificate. Generate the new checksum value like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -k -s -fL <RANCHER_SERVER>/v3/settings/cacerts | jq -r .value > cacert.tmp\n$ sha256sum cacert.tmp | awk '{print $1}'\n")),(0,i.kt)("p",null,"Using a Kubeconfig for each downstream cluster update the environment variable for the two agent deployments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl edit -n cattle-system ds/cattle-node-agent\n$ kubectl edit -n cattle-system deployment/cattle-cluster-agent\n")),(0,i.kt)("h3",{id:"method-3-recreate-rancher-agents"},"Method 3: Recreate Rancher agents"),(0,i.kt)("p",null,"With this method you are recreating the Rancher agents by running a set of commands on a controlplane node of each downstream cluster."),(0,i.kt)("p",null,"First, generate the agent definitions as described here: ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971"},"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971")),(0,i.kt)("p",null,"Then, connect to a controlplane node of the downstream cluster via SSH, create a Kubeconfig and apply the definitions:\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b"},"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b")),(0,i.kt)("h2",{id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher"},"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher"),(0,i.kt)("p",null,"Select 'Force Update' for the clusters within the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#accessing-fleet-in-the-rancher-ui"},"Continuous Delivery")," view under Cluster Explorer in the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher."),(0,i.kt)("h3",{id:"why-is-this-step-required-1"},"Why is this step required?"),(0,i.kt)("p",null,"Fleet agents in Rancher managed clusters store kubeconfig that is used to connect to the Rancher proxied kube-api in the fleet-agent secret of the fleet-system namespace. The kubeconfig contains a certificate-authority-data block containing the Rancher CA. When changing the Rancher CA, this block needs to be updated for a successful connection of the fleet-agent to Rancher."),(0,i.kt)("h1",{id:"updating-from-a-private-ca-certificate-to-a-common-certificate"},"Updating from a Private CA Certificate to a Common Certificate"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is possible to perform the opposite procedure as shown above: you may change from a private certificate to a common, or non-private, certificate. The steps involved are outlined below.")),(0,i.kt)("h2",{id:"1-createupdate-the-certificate-secret-resource-1"},"1. Create/update the certificate secret resource"),(0,i.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"2-delete-the-ca-certificate-secret-resource"},"2. Delete the CA certificate secret resource"),(0,i.kt)("p",null,"You will delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace as it is no longer needed. You may also optionally save a copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," if desired."),(0,i.kt)("p",null,"To save the existing secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml\n")),(0,i.kt)("p",null,"To delete the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system delete secret tls-ca\n")),(0,i.kt)("h2",{id:"3-reconfigure-the-rancher-deployment-1"},"3. Reconfigure the Rancher deployment"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before proceeding, ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/user-settings/api-keys#creating-an-api-key"},"generate an API token in the Rancher UI")," (",(0,i.kt)("b",null,"User > API & Keys"),").")),(0,i.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,i.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,i.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,i.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,i.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,i.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify the current chart version to prevent an application upgrade.    "),(0,i.kt)("p",null,"Also make sure to read the documentation describing the initial installation using custom certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ...\n")),(0,i.kt)("p",null,"On upgrade, you can either "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"remove ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret \\")," from the Helm upgrade command, as shown above, or ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"privateCA")," parameter or set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," because the CA is valid:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set privateCA=false\n")),(0,i.kt)("h2",{id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate"},"4. Reconfigure Rancher agents for the non-private/common certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM"),' environment variable on the downstream cluster agents should be removed or set to "" (an empty string).'),(0,i.kt)("h2",{id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher-1"},"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher"),(0,i.kt)("p",null,"Select 'Force Update' for the clusters within the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#accessing-fleet-in-the-rancher-ui"},"Continuous Delivery")," view under Cluster Explorer in the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher."),(0,i.kt)("h3",{id:"why-is-this-step-required-2"},"Why is this step required?"),(0,i.kt)("p",null,"Fleet agents in Rancher managed clusters store kubeconfig that is used to connect to the Rancher proxied kube-api in the fleet-agent secret of the fleet-system namespace. The kubeconfig contains a certificate-authority-data block containing the Rancher CA. When changing the Rancher CA, this block needs to be updated for a successful connection of the fleet-agent to Rancher."))}d.isMDXComponent=!0}}]);