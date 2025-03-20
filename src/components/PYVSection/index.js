import "./PYVSection.scss";

function injectPYVSection() {
    document.getElementById("pyv-section").innerHTML = `
            <div class="section-content">
            <img alt=""
            <h2><span class="outlined">Ready
                    to</span><br>plan a visit?</h2>
                class="churchMembersCutout"
                src="http://localhost:5688/js/../assets/images/church-members-mixed-cutouts.png">
                <p>Find out what to expect, like where to park, where to check in, . And if
                    you're ready, let us know you're coming to get a personalized welcome guide
                    and a chance to chat with Pastor Christopher before your visit!</p>
                <div>
                    <div class="pyvIncentivesWrapper">
                        <img alt="" class="icon"
                            src="http://localhost:5688/js/../assets/images/icon-book.svg">
                        <p class="headline">Find out
                            exactly what to expect.</p>
                    </div>
                    <div class="pyvIncentivesWrapper">
                        <img alt="" class="icon"
                            src="http://localhost:5688/js/../assets/images/icon-book.svg">
                        <p class="headline">Get a
                            welcome guide.</p>
                    </div>
                    <div class="pyvIncentivesWrapper">
                        <img alt="" class="icon"
                            src="http://localhost:5688/js/../assets/images/icon-user.svg">
                        <div>
                            <p class="headline">Got
                                little ones? Register them!</p>
                        </div>
                    </div>
                    <div
                        class="pyvIncentivesWrapper mb-0">
                        <img alt="" class="icon"
                            src="http://localhost:5688/js/../assets/images/icon-chat-bubble.svg">
                        <div>
                            <p class="headline">Get
                                a text from Pastor Christopher!</p>
                            <p>Ask questions or just say hello!</p>
                        </div>
                    </div>
                </div>
                <div class="buttonWrapper"><a
                        class="btn-primary btn-bg-white flex width-100">Yes!</a><a
                        class="secondary bgBlack flex width-100">Not yet</a></div>
                <div class="flex-col gap-8"><a class="btn-primarybtn-bg-white flex width-100">Yes, let's
                        plan it!</a><a class="btn-primarybtn-bg-white flex width-100">I'll do it
                        later!</a>
                    <p>Not ready yet? That's totally fine!</p><a
                        class="secondary bgBlack flex width-100">No, I'm not.</a><a
                        class="secondary bgBlack flex width-100">No, but I'm interested.</a>
                </div>
                <div class="textPYVFormLink"><a
                        href="">Send me a link—I'll do it later!</a></div>
                <h3 class="bigType">We're so excited to meet you!</h3>
                <p>Submit the form below to let us know you're coming so we can plan for your
                    visit.</p>
                <div class="pyvContainer bg-paper">
                    <div class="intro">
                        <div id="inline-NlvmkQ3xO5uUJWEo6rzK-div" class="ep-iFrameContainer"
                            style="border-radius: 0px; display: block;">
                            <div id="inline-NlvmkQ3xO5uUJWEo6rzK-wrapper" class="ep-wrapper"
                                style="border-radius: 0px;">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/NlvmkQ3xO5uUJWEo6rzK"
                                    class="pyvFormEmbed"
                                    id="inline-NlvmkQ3xO5uUJWEo6rzK" data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow" data-trigger-value=""
                                    data-activation-type="alwaysActivated" data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="PYV Form (New Website)" data-height="1307"
                                    data-layout-iframe-id="inline-NlvmkQ3xO5uUJWEo6rzK"
                                    data-form-id="NlvmkQ3xO5uUJWEo6rzK"
                                    title="PYV Form (New Website)" scrolling="no"
                                    style="overflow: hidden; display: block;"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="pyvIncentivesWrapper">
                        <img alt="" class="icon"
                            src="http://localhost:5688/js/../assets/images/icon-book.svg">
                        <p>Do I need to submit a form?</p>
                    </div>
                    <div class="intro">
                        <p>We know visiting a new church can feel like a big step, but it
                            doesn't have to be. That's why we've made it simple, welcoming, and
                            most importantly—<em>personal</em>.</p>
                    </div>
                    <hr
                        class="chalkDivider chalkDivider blackChalkDivider">
                </div>
            </div>
    `;
}

export { injectPYVSection };
