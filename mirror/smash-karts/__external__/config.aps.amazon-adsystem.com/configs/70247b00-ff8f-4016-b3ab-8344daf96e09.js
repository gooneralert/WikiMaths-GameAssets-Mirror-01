"use strict";(function(){try{var record=function(name,detail){aps.get(accountId).queue.push(new CustomEvent(name,{detail}))};const accountId="70247b00-ff8f-4016-b3ab-8344daf96e09";window._aps=window._aps||new Map;const aps=window._aps;aps.has(accountId)||aps.set(accountId,{queue:[],store:new Map}),record("_config/requestViewerCountry/define",{"code":"AU"});record("analytics/sampling/set",{"rates":{"error":0.001,"status":0.0001}});record("a3pes/video/activate",{"restrictions":{"block":{"accounts":["5220","e32f1423-28bc-43ed-8ab0-5ae6b4449cf8"]}}});record("a3pes/video/activate",{"bypassCountryCheck":true,"restrictions":{"allow":{"accountTypes":["ssw"]},"block":{"accounts":["e32f1423-28bc-43ed-8ab0-5ae6b4449cf8"]}}});record("a3pes/video/activate",{"bypassCountryCheck":true,"restrictions":{"allow":{"accountTypes":["mw"],"rate":0.5},"block":{"accounts":["5220"]}}});record("idVendors/enabled/set",{"bidParameterKeys":["liveintent","merkle","intimateMerger","pair","amx","33across","fTrack","publink","anonymised","quantcast","idPlus","unifiedid","fabrick","uid","criteo","yahoo","liveRamp","id5","firstid","pubcommon","audigent","lightPublisherAudiences","lotame"]});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"audigent","allowedRegions":undefined,"blockedRegions":["BR"],"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var audigentPropertyId = '288';
if (audigentPropertyId && audigentPropertyId.charAt(0) !== '%') {
  (function (H, A, D, R, O, N, i, d) {
    H[N] = H[N] || function () { (H[N].q = H[N].q || []).push(arguments) };
    i = A.createElement(D); A.async = true;
    i.src = R + "?url=" + encodeURIComponent(H.location.href) + "&ref=" + encodeURIComponent(A.referrer) +
      "&_it=amazon&partner_id=" + O; d = A.getElementsByTagName(D)[0]; d.parentNode.insertBefore(i, d);
  })(window, document, 'script', 'https://cdn.hadronid.net/hadron.js', audigentPropertyId, 'ha');
}
})():(!["BR"]||["BR"]&&!["BR"].includes("AU"))&&(function anonymous(
) {
var audigentPropertyId = '288';
if (audigentPropertyId && audigentPropertyId.charAt(0) !== '%') {
  (function (H, A, D, R, O, N, i, d) {
    H[N] = H[N] || function () { (H[N].q = H[N].q || []).push(arguments) };
    i = A.createElement(D); A.async = true;
    i.src = R + "?url=" + encodeURIComponent(H.location.href) + "&ref=" + encodeURIComponent(A.referrer) +
      "&_it=amazon&partner_id=" + O; d = A.getElementsByTagName(D)[0]; d.parentNode.insertBefore(i, d);
  })(window, document, 'script', 'https://cdn.hadronid.net/hadron.js', audigentPropertyId, 'ha');
}
})()
},"defaultPropertyId":"288"});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"id5","allowedRegions":undefined,"blockedRegions":["BR"],"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var id5PropertyId = '258 ';
if (id5PropertyId && id5PropertyId.charAt(0) !== '%') {
    var id5Script = document.createElement('script');
    id5Script.src = '//cdn.id5-sync.com/api/1.0/id5-api.js';
    id5Script['onload'] = function(e) { 
        ID5.init({ partnerId: Number(id5PropertyId) , provider: 'aps' })
    };
    document.head.appendChild(id5Script);
}
})():(!["BR"]||["BR"]&&!["BR"].includes("AU"))&&(function anonymous(
) {
var id5PropertyId = '258 ';
if (id5PropertyId && id5PropertyId.charAt(0) !== '%') {
    var id5Script = document.createElement('script');
    id5Script.src = '//cdn.id5-sync.com/api/1.0/id5-api.js';
    id5Script['onload'] = function(e) { 
        ID5.init({ partnerId: Number(id5PropertyId) , provider: 'aps' })
    };
    document.head.appendChild(id5Script);
}
})()
},"defaultPropertyId":"258 "});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"liveRamp","allowedRegions":undefined,"blockedRegions":undefined,"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
(function(){if (window.apstag) {window.apstag.__liveRamp__ = false;}})();
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
(function(){if (window.apstag) {window.apstag.__liveRamp__ = false;}})();
})()
},"defaultPropertyId":"2173"});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"pubcommon","allowedRegions":undefined,"blockedRegions":["BR"],"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
if (!window.PublisherCommonId) {
    var pubcommonScript = document.createElement('script');
    pubcommonScript.src = '//secure.cdn.fastclick.net/js/pubcid/latest/pubcid.min.js';
    document.head.appendChild(pubcommonScript);
}
})():(!["BR"]||["BR"]&&!["BR"].includes("AU"))&&(function anonymous(
) {
if (!window.PublisherCommonId) {
    var pubcommonScript = document.createElement('script');
    pubcommonScript.src = '//secure.cdn.fastclick.net/js/pubcid/latest/pubcid.min.js';
    document.head.appendChild(pubcommonScript);
}
})()
},"defaultPropertyId":undefined});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"publink","allowedRegions":undefined,"blockedRegions":["BR"],"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
function initPubLink() {
  window.cnvr_launcher_options = { lid: 681 };
  var pubLinkScript = document.createElement('script');
  pubLinkScript.type = 'text/javascript';
  pubLinkScript.async = true;
  pubLinkScript.src = 'https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher-stub.min.js';
  pubLinkScript.onload = function (e) {
    window.conversant.launch('publink', 'start', {
      apiKey: 'd0f459a3-e963-424e-aca6-c9255e04e301',
      cssSelectors: ['input[type=email]']
    });
  };
  document.head.appendChild(pubLinkScript);
}

