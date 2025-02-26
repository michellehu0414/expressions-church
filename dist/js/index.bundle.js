(()=>{"use strict";var e,t={263:(e,t,r)=>{var n=r(540),a=r(338);const o=function(e){var t=e.image,r=e.altText,a=e.headline,o=e.bodyText,i=e.primaryButtonText,c=e.primaryButtonLink,l=e.secondaryButtonText,s=e.secondaryButtonLink,u=e.showPrimaryButton,m=void 0===u||u,d=e.showSecondaryButton,p=void 0!==d&&d;return n.createElement("div",{className:"Card-module__card--t3s26"}," ",n.createElement("img",{src:t||"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",alt:r||"Default image",className:"Card-module__cardImage--vIupu",loading:"lazy"}),n.createElement("div",{className:"Card-module__cardContent--P2av8"},n.createElement("h3",{className:"Card-module__cardHeadline--o7bbr"},a),n.createElement("p",{className:"Card-module__cardBody--eRDq_"},o),n.createElement("div",{className:"Card-module__buttonContainer--ryi1o"},m&&n.createElement("button",{href:c,class:"primaryButton"},i),p&&n.createElement("button",{href:s,class:"secondaryButton"},l))))};var i={"partner-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"Image 1",headline:"Partner with us",bodyText:"Support our mission by partnering with us.",primaryButtonText:"Become a Partner",primaryButtonLink:"www.example.com",primaryButtonExternal:"true",showSecondaryButton:"true",secondaryButtonText:"Learn more",secondaryButtonLink:"/about"},"fire-relief-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/wildfire-red-night-sky.webp",altText:"Fire relief",headline:"Fire Relief",bodyText:"Families affected by the Los Angeles fires—including us—need immediate support. There are many ways you can help rebuild SGV.",primaryButtonText:"Donate",primaryButtonLink:"/firerelief",showSecondaryButton:"true",secondaryButtonText:"See how you can help",secondaryButtonLink:"/firerelief"},"give-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"Image 2",headline:"Give",bodyText:"We are a brand new church. Along with many families, we lost our building to the Eaton Fire. Help us rebuild and uplift SGV.",primaryButtonText:"Give now",primaryButtonLink:"/give",showSecondaryButton:"true",secondaryButtonText:"Read Our Story",secondaryButtonLink:"/about"},"find-community-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Find your Community",bodyText:"Our community groups and gatherings....",primaryButtonText:"Explore Community",primaryButtonLink:"/community",showSecondaryButton:"true",secondaryButtonText:"Sign Up"},"serve-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Serve with a Team",bodyText:"God has given all of us a gift from his great variety of spiritual gifts. Use them well to serve one another. We have 9 teams in total.",primaryButtonText:"Get started",primaryButtonLink:"/serve",secondaryButtonText:"Get Started"},"serve-sgv-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/three-fire-relief-volunteers-outdoor.webp",altText:"text",headline:"Serve SGV",bodyText:"Join our community efforts and support our SGV neighbors.",primaryButtonText:"Sign up now",primaryButtonLink:"www.example.com",primaryButtonExternal:"true",secondaryButtonText:"Learn more",secondaryButtonLink:"/serve-sgv"},"prayer-request-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Prayer Request",bodyText:"We’d love to pray for you. Share your request with us—you may choose to remain anonymous.",primaryButtonText:"Request Prayer",primaryButtonLink:"www.example.com",primaryButtonExternal:"true"},"baptism-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Get Baptized",bodyText:"We’d love to pray for you. Share your request with us—you may choose to remain anonymous.",primaryButtonText:"Get Started",primaryButtonLink:"www.example.com",primaryButtonExternal:"true",secondaryButtonText:"Learn more",secondaryButtonLink:"/baptism"},"newcomer-connect-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Attend Newcomer Connect",bodyText:"Meet other newcomers and get to know us at our Newcomer Connect after Sunday service at a local coffee shop.",primaryButtonText:"Plan your visit",primaryButtonLink:"www.example.com",primaryButtonExternal:"true"},"subscribe-newsletter-card":{image:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",altText:"text",headline:"Stay up to date",bodyText:"Subscribe to our newsletter to stay up to date with our latest news and events.",primaryButtonText:"Subscribe",primaryButtonLink:"www.example.com",primaryButtonExternal:"true"}};const c=function(e){var t=e.id;return i[t]?n.createElement(o,i[t]):null};const l=function(e){var t=e.variant,r=e.className,a=t?"".concat(t,"ChalkDivider"):"";return n.createElement("hr",{className:"chalkDivider ".concat(r," ").concat(a)})};const s=function(e){var t=e.headline,r=e.showDivider,a=void 0===r||r,o=e.content,i=e.className;return n.createElement("section",{className:"".concat("wRkQbzIJCXtZetEDROZX"," ").concat(i)},t&&n.createElement("h3",{className:"kfEexka0VykafVCdIJS_"},t),a&&n.createElement(l,{variant:"black"}),n.createElement("div",null,o))};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const d=function(e){var t=e.title,r=e.content,a=u((0,n.useState)(!1),2),o=a[0],i=a[1];return n.createElement("div",{className:"accordion"},n.createElement("button",{className:"accordion-header",onClick:function(){i(!o)},"aria-expanded":o},n.createElement("h3",null,t),n.createElement("span",{className:"accordion-icon"},o?"-":"+")),n.createElement("div",{className:"accordion-content ".concat(o?"open":"")},n.createElement("p",null,r)))};const p=function(e){var t=e.items,r=void 0===t?[]:t;return n.createElement("section",null,r.map((function(e,t){return n.createElement(d,{key:t,title:e.title,content:e.content})})))};var h=[{title:"Serve SGV",content:"You help us express Jesus' love beyond Sundays through various events and outreaches."},{title:"Creative",content:"You help people get a glimpse of our church through photography, videography, graphic design, and social media."},{title:"Production",content:"You work behind the scenes to help with audio and visual elements of the service (we'll train you!)."},{title:"Band",content:"Through instruments or vocals, you help people experience Jesus' love through worship."},{title:"Kids (Background check required)",content:"Help kids learn more about Jesus, the Bible, and faith as a teacher or helper."},{title:"Hospitality",content:"You help manage our refreshments (we always need coffee) and connect newcomers in our church."},{title:"Prayer",content:"You intercede on behalf of others through midweek or in-service prayer."},{title:"Parking",content:"You help set up and tear-down directional signs and welcome people as their first impression."}];const v=function(){return n.createElement(s,{className:"teamsContainer",headline:"Our Teams",content:n.createElement(p,{items:h})})};const y=function(){return n.createElement("section",{className:"get-involved-section"},n.createElement("h2",null,n.createElement("span",{className:"outlined"},"Get")," Involved"),n.createElement("div",{className:"sectionContent"},n.createElement(c,{id:"serve-sgv-card"}),n.createElement(l,{variant:"white",className:"scaleXNeg1"}),n.createElement(c,{id:"find-community-card"}),n.createElement(l,{variant:"white"}),n.createElement(c,{id:"serve-card"}),n.createElement(v,null),n.createElement(l,{variant:"white",className:"rotate180"}),n.createElement(c,{id:"give-card"}),n.createElement(l,{variant:"white"}),n.createElement(c,{id:"fire-relief-card"}),n.createElement(l,{variant:"white",className:"transformNone"}),n.createElement(c,{id:"partner-card"}),n.createElement(l,{variant:"white"}),n.createElement(c,{id:"newcomer-connect-card"}),n.createElement(l,{variant:"white"})))};var w="IntroSection-module__cardBGPaper--ddzAh",f="IntroSection-module__largeText--mqVyj";const b=function(){return(0,n.useEffect)((function(){var e=document.getElementById("subsplash-events-embed"),t=document.createElement("script");t.type="text/javascript",t.onload=function(){subsplashEmbed("+dwm2/lb/ca/+qtbc9rz?embed","https://subsplash.com/","subsplash-embed-qtbc9rz")},t.src="https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js",e.parentElement.insertBefore(t,e)}),[]),n.createElement("div",{className:"subsplash-embed-events container-max-width",id:"subsplash-embed-qtbc9rz"})};var g=function(e,t){var r=document.getElementById(t);r&&a.createRoot(r).render(n.createElement(e,null))};g((function(){return n.createElement("section",{className:"IntroSection-module__introSection--QRR3U"},n.createElement("div",{className:"sectionContent"},n.createElement("p",{className:f},"We believe Jesus can transform us from the inside out—"),n.createElement("div",{className:"IntroSection-module__christopherHugWrapper--ndJBF"},n.createElement("img",{className:"IntroSection-module__imgChristopherHug--ocyHm",src:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png",alt:""}),n.createElement("div",{className:w},n.createElement("p",null,"People can’t see God, but they can see his church, and we show that we know who God is by how we love others."))),n.createElement("p",{className:f},"Our vision ?",n.createElement("br",null),"To be an expression of God’s love in the SGV."),n.createElement("img",{className:"IntroSection-module__imgLaundryLove--Mu3ky",src:"https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp",alt:""}),n.createElement("div",{className:w},n.createElement("p",{className:f},"At Expressions, everyone is invited to explore faith in Jesus, experience life with him, and express love like him."))))}),"intro-section"),g(y,"get-involved-section"),g(b,"subsplash-events-embed")}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var u=l(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkexpressions_church_theme=self.webpackChunkexpressions_church_theme||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[606,338],(()=>n(263)));a=n.O(a)})();