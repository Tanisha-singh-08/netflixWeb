import React from 'react';
import './index.css';
import Card from './Cards';
import Footer from './Footer';
import img1 from "./r1.jpg";
import img2 from "./r2.jpg";
import img3 from  "./r3.jpg"
import img4 from "./r4.jpg";
import img5 from "./r5.jpg";

function App() {
    return (
        <>
            <h1><b>Top 5 Netflix Series</b></h1>
            <div class="row">
                <div class="col-md-4">
                    <Card name="Wednesday" imgsrc={img1} content="Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents." link="https://www.netflix.com/title/81231974"
                    />
                </div>

                <div class="col-md-4">
                    <Card name="Friends" imgsrc={img3} content="Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama" link="https://www.netflix.com/watch/70273997?trackId=15035895"/>
                </div>

                <div class="col-md-4">
                    <Card name="Squid Game" imgsrc={img2} content="Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake." link="https://www.netflix.com/watch/81262746?trackId=14186258"/>
                </div>

                <div class="col-md-4">
                    <Card name="Emily In Paris" imgsrc={img4} content="Emily, an ambitious twenty-something marketing executive from Chicago, unexpectedly lands her dream job in Paris when her company acquires a French luxury marketing company - and she is tasked with revamping their social media strategy" link="https://www.netflix.com/watch/81382334?trackId=14885709"/>
                </div>

                <div class="col-md-4">
                    <Card name="The Vampire Diaries" imgsrc={img5} 
                    content="The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers. After centuries of quarreling, Stefan and Damon Salvatore return to their original town of Mystic Fall, Virginia." link="https://www.netflix.com/watch/70212837?trackId=255824129"/>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default App;