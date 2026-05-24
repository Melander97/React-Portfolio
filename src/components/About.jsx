export default function About() {
  const highlights = [
    {
      emoji: "💼",
      title: "1+ year",
      subtitle: "Professional dev experience",
    },
    {
      emoji: "🚀",
      title: "Shipped projects",
      subtitle: "Solo, team, and agency work",
    },
    {
      emoji: "🤖",
      title: "Side projects",
      subtitle: "Trading bots & automation",
    },
  ];

  return (
    <div
      id="about"
      className="scroll-mt-20 bg-gray-900 py-8 md:py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          About <span className="text-yellow-300">Me</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-300 mb-10 rounded-full" />

        <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
          <p>
            I'm a full-stack developer from Sweden, with a soft spot for the
            frontend side of the craft.
          </p>

          <p>
            I studied full-stack development and spent a year working
            professionally as a developer, where most of my real-world work was
            on the frontend — building client sites in React, Next.js, and
            headless WordPress. I've contributed to bigger team projects like{" "}
            <a
              href="https://www.hebafast.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 underline underline-offset-2 hover:underline"
            >
              Heba
            </a>
            , and shipped solo work like Urban Advisors end-to-end. Somewhere
            along the way I also won the company-wide CSS quiz as a trainee,
            which I'm still proud of.
          </p>

          <p>
            Lately I've taken a step sideways from web dev to build things
            outside the browser: trading bots, a CS betting bot, and a handful
            of backtesting scripts using TypeScript, Node, and the HLTV API.
            They're live, they work, and they've been a great way to sharpen up
            on async logic, APIs, and just thinking like a programmer outside
            the comfort zone of UI work.
          </p>

          <p>
            Outside of code, I've been training at the gym for 9 years, play
            some golf, watch hockey, and spend time with friends.{" "}
            <span className="italic text-gray-300">
              Och ja, jag pratar svenska.
            </span>{" "}
            Consistency is kind of my thing.
          </p>

          <p>
            Now I'm getting back into web dev and looking for my next role —
            ideally frontend or full-stack, in Sweden, remote, or hybrid. Open
            to relocation for the right opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center hover:border-yellow-300 transition-colors"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="text-white font-semibold text-lg">
                {item.title}
              </div>
              <div className="text-gray-400 text-sm mt-1">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
