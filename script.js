const peopleTestimonials = [
  `<img src='./images/avatar-anisha.png' style='height: 8vh;width: 4vw;'><h5 style='margin-top: 1.2em;color:hsl(228, 39%, 23%);'>Anisha Li</h5><p style='font-size: .75em; margin-top: -.6em; line-height: 1.5em;'>"Manage has supercharged our team’s workflow. The <br>ability to maintain visibility on larger milestones at all times<br> keeps everyone motivated."</p>`,

  `<img src='./images/avatar-ali.png' style='height: 8vh;width: 4vw;'><h5 style='margin-top: 1.2em;color:hsl(228, 39%, 23%);'>Ali Bravo</h5><p style='font-size: .75em; margin-top: -.6em; line-height: 1.5em;'>"We have been able to cancel so many other subscriptions <br>since using Manage. There is no more cross-channel <br>confusion and everyone is much more focused."</p>`,

  `<img src='./images/avatar-richard.png' style='height: 8vh;width: 4vw;'><h5 style='margin-top: 1.2em;color: hsl(228, 39%, 23%);'>Richard Watts</h5><p style='font-size: .75em; margin-top: -.6em; line-height: 1.5em;'>"Manage allows us to provide structure and process. It <br>keeps us organized and focused. I can’t stop recommending <br>them to everyone I talk to!"</p>`,

  `<img src='./images/avatar-shanai.png' style='height: 8vh;width: 4vw;'><h5 style='margin-top: 1.2em;color: hsl(228, 39%, 23%);'>Shanai Gough</h5><p style='font-size: .75em; margin-top: -.6em; line-height: 1.5em;'>"Their software allows us to track, manage and collaborate <br>on our projects from anywhere. It keeps the whole team in-<br>sync without being intrusive."</p>`,
];
let card = document.getElementsByClassName("c3-card")[0];
let n = peopleTestimonials.length;
for (let i = 0; i < n; i++) {
  let cardElement = document.createElement("div");
  cardElement.innerHTML = peopleTestimonials[i];
  cardElement.style.cssText += `color: hsl(227, 12%, 61%); display: inline-block;margin-right: 5em;`;
  if (i == n - 1) {
      cardElement.style.cssText += "display: none;";
    //   cardElement.classList.add('special');
  }
  if (i == 0) {
    cardElement.style.cssText += "margin-left: -5em;";
  }
  if (i == n - 2) {
    cardElement.style.cssText += "margin-right: -5em";
  }
    cardElement.classList.add(`card-items-${i}`);
  card.appendChild(cardElement);
}
document.getElementById('next').onclick = () => {
    card.lastElementChild.style.cssText += 'display: inline-block;position: relative;top: -27.5vh;left: 35vw;';
    for (let i = 0; i < n-1; i++){
        document.getElementsByClassName(`card-items-${i}`)[0].style.cssText+='transition: 1s all ease-in-out;position:relative;left: -32vw;'
    }
}
document.getElementById('prev').onclick = () => {
    card.lastElementChild.style.cssText += 'display: none;';
    for (let i = 0; i < n-1; i++){
        document.getElementsByClassName(`card-items-${i}`)[0].style.cssText+='transition: 1s all ease-in-out;position:relative;left:0;'
    }
}