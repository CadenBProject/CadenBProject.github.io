import runningGif from './assets/running.gif';
import DEADGif from './assets/DEAD.gif';
import Librarygif from './assets/Library.gif';
import Cafegif from './assets/Cafe.gif';
import Wingif from './assets/Wingif.gif';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [node, setNode] = useState("intro");

  if (node === "intro") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>You have just been sentenced to 35 years in prison for Robbery… In the transport van from the court you start thinking of how dreadful prison life is, you start thinking of all the movies and shows you have seen that have taken place in a prison setting and hope that it's not as terrible in real life.</h2>
          <p>
            Click continue to begin ...
          </p>
          <button onClick={() => {setNode("start")}}>
            continue
          </button>
        </div>
        </header>
      </div>
    )
  }

  if (node === "start") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After your transport you were placed into your cell, as you sit to take your surroundings in you notice a prison fight break out in the cafeteria, terrified you think to yourself ‘I gotta get outta here’. 
          </p>
          <button onClick={() => {setNode("StartEsc")}}>
          start your escape plan
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "StartEsc") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After taking a night to rest up and think about possible escapes, you decide to take a day to scope out the prison to see any possible escape routes, while walking you notice a vent behind one of the bookshelves in the library, and an air vent in the cafeteria.
          </p>
          <button onClick={() => {setNode("Library")}}>
            Library
          </button>
          <button onClick={() => {setNode("Cafeteriastart")}}>
            Cafeteria
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After deciding that the library is your best shot at escaping, you start to spend all your time in there, creating a map of the bookshelves, the routes of security guards and their routine, as well as inmates that use the library regularly. You almost always stay in the library until all inmates are called for lights out.
          </p>
          <button onClick={() => {setNode("Sleep_Library")}}>
          Go to sleep
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Sleep_Library") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2>zZzzzzZzz</h2>
          <p>
            
          </p>
          <button onClick={() => {setNode("Library_Map")}}>
          Wake up
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library_Map") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          With your map all drawn out and memorized, you decide it's time to make a move, but you need a way to make your move. You figured the books covered most of the vent, but you think you should be able to put the vent back just in case. Should you take the time to put the vent back?
          </p>
          <button onClick={() => {setNode("Library_VentBack")}}>
          Yeah put the vent back
          </button>
          <button onClick={() => {setNode("Library_LeaveVent")}}>
          Leave the vent
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library_LeaveVent") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You decide to leave the vent open and hope the books cover the open vent. After your decision, you step out to try and get a glimpse of where the vent leads; you clear the books out for a good view, you see the light just around a bend in the vents, and in the celebration, you rush back to your cell to create more plans and take a nap… you wake up to guards yelling at you, another inmate saw you with the vent and squealed, the warden and guard quickly realized what you were planning to do.
          </p>
          <button onClick={() => {setNode("Library_WoodCaught")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
    if (node === "Library_WoodCaught") {
      return (
        <div className="App">
          <header className="App-header">
          <img src={DEADGif} alt="logo" />
          <div className="StoryText">
            <h2>You Lost.</h2>
            <p>
            Being caught by the guards and warden landed you in solitary and with extra cell inspections……….. After solitary, you come back to your cell and find that all your contraband is gone, and your whole plan is ruined.
            </p>
            <button onClick={() => {setNode("intro")}}>
            Would you like to restart?
            </button>
          </div>
          </header>
        </div>
      )
  }
  if (node === "Library_VentBack") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You decided rather to be safe than sorry and put the vent back between your escape attempt. Although this may take longer, you would rather actually escape. You check the vent out and see that you need a wrench to get it open. After some thought, you come up with several ideas of how to make a wrench but think that a wooden wrench or metal wrench are the two best options. 
          </p>
          <button onClick={() => {setNode("WoodWrench")}}>
          Make a wood wrench
          </button>
          <button onClick={() => {setNode("MetalWrench")}}>
          Make a Metal wrench
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WoodWrench") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          To make up for the slow process of putting the vent back up, you think that a wooden wrench would be a great way to speed things up. You find a piece of wood out in the courtyard under a broken bench. You decide to take the wood back to your cell to make the wrench somewhat unseen.
          </p>
          <button onClick={() => {setNode("WrenchCraft")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WrenchCraft") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          In your cell, you begin chipping away a small notch in one end of the wood. After some time, you think that the wrench is ready to go test to see if the wrench fits. 
          </p>
          <button onClick={() => {setNode("WoodNow")}}>
          Test Now
          </button>
          <button onClick={() => {setNode("WoodNow")}}>
          Test Later
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WoodNow") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You head out and go test the wrench. You make your way to the back vent, taking your time to be as silent as possible before taking out the wrench. After the books inside the vents were cleared, you took out the wrench and placed it up to the bolts. To your surprise, the wrench fits the bolts perfectly. You decided to test your luck and try to loosen one of the bolts. After one crank, the wrench snaps, making a loud crack sound alerting the guards passing by.
          </p>
          <button onClick={() => {setNode("Library_WoodCaught")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "MetalWrench") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After deciding to use a metal wrench, you realize that making one is impossible in these conditions, so you talk to your cellmate who owns a contraband shop. He said he could get you one for free. After all, he did owe you a favor after you hid his contraband for him. Your cellmate says he can get you the wrench in a day. All you have to do is wait and plan…
          </p>
          <button onClick={() => {setNode("MetalWrench2")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "MetalWrench2") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          Your cellmate clangs on your bed to wake you up. When you get up, he hands you the wrench in a small cloth and says good luck. All you need to do now is make your escape, you thought. Eager to get out into the world, you decide to make your move the same night.
          </p>
          <button onClick={() => {setNode("Escape")}}>
          Make Escape...
          </button>
          <button onClick={() => {setNode("Chicken")}}>
          Chicken Out
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Escape") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          Realizing how amazing it would be free again, you quickly start loosening the bolts on the vent. With a small thud, the vent was off its hinges, and you climbed in. You crawl through the only way possible, and it leads you to the roof. You Loosen the bolts to the vent that is keeping you from the outside world.
          </p>
          <button onClick={() => {setNode("Outside")}}>
          Make Escape...
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Outside") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          As you jump down from the vent onto the prison roof, you look out at the horizon. It reminds you how amazing the free world was. You feel a rush of excitement as you walk up to the edge of the prison roof. You look for ways to get down. As you look around you, see a rusty ladder and a rope beside the vent you climbed out of.
          </p>
          <button onClick={() => {setNode("Ladder")}}>
          Ladder
          </button>
          <button onClick={() => {setNode("Rope")}}>
          Rope
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Ladder") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You quietly start extending the ladder down to the ground below. You hear a small screech coming from the ladder and realize it was jammed. The bottom of the ladder was hanging 7 feet above the ground. Since you are impatient, you start to climb down the rusty ladder; you hear creaks and cracks as you get lower and lower on the ladder, then suddenly you hear a loud snap, the top of the ladder has broken off its hinges.
          </p>
          <button onClick={() => {setNode("BrokeLadder")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "BrokeLadder") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>You Lost.</h2>
          <p>
          The next thing you heard after the loud snap was chattering surrounding you. As you get up to try and look around, you feel restraints holding you down. You were back inside the prison. You opened your eyes to see the warden and other guards surrounding you as you lay in the infirmary bed. The warden told you they heard the crash and found you unconscious on the floor. The next words the warden said killed all hope left in you. "You are being transferred to a maximum-security prison."
          </p>
          <button onClick={() => {setNode("intro")}}>
          Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Chicken") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>You're a chicken.</h2>
          <p>
          After standing still in front of the vent for a couple of minutes, thinking, you decide that serving your time is the safest option. Rather than getting caught and having an extended sentence, you sneak back to your cell and think about the 25 years you have to think about your actions.
          </p>
          <button onClick={() => {setNode("intro")}}>
          Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Rope") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Wingif} alt="logo" />
        <div className="StoryText">
          <h2>You Won.</h2>
          <p>
          You walk over to the rope and check to see how strong it is. After some examination, you decide that it may be risky, but it's your best bet on escaping. You tie one end of the rope to a thick metal pipe and tie the other half around your waist. You begin to repel down the side of the prison. As you try to take another step down the wall, you slip and fall. As you wait for the pain of your body slamming into the concrete, you instead feel a big jerk, the rope stopping you from falling. You look down to realize you were only a couple of feet from the ground and decide to untie yourself, drop down, and run. You ran to the nearest store and stole some clothes, and disappeared. 
          </p>
          <button onClick={() => {setNode("intro")}}>
          Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Cafeteriastart") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You decide that the cafeteria vent would be the smartest option because you have been assigned food service. This could give you the opportunity to scope out your escape route.
          </p>
          <button onClick={() => {setNode("CafStart2")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "CafStart2") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After your first day of work, you were told to clean up. As all the inmates left, you hastily cleaned up all the leftover food, trays, and utensils, giving you enough time to look up at the rusted vent and see the light at the end of the vent. After some thought, you decide that you either could break the rows in the vent because of how rusty it is or unscrew the bolts so you can put the vent back up whenever you want.
          </p>
          <button onClick={() => {setNode("BreakRust")}}>
          Break rows
          </button>
          <button onClick={() => {setNode("Unscrew")}}>
          Unscrew bolts
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "BreakRust") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You want to get out of the prison as fast as possible, so you decide that you would make one high-risk, high reward play for your freedom, and you feel that breaking the vent was the best option. Since your plan only requires brute force, you decide to make a play for your escape next week. You worry you're not strong enough and wonder if you should work out a little before the escape attempt.
          </p>
          <button onClick={() => {setNode("Workout")}}>
          Workout
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Workout") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          Throughout the week, you head to the gym as much as you can, trying to beat your weight lift record each day. With your body aching on the night before you make a move, you decide to take a day off from the gym and stretch instead.
          </p>
          <button onClick={() => {setNode("WorkoutNext")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WorkoutNext") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          As you walk into your last day of work, and prison for that matter, you are extremely excited and happy, so happy to the point where you don't notice how sore your body was from going to the gym so much…. Once you were told to clean up after lunch was served, you patiently waited for the guards to get out of earshot.
          </p>
          <button onClick={() => {setNode("BruteEscape")}}>
            Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "BruteEscape") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          Once the guards are out of earshot, you start hammering away at the vents. After some time, enough of the metal rods were battered away to the point of u being able to climb in. you hear some chattering coming from the outside, so you jumped into the vent. Crawling as fast as you could to the light at the end of the vent, you see another rusty vent at the end of the tunnel. With your hands hurting from punching the other vent, you wonder if you should kick the vent instead.
          </p>
          <button onClick={() => {setNode("BruteEscapeKick")}}>
            Kick
          </button>
          <button onClick={() => {setNode("BruteEscapePunch")}}>
            Punch
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "BruteEscapeKick") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Wingif} alt="logo" />
        <div className="StoryText">
          <h2>You Won.</h2>
          <p>
          You quickly decide to kick down the vent. After three kicks, the vent flew off its hinges. And you were greeted with a measly 5-foot drop to the open world. You jumped down and run, as far and as fast as you could without looking back to see if anyone was chasing you. You made it to a nearby town, got cleaned up, and disappeared.
          </p>
          <button onClick={() => {setNode("intro")}}>
            Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "BruteEscapePunch") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>You Lost.</h2>
          <p>
          As you freaked out about hearing the guards screaming at you and calling for backup, you start punching the vent as hard and as fast as you can. While punching, you felt a burning sensation in both hands. When you look down, you see your hands bloodied and sliced from the rows at the vent. After trying to hide from the guards and trying to deal with the pain from punching, it was only a matter of time before the guards got to you, where you landed in solitary for your stunt.
          </p>
          <button onClick={() => {setNode("intro")}}>
            Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Unscrew") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After some thought, you decide to screw and unscrew the bolts. You think that taking more precautions would help you escape. Your cellmate has a contraband shop, and he owes you one. You call in your favor and ask him for a wrench. He tells you he'll have it for you in a day, 'i have a shipment coming in tomorrow anyways,' he said.
          </p>
          <button onClick={() => {setNode("GetWrench")}}>
            Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "GetWrench") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Cafegif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          As promised, the wrench was given to you a day later, and you were ready to make your escape. All inmates were called for roll call, and you decided to leave the wrench in your cell for safekeeping. During roll call, the warden comes out and announces the high amount of contraband in prison, and random searches were going to happen at the start of each day. The warden looks dead in your eyes and says, 'let's start with you' as two guards are told to go and spot check your cell, you begin getting anxious. The guards come back with a burlap sack and begin whispering to the warden.
          </p>
          <button onClick={() => {setNode("Burlap")}}>
            Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Burlap") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>You Lost.</h2>
          <p>
          The warden calls you over and whispers, 'Why do you have this wrench.' You stand there still as if you are thinking of a good reason to have the wrench. The warden then tells you that he's confiscating it, and you have to spend time in solitary. The warden then screamed that anyone who is caught with contraband lands in solitary, and now cell inspections are routine in the morning. 'The whole cell block is gonna be out to get me. Good thing ill be safe in solitary,' you thought. The rest of your prison life will be lived in fear of the other inmates in your cell block.
          </p>
          <button onClick={() => {setNode("intro")}}>
            Would you like to restart?
          </button>
        </div>
        </header>
      </div>
    )
  }
}

export default App;
