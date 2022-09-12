"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Windows Cluster Support for Monitoring V2",shortTitle:"Windows Support",weight:5},l=void 0,p={unversionedId:"explanations/integrations-in-rancher/monitoring-and-alerting/windows-support",id:"version-2.5/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support",title:"Windows Cluster Support for Monitoring V2",description:"Available as of v2.5.8",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support.md",sourceDirName:"explanations/integrations-in-rancher/monitoring-and-alerting",slug:"/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support",permalink:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support.md",tags:[],version:"2.5",lastUpdatedAt:1662999236,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Windows Cluster Support for Monitoring V2",shortTitle:"Windows Support",weight:5},sidebar:"tutorialSidebar",previous:{title:"Built-in Dashboards",permalink:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"},next:{title:"PromQL Expression Reference",permalink:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"}},u={},c=[{value:"Comparison to Monitoring V1",id:"comparison-to-monitoring-v1",level:2},{value:"Cluster Requirements",id:"cluster-requirements",level:2},{value:"Upgrading Existing Clusters to wins v0.1.0",id:"upgrading-existing-clusters-to-wins-v010",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("p",null,"Starting at Monitoring V2 14.5.100 (used by default in Rancher 2.5.8), Monitoring V2 can now be deployed on a Windows cluster and will scrape metrics from Windows nodes using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter"},"prometheus-community/windows_exporter")," (previously named ",(0,i.kt)("inlineCode",{parentName:"p"},"wmi_exporter"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#comparison-to-monitoring-v1"},"Comparison to Monitoring V1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-requirements"},"Cluster Requirements"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-existing-clusters-to-wins-v0-1-0"},"Upgrading Existing Clusters to wins v0.1.0"))))),(0,i.kt)("h2",{id:"comparison-to-monitoring-v1"},"Comparison to Monitoring V1"),(0,i.kt)("p",null,"Unlike Monitoring V1 for Windows, metrics collected by ",(0,i.kt)("inlineCode",{parentName:"p"},"windows_exporter")," will be labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},"windows_")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"wmi_")," in accordance to a naming change from upstream from ",(0,i.kt)("inlineCode",{parentName:"p"},"wmi_exporter")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"windows_exporter"),"."),(0,i.kt)("p",null,"In addition, Monitoring V2 for Windows will no longer require users to keep port 9796 open on Windows hosts since the host metrics will published directly onto a port exposed on the windows-exporter Pod. This feature was powered by recent changes made by ",(0,i.kt)("inlineCode",{parentName:"p"},"wins")," v0.1.0 to support publishing ports exposed on the hostNetwork on Pods that use wins to run a privileged Windows binary as a host process."),(0,i.kt)("h2",{id:"cluster-requirements"},"Cluster Requirements"),(0,i.kt)("p",null,"Monitoring V2 for Windows can only scrape metrics from Windows hosts that have a minimum ",(0,i.kt)("inlineCode",{parentName:"p"},"wins")," version of v0.1.0.  To be able to fully deploy Monitoring V2 for Windows, all of your hosts must meet this requirement."),(0,i.kt)("p",null,"If you provision a fresh RKE1 cluster in Rancher 2.5.8, your cluster should already meet this requirement."),(0,i.kt)("h3",{id:"upgrading-existing-clusters-to-wins-v010"},"Upgrading Existing Clusters to wins v0.1.0"),(0,i.kt)("p",null,"If the cluster was provisioned before Rancher 2.5.8 (even if the current Rancher version is 2.5.8), you will not be able to successfully deploy Monitoring V2 for Windows until you upgrade the wins version on each host to at least v0.1.0."),(0,i.kt)("p",null,"To facilitate this upgrade, Rancher 2.5.8 has released a brand new Helm chart called ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-wins-upgrader"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Make sure Monitoring V1 for Windows is uninstalled.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deploy ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-wins-upgrader")," with the following override:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Masquerading bootstraps the wins-upgrader installation via\n# a previously whitelisted process path since the normal install path, \n# c:\\etc\\rancher\\wins\\wins-upgrade.exe is not normally whitelisted. \n# In this case, we are using the previously whitelisted process \n# path used by Monitoring V1.\nmasquerade:\n  enabled: true\n  as: c:\\\\etc\\wmi-exporter\\wmi-exporter.exe\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note for Non-Default Windows Prefix Path:")," If you set up the RKE cluster with a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," that has a non-default ",(0,i.kt)("inlineCode",{parentName:"p"},"win_prefix_path"),", you will need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"masquerade.as")," field with your prefix path in place of  ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\\\"),". "),(0,i.kt)("p",{parentName:"blockquote"},"For example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"win_prefix_path: 'c:\\host\\opt\\'"),", then you will need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"as: c:\\host\\opt\\etc\\wmi-exporter\\wmi-exporter.exe"),"."))),(0,i.kt)("li",{parentName:"ol"},"Once all your hosts have been successfully upgraded, please ensure that you deploy the Helm chart once again with default values to avoid conflicts with the following settings:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"masquerade:\n  enabled: false\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The hosts are ready for Monitoring V2 to be installed. You may choose to uninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-wins-upgrader")," chart or keep it in your cluster to facilitate future upgrades."),(0,i.kt)("p",null,"For more information on how it can be used, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/wins/blob/master/charts/rancher-wins-upgrader/README.md"},"README.md")," of the chart."))}m.isMDXComponent=!0}}]);