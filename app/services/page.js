'use client'
import { useState } from 'react'

const tabs = [
  {
        label: 'Development',
        subtitle: 'Commercial real estate takes years to conceive, design, finance',
        content: `At still88, we specialize in transforming visionary concepts into stunning hotel properties that not only captivate guests but also drive profitability for owners and investors. Our comprehensive development services encompass every stage of the process, ensuring a seamless transition from initial idea to finished project.

        We begin with meticulous site and asset selection, leveraging in-depth market analysis to identify the best opportunities for new developments or redevelopments of existing properties. Our team conducts thorough feasibility studies that assess market trends, demographic insights, and competitive landscapes, enabling informed decision-making right from the start.

        Innovative architectural design is at the heart of our approach. We collaborate with leading architects and designers to create unique spaces that reflect both the essence of the brand and the needs of the target market. Our commitment to cutting-edge design principles ensures that each hotel not only meets modern aesthetic standards but also incorporates functionality and guest comfort.

        Throughout the construction phase, we employ rigorous project management practices to oversee every detail, from budget adherence to timeline management. Our experienced construction management team works closely with contractors and subcontractors to ensure that all work is completed to the highest standards, on schedule, and within budget.

        Sustainability is a core principle of our development philosophy. We prioritize eco-friendly practices and materials, ensuring that our hotels minimize their environmental impact while enhancing their appeal to today's conscientious travelers.

        At still88, we recognize that the legacy of a hotel is built on the experiences it provides. Let us help you create a distinctive brand that stands out in the hospitality landscape, enhancing your reputation and ensuring lasting success.`
  },
  {
        label: 'Operations',
        subtitle: 'Efficient Operations Transform Guests into Lifelong Patrons',
        content: `Efficient operations are the backbone of any successful hotel, and at still88, we pride ourselves on delivering exceptional operational management tailored to unique needs. Our dedicated team of seasoned professionals adopts a hands-on approach, meticulously overseeing daily operations to ensure that every aspect—from guest services and housekeeping to maintenance and dining—is executed with precision and care.

        We understand that the hospitality industry is constantly evolving, which is why we implement industry best practices and leverage advanced technology to streamline processes. By optimizing workflows and enhancing team performance, we create an environment that fosters both operational excellence and an outstanding guest experience.

        Our data-driven approach enables us to identify areas for improvement, allowing us to respond swiftly to changing market demands and guest expectations.

        Training and development are at the core of our operations strategy. We believe that empowered staff members are key to delivering exceptional service. Our tailored training programs equip your team with the skills and knowledge necessary to exceed guest expectations, transforming each interaction into a memorable experience that encourages repeat visits.

        At still88, we are passionate about helping you achieve operational success that reflects the quality and uniqueness of your brand, creating lasting impressions for every guest who walks through the doors.`
  },
  {
        label: 'Strategic Consulting',
        subtitle: 'Strategic Insights That Drive Success in Hospitality',
        content: `In today's rapidly evolving hospitality landscape, making informed decisions is crucial for long-term success. At still88, we provide expert guidance and strategic foresight through our comprehensive advisory and consulting services. Our team offers the strategic insights and expertise needed to navigate market dynamics and capitalize on emerging trends.

        We conduct in-depth feasibility studies, financial modeling, and market analysis to assess potential projects and investments, ensuring you are well-prepared for the road ahead. Our services include competitive benchmarking and tailored operational assessments that help identify growth opportunities and areas for improvement.

        With ongoing support in risk management, brand development, and market positioning, we empower you to stay competitive in a crowded marketplace. Our seasoned consultants deliver actionable recommendations and innovative strategies, all backed by thorough research and industry knowledge.

        Let still88 be your trusted partner in achieving excellence and driving sustainable profitability in your hotel business.`
  },
  {
        label: 'Expert Advisory Services',
        subtitle: 'Navigate Market Challenges with Expert Guidance',
        content: `In today's rapidly evolving hospitality landscape, making informed decisions is essential for long-term success. At still88, we offer expert testimony and litigation support, ensuring you have the strategic insights needed to navigate market dynamics and capitalize on emerging trends.

        Our services include:

        Expert Testimony: Experienced professionals who deliver credible opinions based on thorough research and industry standards.

        Asset Valuations: Comprehensive assessments for bankruptcy proceedings, partnership disputes, and market rent adjustments.

        Quantification of Loss: Evaluating impacts from construction defects, operational disruptions, and more.

        In addition to litigation support, our advisory services encompass feasibility studies, financial modeling, and ongoing assistance in risk management and brand development. We empower you to make strategic choices that drive growth and sustainability, ensuring you stay competitive in a crowded marketplace.`
  }
  ]

export default function Services() {
    const [active, setActive] = useState(0)

  return (
        <>
  {/* Hero */}
          <section className="relative w-full overflow-hidden" style={{height: '90vh'}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('http://3.141.1.117/wp-content/uploads/2013/04/contact-us-mainimage.jpg')", filter: 'grayscale(100%)'}}
        />
        <div className="absolute inset-0 bg-black/30" />
          </section>

{/* Services Section */}
      <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl tracking-widest uppercase mb-2">
                      OUR <span className="text-[#1a3a8c]">SERVICES</span>
        </h2>
            <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-8" />
                    <p className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto">
                      At still88, we recognize that clients have high expectations for the performance and potential of assets. In today&apos;s competitive hospitality landscape, optimizing every aspect of properties is crucial for achieving exceptional results. With deep industry expertise and a commitment to deploying best practices across all facets of hotel management—development, operations, strategic consulting, and expert advisory services—we empower maximum returns and enhance guest satisfaction. Our tailored approach ensures that each asset is not only fully optimized but also positioned for sustainable growth and success. We partner to build confidence in investments, delivering solutions that drive operational excellence and long-term profitability. We turn visions into reality and elevate the hospitality experience.
        </p>
        </div>

{/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab, i) => (
                          <button
                                    key={tab.label}
                onClick={() => setActive(i)}
                className={`px-6 py-4 text-sm tracking-wider uppercase transition-colors ${
                                    active === i
                                      ? 'bg-gray-800 text-white border-b-2 border-gray-800'
                                      : 'text-gray-600 hover:text-gray-800 border border-gray-200'
                }`}
              >
{tab.label}
</button>
            ))}
              </div>

{/* Tab Content */}
          <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{tabs[active].label}</h3>
            <p className="text-[#1a3a8c] text-sm mb-6">{tabs[active].subtitle}</p>
            <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
          {tabs[active].content}
</div>
  </div>
  </div>
  </section>
  </>
  )
}
