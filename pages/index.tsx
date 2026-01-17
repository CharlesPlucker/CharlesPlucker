import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import LeadingSection from '../components/LeadingSection'
import FeatureCardsSection from '../components/FeatureCardsSection'
import Accolades from '../components/Accolades'
import StopDoingStartBeing from '../components/StopDoingStartBeing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />

      <LeadingSection />

      <FeatureCardsSection />

      <Accolades />

      <StopDoingStartBeing />

      {/* Contact Section */}
      <section className="contentSection">
        <h2>Get In Touch</h2>
        <p>
          I am a communicative and team-focused Senior Software Engineer with over 13 years of experience. I thrive when focusing on customer-first products that reward forward-thinking and self-direction. My ideal positions leverage my diverse background in technology, and strong soft-skills for team building and customer interaction.
        </p>
        <p>
          <a href="mailto:charles.plucker@gmail.com">charles.plucker@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/charles-plucker/">https://www.linkedin.com/in/charles-plucker/</a>
        </p>
        <p>
          While AI is an incredible tool, the entirety of this website represents my uninterpreted voice alone.
        </p>
      </section>
      <Footer />
    </div>
  )
}
