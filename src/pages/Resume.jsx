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
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-phone text-amber-100"></i>
                (479) 270-8520
              </li>

              <li className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-envelope text-amber-100"></i>
                Joshabrams40@gmail.com
              </li>

              <li className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-earth-americas text-amber-100"></i>
                www.Joshua.Abrams.com
              </li>

              <li className="flex items-center gap-2 text-sm">
                <i className="fa-brands fa-linkedin text-amber-100"></i>
                www.linkedin.com/me
              </li>

              <li className="flex items-center gap-2 text-sm">
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
                <li>Excel, Microsoft Office</li>
                <li>React Native, React.js, Next.js</li>
                <li>Java, HTML, CSS, Tailwind CSS</li>
                <li>IoT Device Monitoring</li>
                <li>Novar ESS32, Opus Magnum, Danfoss AKA65, Ultrasite CPC</li>
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
                <li>Python for Beginners | Udemy</li>
                <li>Walmart Certifications - Cassandra, Python, Coding Practices</li>
              </ul>
            </section>

          </aside>

          {/* RIGHT PANEL */}
          <main className="w-full md:w-2/3 bg-[#c1a277] p-6 text-[#444] space-y-8">

            {/* Summary */}
            <section>
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Summary
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                Started in customer relations and quickly transitioned into IT and technical roles at Walmart.
                Passionate about problem-solving, cloud engineering, and big data.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-semibold text-[#705633] border-b-2 border-amber-100 pb-1">
                Experience
              </h2>

              <div className="mt-3 space-y-4 text-sm">

                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Techpod | Customer Care | Walmart
                  </h3>
                  <p>Dec 2023 - Present</p>
                  <p>
                    Support Spark driver technical issues, analyze problems using GSCOPE, CMS Stride, Checkr, and Splunk.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Tier 2 Delivery Support | Walmart
                  </h3>
                  <p>Oct 2023 - Dec 2023</p>
                  <p>
                    Provided technical support for Spark drivers, resolved app issues, duplicate orders, and payment problems.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Digital Assets | Walmart
                  </h3>
                  <p>Jan 2021 - Oct 2023</p>
                  <p>
                    Monitored refrigeration, HVAC, and IoT systems, ensuring efficient operation and maintenance.
                  </p>
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
                    Bachelor of Science | Cloud Computing and Solutions
                  </h3>
                  <p>Purdue University Global | Expected: May 2025</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#705633] text-base">
                    Associate of Applied Science | Information Technology
                  </h3>
                  <p>Purdue University Global | Dec 2022 | Honors: cum laude</p>
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
