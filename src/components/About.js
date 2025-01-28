import styles from "../styles/pages/Home.module.css";
import Image from "next/image";

import climbingSolo from "../../public/media/images/about/climbing-solo.webp";
import mcgFormal from "../../public/media/images/about/mcg-formal.webp";
import guitar from "../../public/media/images/about/guitar.webp";
import interlaken from "../../public/media/images/about/interlaken.webp";
import paraglidingGroup from "../../public/media/images/about/paragliding-group.webp";
import paraglidingSolo from "../../public/media/images/about/paragliding-solo.webp";
import climbingGroup from "../../public/media/images/about/climbing-group.webp";
import london from "../../public/media/images/about/photography-london.webp";
import bath from "../../public/media/images/about/photography-bath.webp";
import dome from "../../public/media/images/about/dome-hyperlapse.gif";
import cows from "../../public/media/images/about/cows.webp";
import outlook from "../../public/media/images/about/outlook.webp";
import suspension from "../../public/media/images/about/suspension.webp";
import christmas from "../../public/media/images/about/christmas.webp";
import toga from "../../public/media/images/about/toga-dance-group.webp";
import sisters from "../../public/media/images/about/sisters.webp";

import {useState} from "react";
import {InfoModal} from "./Modal";

export default function About() {
    const aboutData = [
        {
            size: styles.main, id: 0, type: "Hobby", name: "Rock Climbing", src: climbingSolo,
            tags: ["Hobbies", "Outdoors", "Sports", "Climbing", "The Red", "Miguel's", "Powerlinez"],
            content: [
                {type: "section", value: "How it Started"},
                {type: "text", value: "Being from North Jersey, there aren't a lot of climbing gyms or outdoors spots near me, so this hobby really started once I got my driver's license on my 17th birthday. Before that, I always kind of knew that I liked climbing, I just never had the chance to do it consistently. I remember my dad would take me to the gym like once or twice a year when I was around 10 years old, and I would love playing around on the walls. Gyms always just seemed like huge playgrounds to me."},
                {type: "section", value: "How it's Going"},
                {type: "text", value: "Even though I don't get to climb as much anymore, climbing is still my favorite thing to do in my free time by far. I love the problem solving involved, the physical intensity, and the people that I meet wherever the sport takes me. Whether it's at my local gym, on real rock at The Powerlinez or the Red River Gorge, I know that I'll always find an amazing community of climbers."},
                {type: "text", value: "One community in particular that I want to give a shout out to is the climbing club of Notre Dame. These guys are the best to hang out with, climb with, and just be around in general. If any of you guys are reading this: Never frills, always blue collar."},
                {type: "image", value: climbingGroup, AR: styles.aboutAR, dim: styles.aboutDim},
                {type: "section", value: "Experience"},
                {type: "text", value: "If anyone out there is actually interested, I mainly boulder around V7-V9 indoors depending on the gym. When I can go outdoors, I mainly stay in the V4-V6 range and redpointed 5.12a on lead. I've been to the Powerlinez reserve in North Jersey a few times and climbed at a decent number of crags in the Red River Gorge (Miguel's Pizza, sponsor me!)."},
                {type: "text", value: "Some of my goals that I've been working towards have been the full front lever for 5 seconds, a full one arm pull up from a dead hang, and a full human flag for 5 seconds."}
            ]
        },
        {
            size: styles.main, id: 1, type: "Free Time", name: "Friends and Family", src: mcgFormal,
            tags: ["Family", "Friends", "Social Life"],
            content: [
                {type: "section", value: "Family"},
                {type: "text", value: "My dad was born in Vietnam and lived there until he was around 12. He escaped as a refugee and came to America and has been living there ever since. My mom moved to America from the Philippines around the time when she was four. They went to NYU Dental school together, got married and moved to New Jersey, where they've been ever since. My older sister, my younger sister, and I were all born in Jersey and have pretty much been living in the same house since birth. Even though we get on each other's nerves sometimes, I love my family to death and have been lucky to grow up with them. I wholeheartedly believe I would not be who I am today without their love and guidance."},
                {type: "image", value: sisters, AR: styles.profileAR, dim: styles.aboutDim},
                {type: "section", value: "Friends"},
                {type: "subsection", value: "Home"},
                {type: "text", value: "I love my friends to death, especially my friends back at home. The group of 6 guys from home have been through thick and thin with me and I'm proud to call them my brothers. They're some of the closest friends I have in my life, if not the closest. I don't tell them how much I appreciate them enough, and with all of us being away at college now in days, I don't see them in person enough to show them."},
                {type: "subsection", value: "College"},
                {type: "text", value: "So far in college, I've met so many people that sometimes I forget who I've met and who I haven't. Gets real awkward. Anyway, aside from the people I forgot, I've been blessed to meet a handful of people that I will never forget (corny)."},
                {type: "image", value: toga, AR: styles.aboutAR, dim: styles.aboutDim},
                {type: "text", value: "Across all my close friends, I've made some amazing memories. Anything from skydiving in the Smoky Mountains, kayaking in Switzerland, toga dances in the hallway, or even just Christmas parties in our dorms together. These people are some of my favorite in the world, and I'm really blessed to have found them."},
                {type: "image", value: christmas, AR: styles.aboutAR, dim: styles.aboutDim},
                {type: "smalltext", value: "Em, Damien, Chase, TJ, Chuck, Ready, Dom, Tmerc, Peter A, Ryan, Conor, Peter R, Mikey, Griff, David, Keaton, Rory, Ian, Emilio, Cat, Andrea, Andrew, Anna, Tommy, Kopp: If you're reading this, I'm wishing you all the best!"}
            ]
        },
        {
            size: styles.side, id: 2, type: "Hobby", name: "Guitar", src: guitar,
            tags: ["Hobby", "Art", "Music", "Guitar", "Ed Sheeran", "John Mayer"],
            content: [
                {type: "section", value: "How it Started"},
                {type: "text", value: "So, I used to always play ukulele. I knew all the classics, Somewhere Over the Rainbow, What a Wonderful World, yadda yadda. One day my sister gets mad that I'm using her ukulele all the time and says \"Why don't you learn a real man's instrument??\" That hurt my feelings. So, I picked up guitar. Ever since then I've been playing - true story."},
                {type: "text", value: "I started with some classic Ed Sheeran, learned most of his songs, then went into learning some more difficult John Mayer finger-style percussive patterns. Now in days, I like more of a Noah Kahan or Lumineers sort of vibe."},
                {type: "section", value: "How it's Going"},
                {type: "text", value: "Now, even though I still love playing, I usually don't find enough time in the day to sit down and practice. That extra free time only really comes late at night or during breaks from school. When I do get a chance to play, I love going back and playing some of the earlier songs I learned. I even try my hand at my own music every now and then (album dropping soon)."}
            ]
        },
        {
            size: styles.side, id: 3, type: "Art", name: "Photography", src: interlaken,
            tags: ["Art", "Hobby", "Canon EOS70D", "Landscape Photography"],
            content: [
                {type: "section", value: "How it Started"},
                {type: "text", value: "My work with photography really only started during my senior year of high school, just before the COVID pandemic hit the US. I was one of the class photographers and really took pride in my work along the way. Not only did I love taking pictures for my friends and brainstorming creative senior portraits, but I also was able to use photography as a means to get to know some of my classmates who I otherwise didn't really talk to. While I don't consider myself an amazing photographer, I ended up really enjoying photography, decided to learn more about it, and took it with me to college. Now I really just take pictures of landscapes and for my friends whenever I go on a trip. While I was in Europe studying abroad this past summer, I really got to dive head first into improving my photography skills."},
                {type: "section", value: "My Work"},
                {type: "subsection", value: "Landscape"},
                {type: "text", value: "I don't have a portfolio or anything, because photography is more of a hobby than anything else, but here are two of my favorite pictures that I took while I was in the UK this summer. This first one is just a picture of a street in London from the perspective of one of those Big Red Buses. It was taken right before the Queen's Platinum Jubilee (70th anniversary of her coronation)."},
                {type: "image", value: london, AR: styles.midAR, dim: styles.projectDim, href: "/media/images/about/photography-bath.jpg"},
                {type: "text", value: "This next picture was from one of our day trips to Bath. The city was absolutely beautiful and I recommend that anyone in the England should go and check it out. This picture was taken along the river, across one of the city's most famous buildings."},
                {type: "image", value: bath, AR: styles.midAR, dim: styles.projectDim},
                {type: "subsection", value: "Hyperlapses"},
                {type: "text", value: "In addition to landscape photography, I recently started experimenting with hyperlapses at school. I think the idea of a hyperlapse is really cool, but the execution was a lot harder than I initially thought. Here was my first attempt at a freehand hyperlapse. Even after some editing, the result is pretty shaky, but I was really happy with the result, and I didn't think it was bad for my first attempt."},
                {type: "image", value: dome, AR: styles.profileAR, dim: styles.aboutDim},
            ]
        },
        {
            size: styles.side, id: 4, type: "Other", name: "Life Updates", src: paraglidingGroup,
            tags: ["Me!", "Travel", "General", "London", "Switzerland", "Dublin"],
            content: [
                {type: "section", value: "Summer Abroad"},
                {type: "subsection", value: "London"},
                {type: "text", value: "I guess the most major chapter of my life recently was my 6 week study abroad program in London through Notre Dame's Global Gateway program. London was absolutely amazing, quite literally an experience I will never forget. I went with a few friends and left knowing the entire program (You guys are the best!). My close friends from the program and I traveled all over England including Bath, Salisbury, Stonehenge, The Seven Sisters, Whitsable, The New Forest, and more. Please enjoy this picture of me with a herd of cows in a field in Cambridge."},
                {type: "image", value: cows, AR: styles.midAR, dim: styles.projectDim},
                {type: "subsection", value: "Switzerland"},
                {type: "text", value: "My friends and I even took a four day trip to Switzerland! This trip was probably one of the coolest trips of my life. We drove around basically all of Switzerland. We flew into Geneva, spent a night in France right next to the Swiss-French border, drove to Interlaken and rented a cabin for two nights there, drove to Zermatt to see the MATTERHORN!! There were so many amazing hikes throughout the trip as well as great memories with friends. One of the highlights was when all nine of us paraglided off the side of a mountain in Interlaken (I took the picture above right after I landed - four of my friends were still in the air). To this day, that paragliding ride was one of the most incredible yet serene experiences of my life."},
                {type: "image", value: paraglidingSolo, AR: styles.midAR, dim: styles.projectDim},
                {type: "text", value: "We also took a 3 hour hike up to one of the most beautiful outlooks I've ever seen."},
                {type: "image", value: outlook, AR: styles.midAR, dim: styles.projectDim},
                {type: "text", value: "Another hike was 2 hour one up to the longest suspension bridge in the Alps (it used to be the longest in Europe a few years ago)."},
                {type: "image", value: suspension, AR: styles.midAR, dim: styles.projectDim},
                // {type: "section", value: "Innovate-o-Thon"},
                // {type: "text", value: "One achievement I was more proud of this semester was getting winning a prize at Notre Dame's annual Innovate-o-Thon. It's an innovation challenge where student compete in teams to see who can come up with the best solution to a real world problem. This year, Marmon Holdings, Inc. challenged the teams to come up with a lightweight and cost effective alternative to outrigger pads. My team came up with an alluminum alloy modular design that won us 2nd place and $1,250 in prizes. It was a lot of fun staying up with my friends until 6am then presenting our design at 8am :) - but really, it was a great experience. It was my first time entering a competition like this and my winning any sort of prize from a competition, so the entire event was really exciting (Thanks Paul!)"},
                // {type: "element", value: <a href={"https://engineering.nd.edu/news/51-students-10-teams-16-hours-2022-fall-nd-engineering-innovate-o-thon/"} className={`blue-text underline mb-3 fw-2`} key={123012}>Link to Article</a>},
                // {type: "image", value: innovate, AR: styles.aboutAR, dim: styles.aboutDim},
                {type: "section", value: "What's Next"},
                {type: "text", value: "With the fall semester just wrapping up at the time of this writing, I'll be going to Dublin soon to take part in my spring semester abroad. Until then, Christmas, New Years, a few projects here and there, and then I'm off. Can't wait to say the least."}
            ]
        },
    ];
    const [show, setShow] = useState(false);
    const [data, setData] = useState(aboutData[0]);
    const [id, setId] = useState(0);

    function handleShow(num) {
        setShow(true);
        setData(aboutData[num]);
        setId(num)
    }

    function close() {
        setShow(false);
    }

    function shift(val) {
        let index = (id + val) % aboutData.length;
        if (index < 0) index = aboutData.length + index;
        setData(aboutData[index]);
        setId(index);
    }

    function AboutItem(props) {
        function showOverlay(num) {document.getElementById(`about-${num}`).style.opacity = "100%";}
        function closeOverlay(num) {document.getElementById(`about-${num}`).style.opacity = "0";}

        return (
            <div className={`${styles.displayItem} ${styles.aboutAR} ${props.size} d-flex-row-c clickable no-select`}
                 onClick={() => handleShow(props.id)} onMouseOver={() => showOverlay(props.id)} onMouseOut={() => closeOverlay(props.id)}>
                <div className={`${styles.aboutContainer}`}>
                    <div className={`${styles.imgParent} ${styles.aboutAR}`}>
                        <Image src={props.src} className={`${styles.img}`} placeholder={`blur`} style={{objectFit: "cover"}} alt={''} fill sizes={"35vw"}/>
                    </div>
                </div>
                <div id={`about-${props.id}`} className={`${styles.imgOverlay} ${styles.aboutMobile}`}>
                    <div className={`${styles.overlayText} pl-2`}>
                        <p className={`fw-2`}>{props.type}</p>
                        <p className={`fw-6 fs-md`}>{props.name}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={`about`} className={`${styles.about} gap-2`}>
            <h2 className={`fw-6 fs-md`}>about.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                Aside from academics, I love doing some things in particular: rock <span className={`fw-5`}>climbing</span>,
                playing <span className={`fw-5`}>guitar</span>, <span className={`fw-5`}>photography</span>,
                and being with close <span className={`fw-5`}>friends and family</span>. My writing is a little drawn out, but feel free to
                learn more about me below.
            </p>
            <div className={`${styles.aboutDisplay} gap-3 my-3`}>
                {aboutData.map(data => <AboutItem {...data} key={data.id}/>)}
            </div>
            <InfoModal show={show} close={close} type={"about"} data={data} shift={shift}/>
        </div>
    )
}