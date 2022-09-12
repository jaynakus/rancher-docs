"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11569],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),d=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=n,g=m["".concat(u,".").concat(p)]||m[p]||l[p]||a;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Setting up Monitoring for a Workload",weight:4},u=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",title:"Setting up Monitoring for a Workload",description:"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",tags:[],version:"current",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Setting up Monitoring for a Workload",weight:4},sidebar:"tutorialSidebar",previous:{title:"Uninstall Monitoring",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},next:{title:"Customizing Grafana Dashboards",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"}},c={},l=[{value:"Display CPU and Memory Metrics for a Workload",id:"display-cpu-and-memory-metrics-for-a-workload",level:3},{value:"Setting up Metrics Beyond CPU and Memory",id:"setting-up-metrics-beyond-cpu-and-memory",level:3}],m={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default."),(0,a.kt)("p",null,"The steps for setting up monitoring for workloads depend on whether you want basic metrics such as CPU and memory for the workload, or whether you want to scrape custom metrics from the workload."),(0,a.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default. The resource usage time series data is in Prometheus's local time series database."),(0,a.kt)("p",null,"Grafana shows the data in aggregate, but you can see the data for the individual workload by using a PromQL query that extracts the data for that workload. Once you have the PromQL query, you can execute the query individually in the Prometheus UI and see the time series visualized there, or you can use the query to customize a Grafana dashboard to display the workload metrics. For examples of PromQL queries for workload metrics, see ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/expression/#workload-metrics"},"this section.")),(0,a.kt)("p",null,"To set up custom metrics for your workload, you will need to set up an exporter and create a new ServiceMonitor custom resource to configure Prometheus to scrape metrics from your exporter."),(0,a.kt)("h3",{id:"display-cpu-and-memory-metrics-for-a-workload"},"Display CPU and Memory Metrics for a Workload"),(0,a.kt)("p",null,"By default, the monitoring application already scrapes CPU and memory."),(0,a.kt)("p",null,"To get some fine-grained detail for a particular workload, you can customize a Grafana dashboard to display the metrics for a particular workload."),(0,a.kt)("h3",{id:"setting-up-metrics-beyond-cpu-and-memory"},"Setting up Metrics Beyond CPU and Memory"),(0,a.kt)("p",null,"For custom metrics, you will need to expose the metrics on your application in a format supported by Prometheus."),(0,a.kt)("p",null,"Then we recommend that you should create a new ServiceMonitor custom resource. When this resource is created, the Prometheus custom resource will be automatically updated so that its scrape configuration includes the new custom metrics endpoint. Then Prometheus will begin scraping metrics from the endpoint."),(0,a.kt)("p",null,"You can also create a PodMonitor to expose the custom metrics endpoint, but ServiceMonitors are more appropriate for the majority of use cases."))}p.isMDXComponent=!0}}]);