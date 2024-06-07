import React from 'react'

const About = () => {
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "About Page - TESTSING DOMIN AND",
        "description": "About us  games for all ages!",
        "image": "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp",
        "author": {
          "@type": "Person",
          "name": "DK ",
          "url": "https://nextjs-seven-rosy-32.vercel.app/about"
        }
      }
    return (
        <div>

           
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About Page - TESTSING DOMIN AND </title>
                <meta name="description" content="About us  games for all ages!" data-react-helmet="true" />
                <meta name="title" content="About Page - TESTSING DOMIN AND" data-react-helmet="true" />
                <meta name="keywords" content={` FSSS, OnlineZones, Game, Demo, 12,`} data-react-helmet="true" />
                <meta property="og:title" content="About Page - TESTSING DOMIN AND" data-react-helmet="true" />
                <meta property="og:description" content="About us  games for all ages!" data-react-helmet="true" />
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:site_name" content="About Page - TESTSING DOMIN AND" data-react-helmet="true" />
                <meta property="og:url" content="article" data-react-helmet="true" />
                <meta property="og:image" content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp" data-react-helmet="true" />
                <meta name="twitter:card" content="summary" data-react-helmet="true" />
                <meta name="twitter:title" content="About Page - TESTSING DOMIN AND" data-react-helmet="true" />
                <meta
                    name="twitter:image"
                    content="https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp"
                    data-react-helmet="true"
                />
                <meta
                    name="twitter:description"
                    content="About us  games for all ages!"
                    data-react-helmet="true"
                />
                <meta name="twitter:site" content="https://nextjs-seven-rosy-32.vercel.app/about" data-react-helmet="true" />
                <link rel="canonical" href={`https://nextjs-seven-rosy-32.vercel.app/about`} data-react-helmet="true" />
                <meta name="google-site-verification" content="Fsk2xaeXXp_K1UQNwk1RObnbvrq9HOxCpcm2uSzbx5U" data-react-helmet="true" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
        
            <div>
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
                {/* <h2 style={{ textAlign: 'center' }}>Our Team</h2> */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="">
                        <div className="card h-[700px]">
                            <img src="https://plus.unsplash.com/premium_vector-1716910450007-87b151f3b6dc?bg=FFFFFF&q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jane" style={{ width: '500px' }} />
                            <div className="container">
                                <h2>Jane Doe</h2>
                                <p className="title">CEO &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <button className="button">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card h-[700px]">
                            <img src="https://plus.unsplash.com/premium_vector-1712750956996-dc7c5b9d6fd0?bg=FFFFFF&q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mike" style={{ width: '500px' }} />
                            <div className="container">
                                <h2>Mike Ross</h2>
                                <p className="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <button className="button">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card h-[700px]">
                            <img src="https://plus.unsplash.com/premium_vector-1682300723506-a8b852aeb1a1?bg=FFFFFF&q=80&w=2470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John" style={{ width: '500px' }} />
                            <div className="container">
                                <h2>John Doe</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <button className="button">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About