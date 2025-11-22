"use client";

import Slide from "@/components/Slide";
import FeatureCard from "@/components/slides/FeatureCard";
import HighlightBox from "@/components/slides/HighlightBox";

export default function PrintPage() {
  return (
    <div className="print-slides">
      {/* Slide 1: Cover */}
      <Slide
        title="Production Agents - Hack"
        subtitle="Production-grade Agents Hackathon"
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
            Build with the future stack of AI
          </p>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            🏆 $50k+ in Prizes!
          </p>
        </div>
      </Slide>

      {/* Slide 2: The Opportunity */}
      <Slide title="The Opportunity" subtitle="Powerful integrations at your fingertips">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            We've lined up powerful integrations with 15+ leading AI companies so
            your ideas don't just stay ideas. You can bring them all the way to
            working agents and products.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <FeatureCard
              color="blue"
              title="AWS"
              description="Scalable cloud infrastructure"
            />
            <FeatureCard
              color="purple"
              title="Anthropic"
              description="Claude AI Copilots"
            />
            <FeatureCard
              color="green"
              title="Skyflow"
              description="Secure data handling"
            />
            <FeatureCard
              color="orange"
              title="Postman"
              description="Real-time API data"
            />
            <FeatureCard
              color="red"
              title="Redis"
              description="Fast data storage"
            />
            <FeatureCard
              color="blue"
              title="TRM Labs"
              description="Blockchain intelligence"
            />
          </div>
        </div>
      </Slide>

      {/* Slide 3: Build in One Day */}
      <Slide title="Build in One Day" subtitle="What teams will prototype">
        <div className="flex flex-col gap-4">
          <HighlightBox variant="gradient-blue">
            <p className="font-semibold">
              AI Copilots powered by Claude, with secure data handling through
              Skyflow and scalable infrastructure on AWS
            </p>
          </HighlightBox>
          <HighlightBox variant="gradient-purple">
            <p className="font-semibold">
              Autonomous Research Assistants that fetch real-time insights using
              Postman APIs, store findings in Redis, and present through Sanity
            </p>
          </HighlightBox>
          <HighlightBox variant="gray">
            <p className="font-semibold">
              Real-Time Data Explorers leveraging TRM's blockchain intelligence,
              Finster AI's analytics, and Senso's data capabilities
            </p>
          </HighlightBox>
          <HighlightBox variant="gradient-blue">
            <p className="font-semibold">
              Creative Design Agents built with Coder's development environments
              and integrated with Cleric's workflow tools
            </p>
          </HighlightBox>
        </div>
      </Slide>

      {/* Slide 4: Schedule */}
      <Slide title="Event Schedule" subtitle="Save the date for full-day innovation">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                9:30 AM - Doors Open
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                9:45 AM - Keynote & Opening
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-semibold text-purple-900 dark:text-purple-100">
                11:00 AM - Start Coding!
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-semibold text-orange-900 dark:text-orange-100">
                1:30 PM - Lunch Break
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                4:30 PM - Submission Deadline
              </p>
            </div>
            <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-950">
              <p className="font-semibold text-pink-900 dark:text-pink-100">
                7:00 PM - Awards Ceremony
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 5: Key Highlights */}
      <Slide title="Why Attend?" subtitle="12+ leading AI companies and experts">
        <div className="flex flex-col gap-6">
          <FeatureCard
            color="blue"
            title="Industry Leaders"
            description="Talk directly with founders, engineers, and investors from top AI companies"
          />
          <FeatureCard
            color="green"
            title="Expert Talks"
            description="Laser-focused sessions led by experts in AI and software development"
          />
          <FeatureCard
            color="purple"
            title="$50K+ Prizes"
            description="Compete for significant prize money and recognition"
          />
          <FeatureCard
            color="orange"
            title="AWS Loft SF"
            description="Located in the beautiful Amazon SF Loft office space"
          />
        </div>
      </Slide>

      {/* Slide 6: Call to Action */}
      <Slide title="Ready to Build?" subtitle="The future of intelligent software">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-center text-white">
            <p className="mb-2 text-2xl">Register Now</p>
            <div className="text-4xl font-bold">Production Agents Hack</div>
            <p className="mt-4 text-lg">San Francisco, California</p>
            <p className="mt-2 text-sm">
              Age 18+ required • Valid government ID mandatory
            </p>
          </div>
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            The future of intelligent software isn't coming — you're building it.
            ⚡🔥
          </p>
        </div>
      </Slide>

      <style jsx global>{`
        @media print {
          .print-slides > div:not(:last-child) {
            page-break-after: always;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
