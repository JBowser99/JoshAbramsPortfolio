import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#816643] text-[#333] font-[Poppins] flex justify-center items-center p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 z-50 bg-black/30 backdrop-blur px-4 py-2 text-white rounded-md hover:bg-black/50 transition"
      >
        ← Back to Portfolio
      </button>

      {/* Resume Card */}
      <div className="w-full max-w-5xl mt-10 bg-white rounded-lg shadow-lg overflow-hidden border border-black/10">
        <div className="flex flex-col md:flex-row bg-[#705633] text-white">
          {/* LEFT PANEL */}
          <aside className="w-full md:w-1/3 bg-[#d9c3a2] p-5 text-[#444]">
            {/* Header */}
            <h1 className="text-xl font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
              Joshua C. Abrams
            </h1>

            {/* Contact */}
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-amber-100"></i>
                (479) 270-8520
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-amber-100"></i>
                <span className="break-all">joshua.abrams@walmart.com</span>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-earth-americas text-amber-100"></i>
                <a
                  href="https://joshabramsportfolio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  joshabramsportfolio.web.app
                </a>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-amber-100"></i>
                Bella Vista, AR
              </li>
            </ul>

            {/* Skills */}
            <section className="mt-6">
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Skills
              </h2>
              <ul className="mt-2 pl-5 list-disc text-sm space-y-1">
                <li>Technical Troubleshooting</li>
                <li>Data Analysis &amp; Trend Identification</li>
                <li>Excel &amp; Microsoft Office</li>
                <li>Mobile Application Development (iOS &amp; Android)</li>
                <li>Backend system &amp; Tooling (VCC, GSCOPE, CMS)</li>
              </ul>
            </section>

            {/* Certifications */}
            <section className="mt-6">
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Certifications
              </h2>
              <ul className="mt-2 pl-5 list-disc text-sm space-y-1">
                <li>ITF+ Certified | CompTIA</li>
                <li>Technology Fundamentals | Thinkful</li>
                <li>Python for beginners | Udemy</li>
                <li>Walmart Certifications - Cassandra, Python, Coding Practices | Dewey</li>
              </ul>
            </section>
          </aside>

          {/* RIGHT PANEL */}
          <main className="w-full md:w-2/3 bg-[#c1a277] p-6 text-[#444] space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Professional Summary
              </h2>

              <p className="mt-2 text-sm leading-relaxed">
                I am a motivated and adaptable technical professional with over five years of
                experience across customer care, technical operations, and enterprise support
                environments. I currently serve on the TechPod team, providing high-level
                technical support for Spark driver operations, where I investigate complex issues,
                analyze system behavior, and deliver timely resolutions in fast-paced, high-impact
                situations.
              </p>

              <p className="mt-2 text-sm leading-relaxed">
                I was among the first team members to support Walmart’s Digital Assets initiative,
                specializing in nationwide IoT device monitoring across U.S. stores and fuel stations.
                This role strengthened my ability to interpret large datasets, recognize trends, validate
                upstream issues, and coordinate rapid responses with cross-functional teams.
              </p>

              <p className="mt-2 text-sm leading-relaxed">
                In addition to my professional experience, I actively build modern software solutions,
                including a cross-platform iOS and Android mobile application and supporting website.
                This hands-on development enhances my understanding of mobile platforms, backend
                systems, and data-driven decision-making. I am known for my problem-solving mindset,
                attention to detail, and ability to communicate effectively with both technical and
                non-technical stakeholders.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Experience
              </h2>

              <div className="mt-3 space-y-6 text-sm">
                {/* TechPod */}
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Walmart, December 19th, 2023 - Current
                  </h3>
                  <p className="italic">Techpod | Customer Care | Bentonville, AR</p>
                  <ul className="mt-2 pl-5 list-disc space-y-1">
                    <li>
                      Working offline to support all spark driver technical concerns. This includes spark app
                      issues, communication, driver account problems, background or application updates
                      and issues, driver information changes, payment inquiries and deactivations.
                    </li>
                    <li>
                      Using applications such as GSCOPE, CMS stride, Checkr, Splunk and different directories
                      to analyze why the driver’s problem occurred, is it still present, and how can we resolve it.
                    </li>
                    <li>
                      Communicating to the drivers via email with a resolution, providing our drivers steps for
                      troubleshooting or information we need them to update etc...
                    </li>
                  </ul>
                </div>

                {/* Tier 2 Delivery Support */}
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Walmart, October 9th, 2023 – December 19th, 2023
                  </h3>
                  <p className="italic">Tier 2 Delivery Support | Customer Care | Bentonville, AR</p>
                  <ul className="mt-2 pl-5 list-disc space-y-1">
                    <li>
                      Provided professional technical support over all problems our spark drivers ran into,
                      documenting and escalating accordingly.
                    </li>
                    <li>
                      Aided in resolving app communication issues, duplicate orders, stuck trips or orders,
                      and payment issues.
                    </li>
                    <li>
                      Went above and beyond to ensure drivers success, providing me with excellent metrics
                      and 5-star reviews from drivers.
                    </li>
                  </ul>
                </div>

                {/* Digital Assets */}
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Walmart, January 2021 – October 9th, 2023
                  </h3>
                  <p className="italic">Digital Assets | Customer Care | Bentonville, AR</p>
                  <ul className="mt-2 pl-5 list-disc space-y-1">
                    <li>
                      Resolved technical issues on refrigeration and HVAC units while making contact to our
                      vendors/technicians for necessary on-site repairs within our US stores.
                    </li>
                    <li>
                      Used Service Channel to document, create, and manage tickets necessary for emergency
                      repairs and updates on Walmart’s refrigeration or HVAC units.
                    </li>
                    <li>
                      Worked closely with Walmart’s contracted technicians and vendors to help them out on site
                      with repairs.
                    </li>
                    <li>
                      Programming changes performed within our IOT systems Novar, Opus, Danfoss, and CPC,
                      to ensure the equipment is healthy and running properly.
                    </li>
                    <li>
                      Recognized and responded to trends in all Walmart US stores. Monitoring alarms, defrosts,
                      and work orders using IOT software.
                    </li>
                  </ul>
                </div>

                {/* Temporary SAM Role */}
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Walmart, September 2022 - April 2023
                  </h3>
                  <p className="italic">Temporary SAM Role | System Admin/Analyst | Business Enablement</p>
                  <ul className="mt-2 pl-5 list-disc space-y-1">
                    <li>Used Excel daily to perform wide range analysis with user and team data to update substantial changes.</li>
                    <li>Managed copious amounts of user data. Adding and removing access to specific applications as needed for new hires.</li>
                    <li>Resolved over two hundred Jira tickets for our connected teams.</li>
                    <li>
                      Resolved user account errors and access problems within software applications such as,
                      Oracle, Max, VCC, PayPal, Stella, CCA, ITrac, Litmos, and more.
                    </li>
                    <li>
                      Assisted with one of our China teams in a process we called BPO (Business Process Outsource).
                      Our team in China would receive new hire rosters daily and could not perform certain user configurations.
                      We worked to ensure users were added to proper systems such as Stella and dispatcher with proper account configuration.
                    </li>
                  </ul>
                </div>

                {/* Resolution Specialist 3 */}
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Walmart, May 2020 - January 2021
                  </h3>
                  <p className="italic">Resolution Specialist 3 | Customer Care | Bentonville, AR</p>
                  <ul className="mt-2 pl-5 list-disc space-y-1">
                    <li>I returned to Walmart over 5 years ago and have never looked back.</li>
                    <li>Always listened to the customer and made them feel valued, resolving any problems that caller has.</li>
                    <li>Communicated effectively to customers to reduce stress and give a resolution on each call.</li>
                    <li>
                      Provided guidance to customers and documented each call with an explanation on my resolution
                      as to what I did and how I helped the caller.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Education
              </h2>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    May 2025
                  </h3>
                  <p>Bachelor of Science | Cloud Computing and Solutions</p>
                  <p>Purdue University Global. Indianapolis, IN</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    December 2022
                  </h3>
                  <p>Associate of Applied Science | Information Technology</p>
                  <p>Honors: cum laude</p>
                  <p>Purdue University Global. Indianapolis, IN</p>
                </div>
              </div>
            </section>

            {/* PDF Button */}
            <div className="text-center pt-4">
              <a
                href="/images/JoshuaCAbramsResume.pdf"
                download="JoshuaCAbramsResume.pdf"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Download Resume PDF
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
