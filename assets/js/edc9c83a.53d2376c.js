"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93627],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},739:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Prometheus Configuration",weight:1,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/prometheus","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/prometheus/","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/prometheus","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/prometheus","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/prometheus/"]},l=void 0,p={unversionedId:"explanations/integrations-in-rancher/cluster-monitoring/prometheus",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus",title:"Prometheus Configuration",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus.md",sourceDirName:"explanations/integrations-in-rancher/cluster-monitoring",slug:"/explanations/integrations-in-rancher/cluster-monitoring/prometheus",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Prometheus Configuration",weight:1,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/prometheus","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/prometheus/","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/prometheus","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/prometheus","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/prometheus/"]},sidebar:"tutorialSidebar",previous:{title:"Project Monitoring",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},next:{title:"Viewing Metrics",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/viewing-metrics"}},m={},u=[{value:"Prometheus RemoteRead and RemoteWrite",id:"prometheus-remoteread-and-remotewrite",level:3},{value:"LivenessProbe and ReadinessProbe",id:"livenessprobe-and-readinessprobe",level:3}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,a.kt)("p",null,"While configuring monitoring at either the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level")," or ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"project level"),", there are multiple options that can be configured."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#basic-configuration"},"Basic Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#advanced-options"},"Advanced Options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#node-exporter"},"Node Exporter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#persistent-storage"},"Persistent Storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#remote-storage"},"Remote Storage"))),(0,a.kt)("h1",{id:"basic-configuration"},"Basic Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Retention"),(0,a.kt)("td",{parentName:"tr",align:null},"How long your Prometheus instance retains monitoring data scraped from Rancher objects before it's purged.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#node-exporter"},"Enable Node Exporter")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy the node exporter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Exporter Host Port"),(0,a.kt)("td",{parentName:"tr",align:null},"The host port on which data is exposed, i.e. data that Prometheus collects from your node hardware. Required if you have enabled the node exporter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#persistent-storage"},"Enable Persistent Storage")," for Prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to configure storage for Prometheus so that metrics can be retained even if the Prometheus pod fails.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#persistent-storage"},"Enable Persistent Storage")," for Grafana"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to configure storage for Grafana so that the Grafana dashboards and configuration  can be retained even if the Grafana pod fails.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"CPU Limit")),(0,a.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the Prometheus pod.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"CPU Reservation")),(0,a.kt)("td",{parentName:"tr",align:null},"CPU reservation for the Prometheus pod.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-memory"},"Memory Limit")),(0,a.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the Prometheus pod.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-memory"},"Memory Reservation")),(0,a.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the Prometheus pod.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which Prometheus and Grafana pods are deployed to. To use this option, the nodes must have labels.")))),(0,a.kt)("h1",{id:"advanced-options"},"Advanced Options"),(0,a.kt)("p",null,"Since monitoring is an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts/tree/dev/charts/rancher-monitoring"},"application")," from the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"Rancher catalog"),", it can be configured like any other catalog application, by passing in values to Helm."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," Any modification to the application without understanding the entire application can lead to catastrophic errors.")),(0,a.kt)("h3",{id:"prometheus-remoteread-and-remotewrite"},"Prometheus RemoteRead and RemoteWrite"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,a.kt)("p",null,"Prometheus RemoteRead and RemoteWrite can be configured as custom answers in the ",(0,a.kt)("strong",{parentName:"p"},"Advanced Options")," section."),(0,a.kt)("p",null,"For more information on remote endpoints and storage, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/operating/integrations/#remote-endpoints-and-storage"},"Prometheus documentation.")),(0,a.kt)("p",null,"The Prometheus operator documentation contains the full ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#remotereadspec"},"RemoteReadSpec")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#remotewritespec"},"RemoteWriteSpec.")),(0,a.kt)("p",null,"An example configuration would be:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"prometheus.remoteWrite[0].url")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://mytarget.com"))))),(0,a.kt)("h3",{id:"livenessprobe-and-readinessprobe"},"LivenessProbe and ReadinessProbe"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,a.kt)("p",null,"Prometheus LivenessProbe and ReadinessProbe can be configured as custom answers in the ",(0,a.kt)("strong",{parentName:"p"},"Advanced Options")," section."),(0,a.kt)("p",null,"The Kubernetes probe spec is ",(0,a.kt)("a",{parentName:"p",href:"https://v1-17.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#probe-v1-core"},"here.")),(0,a.kt)("p",null,"Some example key-value pairs are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"prometheus.livenessProbe.timeoutSeconds")),(0,a.kt)("td",{parentName:"tr",align:null},"60")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"prometheus.readinessProbe.timeoutSeconds")),(0,a.kt)("td",{parentName:"tr",align:null},"60")))),(0,a.kt)("h1",{id:"node-exporter"},"Node Exporter"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/blob/master/README.md"},"node exporter")," is a popular open source exporter, which exposes the metrics for hardware and ","*","NIX kernels OS. It is designed to monitor the host system. However, there are still issues with namespaces when running it in a container, mostly around filesystem mount spaces. In order to monitor actual network metrics for the container network, the node exporter must be deployed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostNetwork")," mode."),(0,a.kt)("p",null,"When configuring Prometheus and enabling the node exporter, enter a host port in the ",(0,a.kt)("strong",{parentName:"p"},"Node Exporter Host Port")," that will not produce port conflicts with existing applications. The host port chosen must be open to allow internal traffic between Prometheus and the Node Exporter."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," In order for Prometheus to collect the metrics of the node exporter, after enabling cluster monitoring, you must open the ",(0,a.kt)("b",null,"Node Exporter Host Port")," in the host firewall rules to allow intranet access. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"9796")," is used as that host port.")),(0,a.kt)("h1",{id:"persistent-storage"},"Persistent Storage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," Configure one or more StorageClasses to use as ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"persistent storage")," for your Prometheus or Grafana pod.")),(0,a.kt)("p",null,"By default, when you enable Prometheus for either a cluster or project, all monitoring data that Prometheus collects is stored on its own pod. With local storage, if the Prometheus or Grafana pods fail, all the data is lost. Rancher recommends configuring an external persistent storage to the cluster. With the external persistent storage, if the Prometheus or Grafana pods fail, the new pods can recover using data from the persistent storage."),(0,a.kt)("p",null,"When enabling persistent storage for Prometheus or Grafana, specify the size of the persistent volume and select the StorageClass."),(0,a.kt)("h1",{id:"remote-storage"},"Remote Storage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," Need a remote storage endpoint to be available. The possible list of integrations is available ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/operating/integrations/"},"here"))),(0,a.kt)("p",null,"Using advanced options, remote storage integration for the Prometheus installation can be configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"prometheus.remoteWrite[0].url = http://remote1/push\nprometheus.remoteWrite[0].remoteTimeout = 33s\n\nprometheus.remoteWrite[1].url = http://remote2/push\n\n\nprometheus.remoteRead[0].url = http://remote1/read\nprometheus.remoteRead[0].proxyUrl = http://proxy.url\nprometheus.remoteRead[0].bearerToken = token-value\n\nprometheus.remoteRead[1].url = http://remote2/read\nprometheus.remoteRead[1].remoteTimeout = 33s\nprometheus.remoteRead[1].readRecent = true\n")),(0,a.kt)("p",null,"Additional fields can be set up based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/prometheus-operator/blob/master/Documentation/api.md#remotereadspec"},"ReadSpec")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/prometheus-operator/blob/master/Documentation/api.md#remotewritespec"},"RemoteWriteSpec")))}h.isMDXComponent=!0}}]);