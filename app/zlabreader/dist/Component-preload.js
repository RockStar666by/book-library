//@ui5-bundle zlab/zlabreader/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zlab/zlabreader/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("zlab.zlabreader.Component",{metadata:{manifest:"json"}})});
},
	"zlab/zlabreader/i18n/i18n.properties":'# This is the resource bundle for zlab.zlabreader\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Readers\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"zlab/zlabreader/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"zlab.zlabreader","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.8.2","toolsId":"8f67c02d-7e26-4a2d-aef0-4c17d2f8fa8c"},"dataSources":{"mainService":{"uri":"library/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"crossNavigation":{"inbounds":{"zlab-zlabreader-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Readers","action":"manage","title":"{{appTitle}}","subTitle":"{{appSubTitle}}","icon":"sap-icon://customer","indicatorDataSource":{"dataSource":"mainService","path":"/dynamic_dest/cap-library-app-srv/library/Readers/$count","refresh":10}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zlab.zlabreader.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ReadersList","target":"ReadersList"},{"pattern":"Readers({key}):?query:","name":"ReadersObjectPage","target":"ReadersObjectPage"}],"targets":{"ReadersList":{"type":"Component","id":"ReadersList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Readers","variantManagement":"Page","navigation":{"Readers":{"detail":{"route":"ReadersObjectPage"}}}}}},"ReadersObjectPage":{"type":"Component","id":"ReadersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Readers"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"caplibrary"}}'
}});