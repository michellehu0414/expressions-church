import "./SundayServiceSection.scss";

function injectSundayServiceSection() {
    document.getElementById("sunday-service-section").innerHTML = `
        <div class="section-content">
        <h2><span class="outlined">sunday</span> service</h2>
        <img src="assets/images/pastor-christopher-welcome-family.jpg" alt=""
            class="pastor-welcome-family" />
        <h2 class="big-type">Join us this Sunday @ 10AM. Come as you are.</h2>
        <p class="sunday-service-intro-text">We’d love to see you this Sunday. Whether it’s your
            first time at church or you’re looking for a new church home, we welcome you.</p>
        <div>
            <h3>Service Info</h3>
            <iframe className="googleMapsEmbed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.3883823355854!2d-118.09827418680484!3d34.15776293154459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ddc93e37319d%3A0xc16141ac9c2f1e6c!2sExpressions%20Church!5e0!3m2!1sen!2sus!4v1740717655727!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div class="sunday-service-info-wrapper">
                <div class="service-info-content service-time-wrapper">
                    <img src="assets/svg/icon-calendar.svg" class="calendar-icon" />
                    <p>Every Sunday | 10:00 AM </p>
                </div>
                <div class="service-info-content">
                    <img src="assets/svg/icon-location.svg" class="location-icon" />
                    <a href="https://maps.app.goo.gl/1vADDLsqh1g5mKf69">2540 E Orange Grove Blvd,
                        Pasadena, CA 91107</a>
                </div>
                <a href="https://maps.app.goo.gl/1vADDLsqh1g5mKf69" class="btn-primary btn-bg-white">Get
                    Directions</a>
                <button>Add Sunday Service To Calendar</button>
            </div>
        </div>
    </div>
    `;
}

export { injectSundayServiceSection };