if (!window.publink_options) {
  initPubLink();
}
})():(!["BR"]||["BR"]&&!["BR"].includes("AU"))&&(function anonymous(
) {
function initPubLink() {
  window.cnvr_launcher_options = { lid: 681 };
  var pubLinkScript = document.createElement('script');
  pubLinkScript.type = 'text/javascript';
  pubLinkScript.async = true;
  pubLinkScript.src = 'https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher-stub.min.js';
  pubLinkScript.onload = function (e) {
    window.conversant.launch('publink', 'start', {
      apiKey: 'd0f459a3-e963-424e-aca6-c9255e04e301',
      cssSelectors: ['input[type=email]']
    });
  };
  document.head.appendChild(pubLinkScript);
}

if (!window.publink_options) {
  initPubLink();
}
})()
},"defaultPropertyId":undefined});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"liveintent","allowedRegions":undefined,"blockedRegions":["BR"],"vendorLoadedSampleRate":5,"domainPrecedence":[],"defaultScript":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
(function(){if (window.apstag) {window.apstag.__liveintent__ = false;}})();
})():(!["BR"]||["BR"]&&!["BR"].includes("AU"))&&(function anonymous(
) {
(function(){if (window.apstag) {window.apstag.__liveintent__ = false;}})();
})()
},"defaultPropertyId":"001PM00000ZbEPWYA3"});record("idVendors/integration/execute",{"accountId":"70247b00-ff8f-4016-b3ab-8344daf96e09","sourceId":"600","countryCode":"AU","vendorId":"wunderkind","allowedRegions":undefined,"blockedRegions":undefined,"vendorLoadedSampleRate":5,"domainPrecedence":[{"hostnames":["geektown.co.uk"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7090';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7090';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7090"},{"hostnames":["pogo.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6435';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6435';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6435"},{"hostnames":["rankedboost.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6446';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6446';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6446"},{"hostnames":["planetminecraft.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6443';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6443';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6443"},{"hostnames":["fortnite.gg"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6543';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6543';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6543"},{"hostnames":["smogon.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6550';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6550';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6550"},{"hostnames":["mobafire.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6447';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6447';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6447"},{"hostnames":["statsforspotify.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7084';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7084';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7084"},{"hostnames":["d20srd.org"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6774';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6774';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6774"},{"hostnames":["aternos.org"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6436';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6436';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6436"},{"hostnames":["systemrequirementslab.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6547';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6547';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6547"},{"hostnames":["gosunoob.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6449';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6449';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6449"},{"hostnames":["lexicanum.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6773';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6773';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6773"},{"hostnames":["resetera.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6441';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6441';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6441"},{"hostnames":["helltides.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6440';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6440';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6440"},{"hostnames":["missing11.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6718';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6718';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6718"},{"hostnames":["gameleap.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7086';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7086';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7086"},{"hostnames":["flightrising.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6542';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6542';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6542"},{"hostnames":["fifarenderz.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6648';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6648';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6648"},{"hostnames":["belloflostsouls.net"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6771';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6771';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6771"},{"hostnames":["loot.tv"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6445';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6445';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6445"},{"hostnames":["fifacm.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7083';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7083';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7083"},{"hostnames":["playfootball.games"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6544';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6544';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6544"},{"hostnames":["powerpyx.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6444';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6444';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6444"},{"hostnames":["metatft.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6546';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6546';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6546"},{"hostnames":["ranker.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7088';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7088';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7088"},{"hostnames":["sammobile.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7092';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7092';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7092"},{"hostnames":["op.gg"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6439';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6439';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6439"},{"hostnames":["traderie.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7632';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7632';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7632"},{"hostnames":["mtggoldfish.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6442';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6442';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6442"},{"hostnames":["hltv.org"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6541';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6541';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6541"},{"hostnames":["playstationtrophies.org"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7087';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7087';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7087"},{"hostnames":["zockify.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7093';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7093';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7093"},{"hostnames":["wafflegame.net"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6437';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6437';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6437"},{"hostnames":["fnbr.co"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7081';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7081';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7081"},{"hostnames":["fflogs.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6548';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6548';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6548"},{"hostnames":["dnd-wiki.org"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6775';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6775';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6775"},{"hostnames":["lcpdfr.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6549';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6549';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6549"},{"hostnames":["lolchess.gg"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '6545';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '6545';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"6545"},{"hostnames":["challonge.com"],"script":function anonymous(
) {
undefined?undefined.includes("AU")&&(function anonymous(
) {
var wunderkindPropertyId = '7091';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})():(!undefined||undefined&&!undefined.includes("AU"))&&(function anonymous(
) {
var wunderkindPropertyId = '7091';
if (!window.bouncex && (wunderkindPropertyId && wunderkindPropertyId.charAt(0) !== '%')) {
  (function (d) {
    var e = d.createElement('script');
    e.src = d.location.protocol + '//tag.wknd.ai/' + wunderkindPropertyId + '/i.js';
    e.async = true;
    d.getElementsByTagName('head')[0].appendChild(e);
  }(document));
}
})()
},"propertyId":"7091"}],"defaultScript":undefined,"defaultPropertyId":undefined});record("_config/config/didLoad",undefined)}catch(e){console.error(e)}})();
