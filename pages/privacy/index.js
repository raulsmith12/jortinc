import Head from "next/head";
import Script from "next/script";

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Junk or Treasures</title>
                <meta name="title" content="Privacy Policy - Junk or Treasures" />
                <meta name="description" content="Junk or Treasures is auctioning leveled up. Your junk could very well be somebody else's treasure. You could also find your next valuable item here." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jortinc.com/privacy" />
                <meta property="og:title" content="Privacy Policy - Junk or Treasures" />
                <meta property="og:description" content="Junk or Treasures is auctioning leveled up. Your junk could very well be somebody else's treasure. You could also find your next valuable item here." />
                <meta property="og:image" content="https://jortinc.com/img/jort-logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://jortinc.com/privacy" />
                <meta property="twitter:title" content="Privacy Policy - Junk or Treasures" />
                <meta property="twitter:description" content="Junk or Treasures is auctioning leveled up. Your junk could very well be somebody else's treasure. You could also find your next valuable item here." />
                <meta property="twitter:image" content="https://jortinc.com/img/jort-logo.png" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-HFH3XL7FNY"/>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HFH3XL7FNY', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-2">Your Privacy is Important to Us</h2>
                        <p>This privacy notice discloses the privacy practices for Junk or Treasures, Johlar Inc., our partner websites and any businesses we are associated with. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                            <li className="list-group-item">What choices are available to you regarding the use of your data.</li>
                            <li className="list-group-item">The security procedures in place to protect the misuse of your information.</li>
                            <li className="list-group-item">How you can correct any inaccuracies in the information.</li>
                        </ul>
                        <h4 className="my-3">Information Collection, Use, and Sharing</h4>
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
                        <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                        <h4 className="my-3">Your Access to and Control Over Information</h4>
                        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">See what data we have about you, if any.</li>
                            <li className="list-group-item">Change/correct any data we have about you.</li>
                            <li className="list-group-item">Have us delete any data we have about you.</li>
                            <li className="list-group-item">Express any concern you have about our use of your data.</li>
                        </ul>
                        <h4 className="my-3">Security</h4>
                        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                        <p>If you feel that we are not abiding by this privacy policy, you should <a href="mailto:contact@jortinc.com">contact us</a> immediately.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;