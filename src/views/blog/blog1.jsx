import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function Blog1(){
return (
<div className='main-content'>
    <div className="main-left">
        <Sidebar />
    </div>

    <div className="vline"></div>

    <div className="main-right">
        <div className="blog-detail">
            <div className="blog-detail-header">
                <h1>Reviews and ratings going forward</h1>
                <p>After Laplace release again created issues, we are making changes in our process of adding new
                    characters to the website.</p>
            </div>
            <img src="/img/wallpaper.jpg" alt="" />
            <div className="blog-detail-content">
                <h2>What Happened?</h2>
                <p>Similar to Helm, Laplace was again changed on the release day which made all our tests obsolete. So
                    instead of providing you all with the test results and findings - we prepared around 15 screenshots
                    and 4 videos for Laplace - we had to adjust the review and rating based on the final kit of Laplace
                    that was revealed yesterday.
                    <br /><br />
                    Knowing this, we put a disclaimer on the top of the Laplace review blog that the review and rating
                    are provisional and it can change after we will be able to test Laplace on the live server, just
                    like everyone else.</p>
                <h2>Laplace</h2>
                <p>We already updated the previous blog post and Laplace review - we also changed her rating from C to
                    B.
                    <br /><br />
                    Overall, after testing her on the live server, we found out that in her niche - boss fights,
                    especially bosses that have their parts close to each other - she's still really good despite the
                    changes and is potentially an S/SS tier character there. Still, in the non-boss stages (especially
                    those that have low enemy density), she's still underwhelming, but to balance it out we will
                    increase her general rating from C to B. Laplace feels more like B+/A- character at this point, but
                    since we don't have a split rating a B will have to suffice for now. Why not A? She is lacking the
                    versatility to be added to the A tier for now.
                    <br /><br />
                    We are still testing her and the rating can be further adjusted based on our - and other players' -
                    findings.</p>
                <h2>Going Forward</h2>
                <p>While we have access to the test server where upcoming characters are made available to us earlier,
                    so we can test them and share our findings, with the way things currently work, we decided to stop
                    using the test server.
                    <br /><br />
                    The developers constantly change the characters on a daily basis, making the test server testing
                    totally pointless. We are wasting a lot of time setting up the testing scenarios, only to have to
                    throw everything into the trashcan the next day when the character gets adjusted. Laplace was
                    changed 5 times in total in the span of 3 days and then changed again on the release day. After each
                    adjustment, we remade all our tests, wasting hours doing it, only to wake up the next day to another
                    change in Laplace kit.
                    <br /><br />
                    We simply can't work like that. We are not only wasting our time but also - more importantly - we
                    can't provide good information to you all.
                    <br /><br />
                    We totally understand that things can change before the release and nothing is final (hence why it's
                    called a test server), but if the developers can't make up their minds and are doing last-minute
                    changes on the day of the release, it's too much for us. The same thing happened with Helm too, so
                    it's not like it was a one-time occurrence and we fear it will again happen for the next character,
                    and then the next.
                    <br /><br />
                    This why in the future, we won't be posting any more reviews based on the test server and will
                    instead do the same thing we do for Counter Side - give our first impressions based on the kit only
                    and add a proper review and rating 72h after the character was released (and that's when the
                    character will be added to the tier list).
                    <br /><br />
                    We also would like to apologize to everyone who we misled with our initial review. It's totally our
                    fault for not taking other variables into account and that's why we are changing the whole process,
                    so it doesn't happen again.</p>
            </div>
        </div>
        <Footer />
    </div>
</div>
)
}