import React from "react";
import { NewsBG, Violin, WireKid, RedApples, TowerThumb  } from "../../assets";
import "./news.styles.css";
const News = () => {
  return (
    <div className="news-page">
      <div className="bg-relative">
        <img className="news-bg" src={NewsBG} alt="" />
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
      </div>
      <div className="news-header-content">
        <h1>
          Covid spotlights hunger struggles for Australia's overseas students
        </h1>
        <p>
          Students collaborate to combat food shortages, as Covid widens the gap
          between Australia's haves and have-nots
        </p>
      </div>
      <div className="article-section">
        <div className="new-articles">
          <div className="main">
            <img className="new-thumb" src={WireKid} alt="" />
            <p>January 2, 2022 — 1.29pm</p>
            <h1>
              Food budget of $30 a week: Students suffer food insecurity at
              university campuses.
            </h1>
            <p className="new-desp">
              COVID-19 brought the issue of food insecurity to the fore when
              long queues of hungry international students formed outside city
              food banks during Victoria’s first lockdown last year. Craig
              Jeffrey, a professor of geography at the University of Melbourne
              and one of the study’s authors, said the pandemic merely
              exacerbated a problem that was already widespread.
            </p>
            <div className="read-more">
              <a href="https://www.theage.com.au/national/victoria/food-budget-of-30-a-week-students-suffer-food-insecurity-at-university-campuses-20211223-p59jpu.html" target="_blank" rel="noopener noreferrer"><p>READ MORE</p></a>
            </div>
            <h1>University students going hungry in Australia was a persistent problem before COVID-19.</h1>
            <img  className="new-thumb" src={Violin} alt="" />
            
          </div>
          {/*middle-col*/}
          <div className="news-col main">
            <p>COVID19 Fieldnotes from our Grantees</p>
            <h1>
              Missing Fruit: International Students’ Food Insecurity in
              Australian Universities
            </h1>

            <img className="new-thumb" src={RedApples} alt="" />
            <p>November 10, 2022 — 1.29pm</p>
            <p className="new-desp">
              Food insecurity is a problem that has multiple knock-on effects.
              Many students said that food insecurity left them feeling sluggish
              and detached from their studies. For example, they spoke of having
              muesli bar “sugar hits” before lectures but then finding their
              attention drifting during class. Students also said that a lack of
              nutritious food had affected their mental and physical health.
              Students who were suffering from ongoing health conditions said
              that food insecurity had complicated their conditions, including a
              student who was diabetic
            </p>
            <div className="read-more">
              <a href="https://items.ssrc.org/covid-19-and-the-social-sciences/covid-19-fieldnotes/missing-fruit-international-students-food-insecurity-in-australian-universities/" target="_blank" rel="noopener noreferrer"><p>READ MORE</p></a>
            </div>
            <h1>RESEARCHING FOOD INSECURITY</h1>
            <p className="new-desp">
              The academics involved in the project recruited four students who
              themselves had experienced food insecurity to work as
              co-researchers on the project. These four students then
              interviewed an additional 40 students who had experienced food
              insecurity, who were given supermarket vouchers in exchange for
              their time. Our project showed that many students at the
              University of Melbourne currently experience food insecurity, and
              this is especially evident among international students.
            </p>
          </div>
          {/*right-col*/}
          <div className="main">
            <h1>
              “God, I miss fruit”: Student food insecurity on Australian
              campuses
            </h1>
            <p className="new-desp">
              University and college food insecurity is a flourishing area of
              academic inquiry; the number of studies seem to be multiplying
              weekly. In recent years nutritionists, those in public health,
              sociologists and anthropologists have taken up the challenge of
              investigating and exploring this rather insidious issue, which,
              for those of us involved with higher education, has been sitting
              under our nose for so long. North American scholars have certainly
              taken the lead.
            </p>
            <div className="read-more">
              <a href="https://theconversation.com/god-i-miss-fruit-40-of-students-at-australian-universities-may-be-going-without-food-156584" target="_blank" rel="noopener noreferrer"><p>READ MORE</p></a>
            </div>
            <img className="new-thumb" src={TowerThumb} alt="" />
            <p>November 10, 2022 — 1.29pm</p>
            <p className="new-desp">
              There is no doubt that Australian institutions can look to North
              America for inspiration when it comes to addressing the problem of
              food insecurity. However, future programs and initiatives should
              focus on listening to students and engaging them as leaders: not
              just volunteers at the pantry. Far from passive in their
              struggles, we found that students were resourceful agents,
              constantly hustling to mitigate their hardship from meal prepping
              at home to the way they went about their shopping. Some students
              had a forensic knowledge of the free food available at their
              campus, scheduling their classes so they could eat something to
              get through the day.
            </p>
            <div className="read-more">
              <a href="https://www.campusreview.com.au/2021/03/i-miss-fruit-uni-students-hustling-on-campus-for-food/" target="_blank" rel="noopener noreferrer"><p>READ MORE</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
