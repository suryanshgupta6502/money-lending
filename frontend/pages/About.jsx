import React from 'react'
import Navbar from '../components/Navbar'
import styles from './About.module.css'


export default function About() {
  return (<>
    <Navbar />
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="./About.svg" alt="about" />
      </div>
      <div className={styles.right}>
        <p>Welcome to [Platform Name], your trusted partner in financial empowerment! We understand that life is full of unexpected twists and turns, and sometimes you need a little boost to bridge the gap between where you are and where you want to be. That's why we've created a revolutionary micro-money lending platform, designed with you in mind.
          At [Platform Name], we believe that everyone deserves access to financial opportunities, regardless of their background or circumstances. Our platform is here to break down barriers, offering a simple, transparent, and efficient way for individuals to access micro loans that can make a big difference. Whether you're facing an unexpected expense, pursuing a personal project, or looking to seize a promising opportunity, we've got your back.``
          What sets us apart is our commitment to providing a seamless borrowing experience. Forget about long and complicated application processes. With [Platform Name], you can apply for a micro loan effortlessly, right from the comfort of your own home. Our user-friendly interface ensures that you can navigate the process with ease, and our quick approval times mean you get the funds you need when you need them.``
          And here's the best part – we offer our services at incredibly low rates compared to others in the industry. We believe that financial support should be accessible to all without breaking the bank. Our competitive pricing ensures that you not only get the funds you need but also do so without the burden of high-interest rates.``
          Security is at the heart of everything we do. Rest assured that your personal and financial information is treated with the utmost confidentiality and protected by state-of-the-art security measures. We prioritize your peace of mind so that you can focus on what matters most – achieving your goals.``
          Join the thousands of satisfied borrowers who have experienced the [Platform Name] advantage. We're not just a lending platform; we're your financial partner, committed to helping you build a brighter and more secure future. Explore the possibilities with [Platform Name] and take the first step toward realizing your dreams today.
        </p>
      </div>
    </div>
  </>


  )
}
