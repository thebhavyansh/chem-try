import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/Header";
import Link from "next/link";
import chemlive from "../assets/chemlive.ai.png";
import chemai from "../assets/chemai.png";
import News from "./_components/News";
import services from "../assets/FORECASTING.png";
import Footer from "./_components/Footer";
import DataTable from "./_components/DataTable";
import earth from "../assets/earth.png";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container_main}>
        <Header />
        <div className={styles.banner}>
          <h1 className={styles.heading}>Stay Informed, Stay Relevant</h1>
          <p>
            With ChemDraw, gain the latest insights and trends to ensure your
            strategies are always up-to-date.{" "}
          </p>
          <p>
            Empower your decisions with current knowledge and maintain a
            competitive edge in an ever-changing world.
          </p>
          <div className={styles.search_container}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.search_input}
            />
            <button className={styles.search_button}>Search</button>
          </div>
          <Link href={"/"} className={styles.cta_button}>
            Learn How!
          </Link>
        </div>
        <div className={styles.services}>
          <h1 className={styles.services_h1}>
            EMPOWER YOUR STRATEGIES WITH CHEMDRAW
          </h1>
          <h2 className={styles.services_h2}>
            Data, Insights, and Intelligence at Your Fingertips
          </h2>
          <div className={styles.title}>
            <Image
              src={services}
              alt="Main Image"
              useMap="#image-map"
              width={949}
              height={512}
            />

            <map name="image-map">
              <area
                target="_blank"
                alt="AI Powered Market Research"
                title="AI Powered Market Research"
                href="https://example.com/market-research"
                coords="240,100,50"
                shape="circle"
              />
              <area
                target="_blank"
                alt="Advanced Analytics"
                title="Advanced Analytics"
                href="https://example.com/advanced-analytics"
                coords="475,80,50"
                shape="circle"
              />
              <area
                target="_blank"
                alt="AI Powered Insights"
                title="AI Powered Insights"
                href="https://example.com/ai-insights"
                coords="715,100,80"
                shape="circle"
              />
              <area
                target="_blank"
                alt="Real-time Chemical Pricing"
                title="Real-time Chemical Pricing"
                href="https://example.com/chemical-pricing"
                coords="240,250,50"
                shape="circle"
              />
              <area
                target="_blank"
                alt="Icon 5"
                title="Icon 5"
                href="https://example.com/icon5"
                coords="240,380,50"
                shape="circle"
              />
              <area
                target="_blank"
                alt="Icon 6"
                title="Icon 6"
                href="https://example.com/icon6"
                coords="715,380,80"
                shape="circle"
              />
            </map>
          </div>
        </div>
        <div className={styles.conatiner_2}>
          <h1 className={styles.services_h1}>
            SEAMLESS ACCESS TO CRITICAL MARKET DATA
          </h1>
          <h2 className={styles.services_h2}>Anytime, Anywhere!</h2>
          <div className={styles.sub_cant_2}>
            <div className={styles.left}>
              <h1>ChemDraw LiVE.Ai</h1>
              <p>
                Transform your procurement strategies with our cutting-edge
                AI-powered platform. Gain comprehensive market intelligence,
                actionable insights, and data-driven analysis to stay ahead in
                the competitive landscape. Our platform empowers you to make
                informed decisions, optimize procurement processes, and achieve
                exceptional results with unparalleled efficiency and accuracy.
                Experience the future of procurement intelligence with us.
              </p>
              <div className={styles.btns}>
                <Link href={"/schedule"} className={styles.cta_button}>
                  Request Trial
                </Link>
                <Link href={"/"} className={styles.bta_button}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={styles.right}>
              <Image src={chemlive} />
            </div>
          </div>
          <div className={styles.sub_cant_2}>
            <div className={styles.right}>
              <Image src={chemai} />
            </div>
            <div className={styles.left}>
              <h1>Chem.AI</h1>
              <p>
                Get your sourcing queries resolved instantly by the world’s
                first conversational-AI digital market analyst, ChemDraw. Our
                innovative technology provides real-time insights, data-driven
                decisions, and comprehensive market analysis to optimize your
                procurement strategy. Experience the future of market
                intelligence with ChemDraw and elevate your business with
                unparalleled expertise and efficiency. Unlock the power of AI
                for smarter sourcing today
              </p>
              <div className={styles.btns}>
                <Link href={"/schedule"} className={styles.cta_button}>
                  Request Trial
                </Link>
                <Link href={"/"} className={styles.bta_button}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_3}>
          <h1>Timely Insights for Strategic Decisions</h1>
          <h2>News & Updates</h2>
          <div className={styles.News_cont}>
            <News />
          </div>
        </div>
        <div className={styles.table_main}> <h2>Top Manufacturer</h2>
          <DataTable />
          <div className={styles.earth}>
            <Image src={earth} />
            <div className={styles.earth_lft}>
              <p>* EBIT Operating Income</p>
              <p>* Total Assets</p>
              <p>* EBITDA</p>
              <p>* Companies top manufactured commodities</p>
              <p>* Product Volume Analysis</p>
              <p>* Plants Disruptions</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
