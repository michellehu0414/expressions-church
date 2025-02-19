(() => {
    var e = {
        537: () => { }
    }
        , t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
            i.exports
    }
    (() => {
        "use strict";
        n(537);
        var e = function (e) {
            var t = e.imageSrc
                , n = e.altText
                , r = e.headline
                , a = e.bodyText
                , i = e.primaryButtonText
                , o = e.secondaryButtonText;
            return '\n        <img src="'.concat(t, '" alt="').concat(n, '" class="card-image">\n        <div class="card-content">\n          <h3 class="card-headline">').concat(r, '</h3>\n          <p class="card-body">').concat(a, '</p>\n          <div class="card-buttons">\n            <button class="button primary">').concat(i, '</button>\n            <button class="button secondary">').concat(o, "</button>\n          </div>\n        </div>\n    ")
        };
        document.addEventListener("DOMContentLoaded", (function () {
            var t = e({
                imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                altText: "Image 1",
                headline: "Fire Relief",
                bodyText: "Families affected by the Los Angeles fires—including us—need immediate support. There are many ways you can help rebuild SGV.",
                primaryButtonText: "Volunteer",
                secondaryButtonText: "See how you can help"
            })
                , n = e({
                    imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                    altText: "Image 2",
                    headline: "Headline 2",
                    bodyText: "Description for card 2.",
                    primaryButtonText: "Button 3",
                    secondaryButtonText: "Button 4"
                })
                , r = e({
                    imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                    altText: "Image 2",
                    headline: "Give",
                    bodyText: "We are a brand new church. Along with many families, we lost our building to the Eaton Fire. Help us rebuild and uplift SGV.",
                    primaryButtonText: "Give now",
                    secondaryButtonText: "Read our story"
                })
                , a = e({
                    imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                    altText: "text",
                    headline: "Find your Community",
                    bodyText: "Our community groups and gatherings....",
                    primaryButtonText: "Sign up",
                    secondaryButtonText: "Explore community"
                })
                , i = e({
                    imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                    altText: "text",
                    headline: "Serve with a Team",
                    bodyText: "God has given all of us a gift from his great variety of spiritual gifts. Use them well to serve one another. We have 9 teams in total.",
                    primaryButtonText: "Get started",
                    secondaryButtonText: "Discover Teams"
                })
                , o = e({
                    imageSrc: "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp",
                    altText: "text",
                    headline: "Serve SGV",
                    bodyText: "Join our community efforts and support our SGV neighbors.",
                    primaryButtonText: "Sign up now",
                    secondaryButtonText: "Learn more"
                });
            document.getElementById("partner-card").innerHTML = t,
                document.getElementById("fire-relief-card").innerHTML = n,
                document.getElementById("give-card").innerHTML = r,
                document.getElementById("find-community-card").innerHTML = a,
                document.getElementById("serve-card").innerHTML = i,
                document.getElementById("serve-sgv-card").innerHTML = o
        }
        )),
            document.getElementById("get-involved").innerHTML = '\n    <div id="partner-card" class="card"></div>\n    <div id="fire-relief-card" class="card"></div>\n    <div id="give-card" class="card"></div>\n    <div id="find-community-card" class="card"></div>\n    <div id="serve-card" class="card"></div>\n    <div id="serve-sgv-card" class="card"></div>\n',
            document.addEventListener("DOMContentLoaded", (function () {
                document.getElementById("intro").innerHTML = '\n        <div class="section-content">\n            <p class="large-text">\n                We believe Jesus can transform us from the inside out—\n            </p>\n            <div class="christopher-hug_wrapper">\n                <img class="img-christopher-hug"\n                    src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png"\n                    alt="">\n                <div class="card-bg-paper">\n                    <p>People can’t see God, but they can see his church, and we show that we know\n                        who\n                        God is by how we love others.</p>\n                </div>\n            </div>\n            <p class="large-text">\n                Our vision?<br>\n                To be an expression of God’s love in the SGV.\n            </p>\n            <img class="img-laundry-love"\n                src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp"\n                alt="">\n            <div class="card-bg-paper">\n                <p class="large-text black">At Expressions, everyone is invited to explore faith in\n                    Jesus, experience\n                    life with him,\n                    and express love like him.\n                </p>\n            </div>\n        </div>\n    '
            }
            )),
            document.readyState
    }
    )()
}
)();
//# sourceMappingURL=home.min.js.map
