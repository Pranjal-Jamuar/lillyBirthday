// Import necessary libraries
import React from "react"
import { motion } from "motion/react"
import { gsap } from "gsap"

const LilyBloomAnimation = () => {
  // GSAP animation for the stem growth
  React.useEffect(() => {
    gsap.fromTo(
      ".stem",
      { height: "0%" },
      { height: "100%", duration: 2, ease: "power2.out", delay: 0.5 }
    )
  }, [])

  // Framer Motion variants for the petals blooming
  const petalVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 2,
        staggerChildren: 0.3,
      },
    },
  }

  // Framer Motion variants for the text appearance
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4,
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "110vh",
        backgroundColor: "#e0f7fa",
        textAlign: "center",
      }}
    >
      {/* Flower Container */}
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "300px",
          top: "250px",
        }}
      >
        {/* Stem */}
        <div
          className='stem'
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: "5px",
            backgroundColor: "#2e7d32",
            transform: "translateX(-50%)",
          }}
        ></div>

        {/* Petals */}
        <motion.div
          className='petals'
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          variants={petalVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Top Petal */}
          <motion.div
            style={{
              width: "40px",
              height: "100px",
              background: "linear-gradient(to top, #f8bbd0, #f48fb1)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              position: "absolute",
              top: "-70px",
              left: "50%",
              transform: "translateX(-50%) rotate(0deg)",
            }}
          ></motion.div>

          {/* Top Left Petal */}
          <motion.div
            style={{
              width: "40px",
              height: "100px",
              background: "linear-gradient(to top, #f8bbd0, #f48fb1)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              position: "absolute",
              top: "-60px",
              left: "20px",
              transform: "rotate(-45deg)",
            }}
          ></motion.div>

          {/* Top Right Petal */}
          <motion.div
            style={{
              width: "40px",
              height: "100px",
              background: "linear-gradient(to top, #f8bbd0, #f48fb1)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              position: "absolute",
              top: "-60px",
              right: "20px",
              transform: "rotate(45deg)",
            }}
          ></motion.div>

          {/* Bottom Left Petal */}
          <motion.div
            style={{
              width: "40px",
              height: "100px",
              background: "linear-gradient(to top, #f8bbd0, #f48fb1)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              position: "absolute",
              bottom: "-20px",
              left: "20px",
              transform: "rotate(-90deg)",
            }}
          ></motion.div>

          {/* Bottom Right Petal */}
          <motion.div
            style={{
              width: "40px",
              height: "100px",
              background: "linear-gradient(to top, #f8bbd0, #f48fb1)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              position: "absolute",
              bottom: "-20px",
              right: "20px",
              transform: "rotate(90deg)",
            }}
          ></motion.div>
        </motion.div>
        {/* Stamens */}
        <motion.div
          className='stamens'
          style={{
            position: "absolute",
            top: "-50px", // Adjusted to position stamens in the center petal
            left: "50%",
            transform: "translateX(-50%) rotate(180deg)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.5, duration: 1 } }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "2px",
                height: "30px",
                backgroundColor: "#ffb74d",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: `rotate(${i * 72}deg) translateX(-50%)`,
                transformOrigin: "bottom center",
              }}
            ></div>
          ))}
        </motion.div>

        {/* Leaves */}
        <motion.div
          className='leaves'
          style={{
            position: "absolute",
            top: "50px", // Adjusted to position leaves just below the flower
            left: "50%",
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 1.5, duration: 1 },
          }}
        >
          {/* Left Leaf */}
          <div
            style={{
              width: "60px",
              height: "20px",
              background: "linear-gradient(to right, #4caf50, #2e7d32)",
              borderRadius: "50% 0 0 50%",
              position: "absolute",
              left: "-50px",
              transform: "rotate(-30deg)",
            }}
          ></div>

          {/* Right Leaf */}
          <div
            style={{
              width: "60px",
              height: "20px",
              background: "linear-gradient(to left, #4caf50, #2e7d32)",
              borderRadius: "0 50% 50% 0",
              position: "absolute",
              right: "-50px",
              transform: "rotate(30deg)",
            }}
          ></div>
        </motion.div>

        {/* Custom Text */}
        <motion.div
          className='custom-text'
          style={{
            position: "absolute",
            top: "-220px",
            left: "15%",
            transform: "translateX(-50%)",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#4a148c",
            textAlign: "center",
          }}
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          "Happy Birthday Gorgeous, May you have the best year of your life.
          Love you loads!!!"
        </motion.div>
      </div>

      {/* Collage and Paragraph */}
      <div style={{ marginTop: "300px", textAlign: "center", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 100px)",
            gap: "10px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <img
            src='/images/image-1.jpg'
            alt='Collage Image 1'
            style={{
              height: "150px",
              width: "100px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          />
          <img
            src='/images/image-3.jpg'
            alt='Collage Image 2'
            style={{
              height: "150px",
              width: "100px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          />
          <img
            src='/images/image-2.jpg'
            alt='Collage Image 3'
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          />
          <img
            src='/images/image-4.jpg'
            alt='Collage Image 4'
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          />
        </div>
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#4a148c",
            maxWidth: "400px",
            margin: "20px auto",
          }}
        >
          Hey babe, I can't do much financially for you this birthday and I am
          not there with you as well but I thought I could do something personal
          with my limited knowledge of web development for this birthday of
          yours. It's a Lily blooming coz duh I want you to bloom like this and
          then these 4 pictures which I like a lot. Happy Birthday Lilly. I love
          you 3000.
        </p>
      </div>
    </div>
  )
}

export default LilyBloomAnimation
