import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

function About(){
return(
<div className='main-content'>
    <div className="main-left">
        <Sidebar />
    </div>

    <div className="vline"></div>

    <div className="main-right">
        <div className="about-header">
            <img src="/img/logomhw.png" alt="" />
            <h1>About The Game</h1>
            <hr />
        </div>

        <div className="about-mhw">
            <h2>Monster Hunter: World</h2>
            <hr />
            <p>Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breat<br />hing
                ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone
                or in co-op with up to three other players, and use materials collected from fallen foes to craft new
                gear and take on even bigger, badder beasts!</p>
            <h3>Introduction</h3>
            <p><b>Overview</b><br />
                <b>Battle gigantic monsters in epic locales.</b>
                <br />
                As a hunter, you'll take on quests to hunt monsters in a variety of habitats.
                Take down these monsters and receive materials that you can use to create stronger weapons and armor in
                order to hunt even more dangerous monsters.
                <br /><br />
                In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting
                experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and
                excitement.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_introduction.jpg?t=1661838392" alt="" />
            <p><b>Setting</b> <br />
                Once every decade, elder dragons trek across the sea to travel to the land known as the New World in a
                migration referred to as the Elder Crossing.
                <br /><br />
                To get to the bottom of this mysterious phenomenon, the Guild has formed the Research Commission,
                dispatching them in large fleets to the New World.
                <br /><br />
                As the Commission sends its Fifth Fleet in pursuit of the colossal elder dragon, Zorah Magdaros, one
                hunter is about to embark on a journey grander than anything they could have ever imagined.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_story.jpg?t=1661838392" alt="" />
            <h3>ECOSYSTEM</h3>
            <p><b>A World That Breat hes Life</b><br />
                There are various locations teeming with wildlife. Expeditions into these locales are bound to turn up
                interesting discoveries.</p>
            <h3>HUNTING</h3>
            <p><b>A Diverse Arsenal, and an Indispensable Partner</b><br />
                Your equipment will give you the power to need to carve out a place for yourself in the New World.</p>
            <p><b>The Hunter's Arsenal</b><br />
                There are fourteen different weapons at the hunter's disposal, each with its own unique characteristics
                and attacks. Many hunters acquire proficiency in multiple types, while others prefer to attain mastery
                of one.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_hunters.jpg?t=1661838392" alt="" />
            <p><b>Scoutflies</b><br />
                Monster tracks, such as footprints and gashes, dot each locale. Your Scoutflies will remember the scent
                of a monster and guide you to other nearby tracks. And as you gather more tracks, the Scoutflies will
                give you even more information.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_shirubemushi_s.jpg?t=1661838392"
                alt="" />
            <p><b>Slinger</b><br />
                The Slinger is an indispensable tool for a hunter, allowing you to arm yourself with stones and nuts
                that can be gathered from each locale.
                From diversion tactics to creating shortcuts, the Slinger has a variety of uses, and allows you to hunt
                in new and interesting ways.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_slinger_s.jpg?t=1661838392"
                alt="" />
            <p><b>Specialized Tools</b><br />
                Specialized tools activate powerful effects for a limited amount of time, and up to two can be equipped
                at a time. Simple to use, they can be selected and activated just like any other item you take out on a
                hunt.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_specialTool_s.jpg?t=1661838392"
                alt="" />
            <p><b>Palicoes</b><br />
                Palicoes are hunters' reliable comrades out in the field, specialized in a variety of offensive,
                defensive, and restorative support abilities.
                The hunter's Palico joins the Fifth Fleet with pride, as much a bona fide member of the Commission as
                any other hunter.</p>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_otomo.jpg?t=1661838392" alt="" />
        </div>

        <div className="about-social">
            <h2>Official Links</h2>
            <hr />
            <div className="about-social-link">
                <div className="about-social-link-item">
                    <p><i className="uil uil-window"></i>Website</p>
                    <a href="http://www.monsterhunterworld.com/us/"><i className="uil uil-link-h"></i>Open in new window</a>
                </div>
                <div className="about-social-link-item">
                    <p><i className="uil uil-facebook"></i>Facebook</p>
                    <a href="https://www.facebook.com/MonsterHunterWorldGame/"><i className="uil uil-link-h"></i>Open in new window</a>
                </div>
                <div className="about-social-link-item">
                    <p><i className="uil uil-twitter"></i>Twitter</p>
                    <a href="https://twitter.com/monsterhunter"><i className="uil uil-link-h"></i>Open in new window</a>
                </div>
                <div className="about-social-link-item">
                    <p><i className="uil uil-instagram-alt"></i>Instagram</p>
                    <a href="https://www.instagram.com/monsterhunterworld/"><i className="uil uil-link-h"></i>Open in new window</a>
                </div>
            </div>
        </div>

        <div className="about-system">
            <h2>System Requirement</h2>
            <hr />
            <div className="about-system-rec">
                <div className="system-minimum">
                    <p><b>Minimum</b></p>
                    <p>Requires a 64-bit processor and operating system</p>
                    <p><span> OS:</span> WINDOWS® 7, 8, 8.1, 10 (64-bit required)</p>
                    <p><span> Processor:</span> Intel® Core™ i5 4460 or Core™ i3 9100F or AMD FX™-6300 or Ryzen™ 3 3200G
                    </p>
                    <p><span> Memory:</span> 8 GB RAM</p>
                    <p><span> Graphics:</span> NVIDIA®GeForce®GTX 760 or GTX1050 or AMD Radeon™ R7 260x or RX 560</p>
                    <p><span> DirectX:</span> Version 11</p>
                    <p><span> Network:</span> Broad<br />band Internet connection</p>
                    <p> <span> Storage:</span> 52 GB available space</p>
                    <p> <span> Sound Card:</span> DirectSound (DirectX® 9.0c or later)</p>
                    <p> <span> Additional Notes:</span> - These specs allow for the game to be played in 1080p/30fps
                        with graphics settings at "Low". - 64-bit processor and operating system are required.</p>
                </div>
                <div className="system-recommended">
                <p><b>Recommended</b></p>
                    <p>Requires a 64-bit processor and operating system</p>
                    <p><span> OS:</span> WINDOWS® 7, 8, 8.1, 10 (64-bit required)</p>
                    <p><span> Processor:</span>  Intel® Core™ i7 3770 or Core™ i3 8350 or Core™ i3 9350F / AMD Ryzen™ 5 1500X or Ryzen™ 5 3400G
                    </p>
                    <p><span> Memory:</span> 8 GB RAM</p>
                    <p><span> Graphics:</span> NVIDIA® GeForce® GTX 1060 (VRAM 3GB) or GTX 1650 / AMD Radeon™ RX 480 or RX 570</p>
                    <p><span> DirectX:</span> Version 11</p>
                    <p><span> Network:</span> Broad<br />band Internet connection</p>
                    <p> <span> Storage:</span> 52 GB available space</p>
                    <p> <span> Sound Card:</span> DirectSound (DirectX® 9.0c or later)</p>
                    <p> <span> Additional Notes:</span> - These specs allow for the game to be played in 1080p/30fps with graphics settings at "High". - 64-bit processor and operating system are required. - Windows 10 (Version 1809 or later) and a 4GB VRAM GPU (graphics board or video card) are required for DirectX 12 API.</p>
                </div>
        
            </div>
        </div>
        <Footer />
    </div>
</div>
)

}

export default About