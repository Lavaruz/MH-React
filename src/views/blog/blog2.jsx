import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function Blog2(){
    return  (
        <div className='main-content'>
            <div className="main-left">
                <Sidebar />
            </div>
            
            <div className="vline"></div>

            <div className="main-right">
                <div className="blog-detail">
                    <div className="blog-detail-header">
                        <h1>23/11 Developer Notes - Bug fixes incoming!</h1>
                        <p>The second-ever developer notes talk about all the bugs that have been annoying the players since the release and how they will deal with them</p>
                    </div>
                    <img src="/img/background.jpg" alt="" />
                
                <div className="blog-detail-content">
                    <h2>Bugs, bugs, everywhere</h2>
                    <p>As we all know, the game is riddled with bugs and the developer's notes give us a timeline for upcoming fixes that will fix some of them. The first batch of fixes will be applied this week, but the second one - much larger - will be released somewhere in early December.</p>
                    <h2>November fixes</h2>
                    <p>Here is the list of bugs to be fixed this week:
                        <ul>
                            <li>The issue where the notification reappears even when there are no available rewards in the Day by Day event.</li>
                            <li>Several display issues, such as the characters registered in Synchro Device's level being displayed as “Lv. 1”.</li>
                            <li>The issue where the effect of enhanced Critical Damage of Maiden's Skill 2 is not applied.</li>
                            <li>The issue where Rapture's Core does not take any damage when it is attacked.</li>
                            <li>Many commanders have pointed out that the “Free Gem” in gift packs is not distinct enough, so we have made it clearer by calling this out. A “Free” mark will also be added to the Gem icon in the updated app in early December.</li>
                        </ul>
                    </p>
                    <h2>December fixes</h2>
                    <p>List of fixes coming in December. Highlighted those that will have a huge impact on the tier list and ratings.
                        <ul>
                            <li>The issue where the notification does not disappear even when there are no available rewards in Infrastructure Core,</li>
                            <li>The issue where the notification is not displayed properly in the Simulation Room, Lost Sector, Harmony Cube, Recycling Room, etc,</li>
                            <li>The issue where the Screen Shaking option and Max Frame Rate affect the interaction to the Core, which reduces the final damage dealt.</li>
                            <li>The issue where the game crashes when players enter Harmony Cube under certain circumstances.</li>
                        </ul>
                    </p>
                    <h2>Summary</h2>
                    <p>Overall, it seems that the majority of the bugs will be fixed. They only failed to mention the ammo bug, but the rest bugs are covered:
                        <ul>
                            <li>charge bug,</li>
                            <li>taunt bug,</li>
                            <li>buff stacking bug,</li>
                            <li>damage formula bug (potentially),</li>
                            <li>burst skill leveling bug.</li>
                        </ul>
                        This also means that shields are working as they should, so Centi users should be happy.
                    </p>
                </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}