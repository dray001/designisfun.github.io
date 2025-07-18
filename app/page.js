// app/page.jsx
import LandingSection from '../components/homePageSections/LandingSection/LandingSection';
import LearnDesignSection from '../components/homePageSections/whyLearnDesignSection/LearnDesignSection';
import RecentLectureSection from '../components/homePageSections/recentLectures/RecentLectureSection';
import GoalsSection from '../components/homePageSections/goalsSection/GoalsSection';
import LessonPlanSection from '../components/homePageSections/lessonPlanSection/LessonPlanSection';
import AboutAuthorSection from '../components/homePageSections/aboutAuthor/AboutAuthorSection';

import { homePageData } from '../data/homePageData';

let landingPageData = homePageData.data[0];
let recentLecPageData = homePageData.data[1];
let learnDesignPageData = homePageData.data[2];
let goalsPageData = homePageData.data[3];
let lessonPlanPageData = homePageData.data[4];
let aboutAuthorPageData = homePageData.data[5];

export default function Home() {
  return (
    <>
      <LandingSection data={landingPageData} />
      <RecentLectureSection data={recentLecPageData} />
      <LearnDesignSection data={learnDesignPageData} />
      <GoalsSection data={goalsPageData} />
      <LessonPlanSection data={lessonPlanPageData} />
      <AboutAuthorSection data={aboutAuthorPageData} />
    </>
  );
}
