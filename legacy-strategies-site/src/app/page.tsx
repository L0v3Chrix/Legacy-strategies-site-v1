import Hero from '@/components/Hero';
import FrequentStartingPoints from '@/components/FrequentStartingPoints';
import MoreWaysToLearn from '@/components/MoreWaysToLearn';
import BestLegacy from '@/components/BestLegacy';
import Team from '@/components/Team';
import FeaturedArticles from '@/components/FeaturedArticles';
import { getSortedPostsData } from '../lib/posts';
import VideoBanner from '@/components/VideoBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Section><Hero /></Section>
      <Section><FrequentStartingPoints /></Section>
      <Section><MoreWaysToLearn /></Section>
      <Section><BestLegacy /></Section>
      <Section><Team /></Section>
      <Section><FeaturedArticles articles={allPostsData} /></Section>
      <Section><VideoBanner /></Section>
      <Section><Newsletter /></Section>
      <Section><Footer /></Section>
    </main>
  );
}