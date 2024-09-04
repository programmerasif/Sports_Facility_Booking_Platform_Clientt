
import { ReactLenis } from 'lenis/react'
import { useTransform, motion, useScroll, } from 'framer-motion'
import { useRef } from 'react'
import { ScrollCardProps } from '@/types/types'
import fb from '../../assets/logos_facebook.png'
import insta from '../../assets/skill-icons_instagram.png'
import linkedin from '../../assets/skill-icons_linkedin.png'
import youtube from '../../assets/logos_youtube-icon.png'

const projects = [
  {
    title: 'Wellcome to Our GameSpace',
    description:
      "Welcome to GameSpace! We're excited to have you on board as you explore the easiest way to book sports facilities in your area. Whether you're a seasoned athlete, a weekend warrior, or just looking for a place to have fun, our platform is designed to make your booking experience smooth, efficient, and enjoyable. Let’s walk you through how to get started!",
    src: 'rock.jpg',
    link: 'https://i.ibb.co/C7ddKXK/welcome-Page.png',
    color: '#24287a',
  },
  {
    title: 'Login or Create an Account(step-1)',
    description:
      "Start by creating an account with us. Click on the 'Sign Up' button at the top right of the homepage. You'll need to enter your name, email address, and create a password. Once you’ve filled in your details, check your email for a confirmation link to verify your account or Login your account. After verification, you’re all set to log in and start booking.",
    src: 'rock.jpg',
    link: 'https://i.ibb.co/CJH8F8Z/login.png',
    color: '#24287a',
  },
  {
    title: 'Browse Facilities (step-2)',
    description:
     "After logging in, head over to our facilities page where you can browse all the available sports venues. Use our search filters to narrow down your options based on location, sport, availability, and other preferences. Each facility listing includes photos, descriptions, amenities, and user reviews to help you make an informed decision.",
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#282d89',
  },
  {
    title: ' Select Date and Time(step-3)',
    description:
      "Once you’ve found the perfect facility, select your preferred date and time for the booking. Our platform shows real-time availability, ensuring you can book the slot that best fits your schedule. You can also see peak and off-peak hours, helping you choose the most convenient time.",
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#2d3298',
  },
  {
    title: 'How It Work (step-4)',
    description:
      "With your date and time selected, click on the 'Book Now' button. You’ll be prompted to review your booking details and proceed to payment. We offer multiple payment options, including credit/debit cards, online wallets, and bank transfers. Rest assured, all transactions are secure and encrypted.",
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#3137a7',
  },
  {
    title: 'Check-In and Enjoy(step-5)',
    description:
      "On the day of your booking, simply arrive at the facility a few minutes before your scheduled time. Depending on the facility, you may need to show your booking confirmation to the staff. Enjoy your session, whether it’s a game of tennis, football, or any other sport you love.",
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#3137a7',
  },
]
export default function HowItworks(): JSX.Element {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
 
  return (
    <ReactLenis root>
      <main className="bg-[#12143D] mt-20" ref={container}>
        <>
          <section className="text-white  h-[50vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Get the Most Out of Our Product:  <br /> Read Our Guidelines! <span className='animate-bounce'>👇</span>
            </h1>
          </section>
        </>

        <section className="text-white   w-full bg-slate-950  ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

export const Card: React.FC<ScrollCardProps> = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  url,
  targetScale,
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  const icons = [{item:fb,link:''},{item:insta,link:''},{item:linkedin,link:''},{item:youtube,link:''}]
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-full md:w-[70%] rounded-md p-10 origin-top`}
      >
        <h2 className=" text-xl md:text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex flex-col-reverse md:flex-row h-full mt-5 gap-2 md:gap-10`}>

          <div className={`w-full md:w-[40%] relative top-0 md:top-[10%]`}>
            <p className="text-xs md:text-sm ">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={'#'}
                target="_blank"
                className="underline cursor-pointer text-xs md:text-sm"
              >
                See more
              </a>
              <svg
               className='size-3 md:size-6'
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className='flex justify-start items-center gap-4 md:gap-10 pt-2 md:pt-10'>
                {
                  icons?.map(icon => (<div key={icon.item}><img src={icon.item} alt="" className='w-6 md:w-10'/></div>))
                }
                
            </div>
          </div>

          <div
            className={`relative w-[50%] h-[30vh] rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              {/* <Image fill src={url} alt="image" className="object-cover" /> */}
             <div className='w-full bg-gray-100 flex justify-center h-[30vh] items-center'>
                <img src={url} alt="" className=''/>
             </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
