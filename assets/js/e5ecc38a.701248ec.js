"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77378],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Selectors and Scrape Configs",weight:2,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/selectors-and-scrape","/rancher/v2.5/en/istio/setup/node-selectors","/rancher/v2.x/en/istio/v2.5/configuration-reference/selectors-and-scrape/"]},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",id:"version-2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",title:"Selectors and Scrape Configs",description:"The Monitoring app sets prometheus.prometheusSpec.ignoreNamespaceSelectors=false, which enables monitoring across all namespaces by default.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",tags:[],version:"2.5",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Selectors and Scrape Configs",weight:2,aliases:["/rancher/v2.5/en/istio/v2.5/configuration-reference/selectors-and-scrape","/rancher/v2.5/en/istio/setup/node-selectors","/rancher/v2.x/en/istio/v2.5/configuration-reference/selectors-and-scrape/"]},sidebar:"tutorialSidebar",previous:{title:"Enable Istio with Pod Security Policies",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},next:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"}},p={},m=[{value:"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True",id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true",level:3},{value:"Enabling Prometheus to Detect Resources in Other Namespaces",id:"enabling-prometheus-to-detect-resources-in-other-namespaces",level:3},{value:"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor",id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor",level:3},{value:"Monitoring across namespaces: Set ignoreNamespaceSelectors to False",id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Monitoring app sets ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false"),", which enables monitoring across all namespaces by default."),(0,r.kt)("p",null,"This ensures you can view traffic, metrics and graphs for resources deployed in a namespace with ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label. "),(0,r.kt)("p",null,"If you would like to limit Prometheus to specific namespaces, set ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),". Once you do this, you will need to add additional configuration to continue to monitor your resources."),(0,r.kt)("h3",{id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true"},"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True"),(0,r.kt)("p",null,"This limits monitoring to specific namespaces. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", navigate to ",(0,r.kt)("strong",{parentName:"li"},"Installed Apps")," if Monitoring is already installed, or ",(0,r.kt)("strong",{parentName:"li"},"Charts")," in ",(0,r.kt)("strong",{parentName:"li"},"Apps & Marketplace")," "),(0,r.kt)("li",{parentName:"ol"},"If starting a new install, ",(0,r.kt)("strong",{parentName:"li"},"Click")," the ",(0,r.kt)("strong",{parentName:"li"},"rancher-monitoring")," chart, then in ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit as Yaml"),". "),(0,r.kt)("li",{parentName:"ol"},"If updating an existing installation, click on ",(0,r.kt)("strong",{parentName:"li"},"Upgrade"),", then in ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit as Yaml"),". "),(0,r.kt)("li",{parentName:"ol"},"Set",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true")),(0,r.kt)("li",{parentName:"ol"},"Complete install or upgrade")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Prometheus will be limited to specific namespaces  which means one of the following configurations will need to be set up to continue to view data in various dashboards"),(0,r.kt)("h3",{id:"enabling-prometheus-to-detect-resources-in-other-namespaces"},"Enabling Prometheus to Detect Resources in Other Namespaces"),(0,r.kt)("p",null,"There are two different ways to enable Prometheus to detect resources in other namespaces when ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),": "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Monitoring specific namespaces:")," Add a Service Monitor or Pod Monitor in the namespace with the targets you want to scrape."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Monitoring across namespaces:")," Add an ",(0,r.kt)("inlineCode",{parentName:"li"},"additionalScrapeConfig")," to your rancher-monitoring instance to scrape all targets in all namespaces.")),(0,r.kt)("h3",{id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor"},"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor"),(0,r.kt)("p",null,"This option allows you to define which specific services or pods you would like monitored in a specific namespace. "),(0,r.kt)("p",null,"The usability tradeoff is that you have to create the service monitor or pod monitor per namespace since you cannot monitor across namespaces."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," Define a ServiceMonitor or PodMonitor for ",(0,r.kt)("inlineCode",{parentName:"p"},"<your namespace>"),". An example ServiceMonitor is provided below. ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer"),", open the kubectl shell"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/pod monitor file>.yaml")," if the file is stored locally in your cluster. "),(0,r.kt)("li",{parentName:"ol"},"Or run ",(0,r.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),", paste the file contents into the terminal, then run ",(0,r.kt)("inlineCode",{parentName:"li"},"EOF")," to complete the command. "),(0,r.kt)("li",{parentName:"ol"},"If starting a new install, ",(0,r.kt)("strong",{parentName:"li"},"Click")," the ",(0,r.kt)("strong",{parentName:"li"},"rancher-monitoring")," chart and scroll down to ",(0,r.kt)("strong",{parentName:"li"},"Preview Yaml"),". "),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl label namespace <your namespace> istio-injection=enabled")," to enable the envoy sidecar injection")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"<your namespace>")," can be scraped by prometheus. "),(0,r.kt)("figcaption",null,"Example Service Monitor for Istio Proxies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: envoy-stats-monitor\n  namespace: istio-system\n  labels:\n    monitoring: istio-proxies\nspec:\n  selector:\n    matchExpressions:\n    - {key: istio-prometheus-ignore, operator: DoesNotExist}\n  namespaceSelector:\n    any: true\n  jobLabel: envoy-stats\n  endpoints:\n  - path: /stats/prometheus\n    targetPort: 15090\n    interval: 15s\n    relabelings:\n    - sourceLabels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - action: labeldrop\n      regex: \"__meta_kubernetes_pod_label_(.+)\"\n    - sourceLabels: [__meta_kubernetes_namespace]\n      action: replace\n      targetLabel: namespace\n    - sourceLabels: [__meta_kubernetes_pod_name]\n      action: replace\n      targetLabel: pod_name\n")),(0,r.kt)("h3",{id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false"},"Monitoring across namespaces: Set ignoreNamespaceSelectors to False"),(0,r.kt)("p",null,"This enables monitoring across namespaces by giving Prometheus additional scrape configurations. "),(0,r.kt)("p",null,"The usability tradeoff is that  all of Prometheus' ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigs")," are maintained in a single Secret. This could make upgrading difficult if monitoring is already deployed with additionalScrapeConfigs before installing Istio. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If starting a new install, ",(0,r.kt)("strong",{parentName:"li"},"Click")," the ",(0,r.kt)("strong",{parentName:"li"},"rancher-monitoring")," chart, then in ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit as Yaml"),". "),(0,r.kt)("li",{parentName:"ol"},"If updating an existing installation, click on ",(0,r.kt)("strong",{parentName:"li"},"Upgrade"),", then in ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," click ",(0,r.kt)("strong",{parentName:"li"},"Edit as Yaml"),". "),(0,r.kt)("li",{parentName:"ol"},"If updating an existing installation, click on ",(0,r.kt)("strong",{parentName:"li"},"Upgrade")," and then ",(0,r.kt)("strong",{parentName:"li"},"Preview Yaml"),"."),(0,r.kt)("li",{parentName:"ol"},"Set",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.additionalScrapeConfigs")," array to the ",(0,r.kt)("strong",{parentName:"li"},"Additional Scrape Config")," provided below. "),(0,r.kt)("li",{parentName:"ol"},"Complete install or upgrade")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," All namespaces with the ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label will be scraped by prometheus."),(0,r.kt)("figcaption",null,"Additional Scrape Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'istio/envoy-stats'\n  scrape_interval: 15s\n  metrics_path: /stats/prometheus\n  kubernetes_sd_configs:\n    - role: pod\n  relabel_configs:\n    - source_labels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]\n      action: replace\n      regex: ([^:]+)(?::\\d+)?;(\\d+)\n      replacement: $1:15090\n      target_label: __address__\n    - action: labelmap\n      regex: __meta_kubernetes_pod_label_(.+)\n    - source_labels: [__meta_kubernetes_namespace]\n      action: replace\n      target_label: namespace\n    - source_labels: [__meta_kubernetes_pod_name]\n      action: replace\n      target_label: pod_name\n")))}d.isMDXComponent=!0}}]);