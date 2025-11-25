import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[rgb(129,102,67)] text-[#333] px-6 py-6 font-[Poppins] flex justify-center items-center">
      {/* Exit Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-2 left-2 bg-amber-100/20 text-white px-4 py-2 rounded hover:bg-amber-100/50 transition z-50"
      >
        ← Back to Portfolio
      </button>

      {/* Resume Container */}
      <div className="container mt-8 max-w-5xl w-full bg-white shadow-lg rounded-md overflow-hidden">
        <div className="resumeContent flex flex-col md:flex-row bg-[rgb(112,86,51)]">
          {/* Left Side */}
          <div className="leftSide w-full md:max-w-[35%] bg-[rgb(217,195,162)] p-5">
            <div className="section header mb-6">
              <h1 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1">
                Joshua C. Abrams
              </h1>

              <ul className="contactInfo mt-3 space-y-2">
                <li className="text-[14px] text-[#444] flex items-center gap-2">
                  <i className="fa-solid fa-phone text-[18px] text-[antiquewhite]" />
                  (479) 270-8520
                </li>
                <li className="text-[14px] text-[#444] flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-[18px] text-[antiquewhite]" />
                  Joshabrams40@gmail.com
                </li>
                <li className="text-[14px] text-[#444] flex items-center gap-2">
                  <i className="fa-solid fa-earth-americas text-[18px] text-[antiquewhite]" />
                  www.Joshua.Abrams.com
                </li>
                <li className="text-[14px] text-[#444] flex items-center gap-2">
                  <i className="fa-brands fa-linkedin text-[18px] text-[antiquewhite]" />
                  www.linkedin.com/me
                </li>
                <li className="text-[14px] text-[#444] flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-[18px] text-[antiquewhite]" />
                  Bella Vista, AR
                </li>
              </ul>
            </div>

            <div className="section mb-6">
              <h2 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1 hover:text-[#0044cc]">
                Skills
              </h2>
              <ul className="list-disc pl-4 mt-2 text-[14px] text-[#444] space-y-1">
                <li>Excel, Microsoft Office</li>
                <li>React Native, React.js, Next.js</li>
                <li>Java, HTML, CSS, Tailwind CSS</li>
                <li>IoT Device Monitoring</li>
                <li>Novar ESS32, Opus Magnum, Danfoss AKA65, Ultrasite CPC</li>
              </ul>
            </div>

            <div className="section mb-6">
              <h2 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1 hover:text-[#0044cc]">
                Certifications
              </h2>
              <ul className="list-disc pl-4 mt-2 text-[14px] text-[#444] space-y-1">
                <li>ITF+ Certified | CompTIA</li>
                <li>Technology Fundamentals | Thinkful</li>
                <li>Python for Beginners | Udemy</li>
                <li>Walmart Certifications - Cassandra, Python, Coding Practices</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="rightSide w-full md:max-w-[65%] bg-[rgb(193,162,119)] p-5 space-y-6">
            <div className="section">
              <h2 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1 hover:text-[#0044cc]">
                Summary
              </h2>
              <p className="text-[14px] text-[#444] mt-2 leading-relaxed">
                Started in customer relations and quickly transitioned into IT and technical roles at Walmart.
                Passionate about problem-solving, cloud engineering, and big data.
              </p>
            </div>

            <div className="section">
              <h2 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1 hover:text-[#0044cc]">
                Experience
              </h2>
              <div className="experienceDetails mt-3 text-[14px] text-[#444] space-y-4">
                <div>
                  <h3 className="font-semibold text-[16px] text-[rgb(112,86,51)]">Techpod | Customer Care | Walmart</h3>
                  <p>Dec 2023 - Present</p>
                  <p>Support Spark driver technical issues, analyze problems using GSCOPE, CMS Stride, Checkr, and Splunk.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-[rgb(112,86,51)]">Tier 2 Delivery Support | Walmart</h3>
                  <p>Oct 2023 - Dec 2023</p>
                  <p>Provided technical support for Spark drivers, resolved app issues, duplicate orders, and payment problems.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-[rgb(112,86,51)]">Digital Assets | Walmart</h3>
                  <p>Jan 2021 - Oct 2023</p>
                  <p>Monitored refrigeration, HVAC, and IoT systems, ensuring efficient operation and maintenance.</p>
                </div>
              </div>
            </div>

            <div className="section">
              <h2 className="text-[18px] font-semibold text-[rgb(112,86,51)] border-b-2 border-[antiquewhite] pb-1 hover:text-[#0044cc]">
                Education
              </h2>
              <div className="educationDetails mt-3 text-[14px] text-[#444] space-y-3">
                <div>
                  <h3 className="font-semibold text-[16px] text-[rgb(112,86,51)]">Bachelor of Science | Cloud Computing and Solutions</h3>
                  <p>Purdue University Global | Expected: May 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-[rgb(112,86,51)]">Associate of Applied Science | Information Technology</h3>
                  <p>Purdue University Global | Dec 2022 | Honors: cum laude</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href="/src/assets/JoshuaCAbramsResume.pdf"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Download Full PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
