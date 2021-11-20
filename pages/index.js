import Head from "next/head";
import Link from "next/link";
import cx from "classnames";
import styles from "../styles/style.module.css";
import PropTypes from "prop-types";

export default function Home({ children, isOpen, onChange }) {
  // DATA
  const whyData = [
    {
      icon: "theicons icon trophy",
      title: "Great Services",
      descr: "Providing only the best SMM services on the market.",
    },
    {
      icon: "theicons icon money bill alternate outline",
      title: "A Lot Payments System",
      descr: "Add funds through any payment method we offer.",
    },
    {
      icon: "theicons icon dollar sign",
      title: "Amazingly Cheap",
      descr: "You will be surprised at how cheap our SMM services are.",
    },
    {
      icon: "theicons icon fax",
      title: "Fast Delivery",
      descr: "Orders that are placed on our panel are delivered super quickly.",
    },
  ];

  const w2bData = [
    {
      num: "1",
      title: "Register & log in",
      descr: "Register an account on our panel and then log in.",
    },
    {
      num: "2",
      title: "Add funds",
      descr: "Now you need to add funds using a payment method you prefer",
    },
    {
      num: "3",
      title: "Choose SMM services",
      descr: "Pick SMM services and get ready to become more popular online.",
    },
    {
      num: "4",
      title: "Instant results",
      descr:
        "When your order is complete, you will be impressed with the results.",
    },
  ];

  const testimoniesData = [
    {
      index: 1,
      text: "If you don't know how to get more exposure online while not spending a lot of money. You found the right place! These guys provide amazing SMM services that give super quick results and are incredibly cheap.",
      author: "Micheal Jefferson",
    },
    {
      index: 2,
      text: "I am very satisfied with the services provided by this company. I am very happy with the results.",
      author: "Lillian Smith",
    },
    {
      index: 3,
      text: "It can definitely be difficult to get your business noticed online, especially if you are a beginner. Services that you can find on this panel can help your social media accounts grow and that, in turn, will help your business.",
      author: "Samson John",
    },
  ];

  const FAQData = [
    {
      question: "What is an SMM Panel?",
      answer:
        "An SMM panel is an online shop that offers SMM services at affordable prices",
    },
    {
      question: "What types of SMM services can i buy on this panel?",
      answer:
        "We have various types of SMM services for different platforms e.g likes, followers, veiws etc.",
    },
    {
      question: "Is it safe to order SMM services sold here",
      answer: "You are 100% in safe hands.",
    },
    {
      question: "How is the mass order feature used?",
      answer:
        "The mass order feature helps place several ordres with different links at the same time ",
    },
    {
      question: "What does the drip-feed do?",
      answer:
        "Drip-feed helps build the engagement on social media accounts at the speed users want.In case you order,for example,1000 likes on your instagram post,you can either get all 1000 right away or make the process more gradual-as an option,100 likes per day for 10 days.",
    },
  ];

  // FUNCTION
  const onChangeHandler = () => {
    onChange && onChange(!isOpen);
  };

  return (
    <div className="bg-[#ccc]">
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="a website for buying or gaining instagram followers"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>InstaFollowPanel || Home</title>
        </Head>

        <main className="divide-y-4 divide-blue-900">
          {/* Header  */}
          <header className="">
            {/* Page Description  */}
            <h3 className="text-3xl font-semibold p-3">
              We offer likes, followers, veiws and more at super affordable
              prices
            </h3>
            <span className="p-5 pb-5 text-blue-900 underline font-bold text-lg">
              <Link href="/SignUp">Click Here to Get Started</Link>
            </span>
          </header>

          {/* Main Content  */}
          {/* Why choose us? */}
          <section className="p-4 bg-gray-600 text-white sm:flex sm:justify-center">
            <div className="sm:pt-[17%] sm:mr-4">
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="section-descr">
                Let us help you gain popularity online quickly for cheap amounts
              </p>
            </div>
            <div className="section-content-box">
              {whyData.map((item, index) => {
                return (
                  <div key={index} className="flex m-2">
                    <span className="text-4xl pr-4">
                      <i className={item.icon}></i>
                    </span>
                    <div className="w-full">
                      <h3 className="section-content-title">{item.title}</h3>
                      <p className="pb-2">{item.descr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>
          </section>

          {/* Where to begin? */}
          <section className="p-4 sm:flex sm:flex-row-reverse sm:justify-center">
            <div className="sm:pt-[17%] sm:ml-4">
              <h2 className="section-title">Where to Begin</h2>
              <p className="section-descr">
                Want to start placing orders on our panel? Follow these steps
                below.
              </p>
            </div>
            <div className="section-content-box border-white">
              {w2bData.map((item, index) => {
                return (
                  <div key={index} className="flex m-2 text-white">
                    <span className="text-4xl pr-4 pt-6 mr-2 mt-1 border-r-2 border-white">
                      {item.num}
                    </span>
                    <div className="w-full">
                      <h3 className="section-content-title">{item.title}</h3>
                      <p className="pb-2">{item.descr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Testimonies */}
          <article className="bg-gray-600 p-4 sm:flex sm:justify-center">
            <h2 className="section-title sm:pt-[10%]">Testimonies</h2>
            <div className="p-2 m-1 bg-gray-700 shadow-lg border border-white h-full w-full">
              <p>{testimoniesData.author}</p>
            </div>
          </article>

          {/* FAQ  */}
          <section className="p-4 sm:flex sm:flex-row-reverse sm:justify-center">
            <div className="sm:pt-[17%] sm:ml-4">
              <h2 className="section-title">
                FAQs (Frequenty Asked Questions)
              </h2>
              <p className="section-descr">
                We have answered five of the most frequently asked questions
                from our panel visitors.
              </p>
            </div>
            <div className="section-content-box border-white">
              {FAQData.map((item, index) => {
                return (
                  <div key={index} className="m-2 text-white">
                    <p className="section-content-title">{item.question}</p>
                    <p className="pb-2">{item.answer}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </>
    </div>
  );
}

// FUNCTIONS
Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

Home.defaultProps = {
  isOpen: false,
  children: null,
};
