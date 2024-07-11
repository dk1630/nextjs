import MetaHome from "@/components/metaHome";


export default function Home() {

   
  
  return (
    <>
     <MetaHome/>
       <div>
            <div>
                <div className="Services-section">
                    <h1>Home Page</h1>
                    <p>Some text Services who we are and what we do.</p>
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
    </>
  );
}
