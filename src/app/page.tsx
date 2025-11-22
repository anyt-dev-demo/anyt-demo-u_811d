import Slide from "@/components/Slide";
import SlideContainer from "@/components/SlideContainer";
import FeatureCard from "@/components/slides/FeatureCard";
import HighlightBox from "@/components/slides/HighlightBox";
import PhaseCard from "@/components/slides/PhaseCard";
import StatCard from "@/components/slides/StatCard";

export default function Home() {
  return (
    <SlideContainer>
      {/* Slide 1: Cover */}
      <Slide title="Presentation Title" subtitle="Your subtitle goes here">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
            Main Message
          </p>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            Supporting tagline or description
          </p>
          <p className="mt-8 text-xl text-blue-600 dark:text-blue-400">
            yourwebsite.com
          </p>
        </div>
      </Slide>

      {/* Slide 2: Feature Cards */}
      <Slide title="Feature Cards" subtitle="5 color variants available">
        <div className="flex flex-col gap-6">
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Use FeatureCard component for highlighting key features with colored
            left borders.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <FeatureCard
              color="blue"
              title="Blue Feature"
              description="Description text for this feature"
            />
            <FeatureCard
              color="green"
              title="Green Feature"
              description="Description text for this feature"
            />
            <FeatureCard
              color="purple"
              title="Purple Feature"
              description="Description text for this feature"
            />
            <FeatureCard
              color="orange"
              title="Orange Feature"
              description="Description text for this feature"
            />
            <FeatureCard
              color="red"
              title="Red Feature"
              description="Description text for this feature"
            />
          </div>
        </div>
      </Slide>

      {/* Slide 3: Phase Cards */}
      <Slide title="Phase Cards" subtitle="Timeline-based cards">
        <div className="flex flex-col gap-6">
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Use PhaseCard component for roadmaps, timelines, or phased plans.
          </p>
          <PhaseCard
            color="blue"
            title="Phase 1: Title"
            timeline="Q1 2025"
            description="Description of this phase and what it includes"
          />
          <PhaseCard
            color="green"
            title="Phase 2: Title"
            timeline="Q2 2025"
            description="Description of this phase and what it includes"
          />
          <PhaseCard
            color="purple"
            title="Phase 3: Title"
            timeline="Q3 2025"
            description="Description of this phase and what it includes"
          />
        </div>
      </Slide>

      {/* Slide 4: Highlight Boxes */}
      <Slide title="Highlight Boxes" subtitle="3 variants for emphasis">
        <div className="flex flex-col gap-6">
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Use HighlightBox component to emphasize important content.
          </p>
          <HighlightBox variant="gradient-blue">
            <p className="text-xl font-semibold">
              Gradient Blue: Great for key insights or important announcements
            </p>
          </HighlightBox>
          <HighlightBox variant="gradient-purple">
            <p className="text-xl font-semibold">
              Gradient Purple: Perfect for vision statements or quotes
            </p>
          </HighlightBox>
          <HighlightBox variant="gray">
            <h4 className="mb-2 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              Gray Box
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Neutral background for supporting information or details
            </p>
          </HighlightBox>
        </div>
      </Slide>

      {/* Slide 5: Stat Cards */}
      <Slide title="Stat Cards" subtitle="3 variants for metrics">
        <div className="flex flex-col gap-6">
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Use StatCard component to display statistics and metrics.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Default Style" value="Simple bordered card" />
            <StatCard
              label="Metrics"
              value="1,234"
              subtitle="Description text"
              variant="gradient"
            />
            <StatCard label="Timeline" value="Coming soon" variant="dashed" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Users" value="10K+" />
            <StatCard
              label="Growth"
              value="150%"
              subtitle="Year over year"
              variant="gradient"
            />
            <StatCard label="Next Release" value="v2.0" variant="dashed" />
          </div>
        </div>
      </Slide>

      {/* Slide 6: Comparison Layout */}
      <Slide title="Comparison Layout" subtitle="Contrast two concepts">
        <div className="flex flex-col gap-6">
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Use contrasting colors to compare before/after or pros/cons.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
              <h4 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-100">
                Before / Problem
              </h4>
              <p className="text-red-700 dark:text-red-300">
                Description of the problem or current state
              </p>
            </div>
            <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <h4 className="mb-2 text-xl font-semibold text-green-900 dark:text-green-100">
                After / Solution
              </h4>
              <p className="text-green-700 dark:text-green-300">
                Description of the solution or desired state
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Grid Layouts */}
      <Slide title="Grid Layouts" subtitle="Various column configurations">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Use Tailwind grid classes for different layouts.
          </p>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                Item 1
              </p>
            </div>
            <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
              <p className="font-semibold text-green-900 dark:text-green-100">
                Item 2
              </p>
            </div>
            <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-900">
              <p className="font-semibold text-purple-900 dark:text-purple-100">
                Item 3
              </p>
            </div>
            <div className="rounded-lg bg-pink-100 p-4 dark:bg-pink-900">
              <p className="font-semibold text-pink-900 dark:text-pink-100">
                Item 4
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-zinc-200 p-4 dark:bg-zinc-800">
              <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                Column 1
              </p>
            </div>
            <div className="rounded-lg bg-zinc-300 p-4 dark:bg-zinc-700">
              <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                Column 2
              </p>
            </div>
            <div className="rounded-lg bg-zinc-400 p-4 dark:bg-zinc-600">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Column 3
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Big Number */}
      <Slide title="Big Number" subtitle="Highlight key metrics">
        <div className="flex flex-col gap-6">
          <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-center text-white">
            <div className="mb-2 text-6xl font-bold">$XX.XM</div>
            <p className="text-2xl">Key metric or market size</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                Category 1
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Supporting details for this category
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                Category 2
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Supporting details for this category
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 9: Call to Action */}
      <Slide title="Call to Action" subtitle="End with a strong message">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
            <p className="mb-2 text-2xl">Your Ask</p>
            <div className="text-5xl font-bold">Main CTA</div>
            <p className="mt-2 text-xl">Supporting context</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Action item 1
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                Action item 2
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                Action item 3
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 10: AWS Loft */}
      <Slide title="AWS Loft" subtitle="Innovation Spaces Around the World">
        <div className="flex flex-col gap-6">
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
            <h3 className="mb-2 text-2xl font-bold">What is AWS Loft?</h3>
            <p className="text-lg">
              A global network of innovation spaces where startups, enterprises, and developers collaborate, learn, and build on AWS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCard
              color="blue"
              title="Locations"
              description="Global presence in major tech hubs across multiple continents"
            />
            <FeatureCard
              color="green"
              title="Founded"
              description="Launched by AWS to foster entrepreneurship and innovation"
            />
            <FeatureCard
              color="purple"
              title="Community"
              description="Home to thousands of startups and AWS customers"
            />
            <FeatureCard
              color="orange"
              title="Resources"
              description="Access to mentorship, funding, and AWS services"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <p className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                20+
              </p>
              <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                Global Locations
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <p className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
                10K+
              </p>
              <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                Startups Supported
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <p className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                100B+
              </p>
              <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                AWS Credits Awarded
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </SlideContainer>
  );
}
