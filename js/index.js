// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const profile_card = () => {
	return `
  <div class="card">
    <div class="card-detail">
      <div class="card-detail-thumbnail">
        <img src="/img/profile.png" alt="profile image"/>
      </div>
      <div class="card-detail-title">
        <h2>Sarah Dole</h2>
        <p>Front End Engineer @ Microsoft</p>
      </div>
      <p class="card-detail-summary">
        I turn coffee into bugs which are fixed by someone else. 
        Certified Stack Overflow and ChatGPT developer.
      </p>
    </div>
    <div class="card-actions">
      <button class="card-actions-button">Contact me</button>
      <div class="card-actions-contacts">
        <a href="#"><img src="/img/Button.svg" alt="github contact icon"/></a>
        <a href="#"><img src="/img/Button-1.svg" alt="linkedin contact icon"/></a>
        <a href="#"><img src="/img/Button-2.svg" alt="instagram contact icon"/></a>
        <a href="#"><img src="/img/Button-3.svg" alt="twitter / x contact icon"/></a>
      </div>
    </div>
  </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root_container");
	root.innerHTML = profile_card();
});
