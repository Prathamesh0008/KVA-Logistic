import {
  Target,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Clock,
  Truck,
  Heart,
  Calendar,
} from "lucide-react";
import TestimonialsSection from "../components/Stats";

function MissionDetail({ icon, color, title, subtitle, textColor }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="p-2 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${color}15` }}
      >
        <div className="h-4 w-4" style={{ color }}>
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-normal text-sm" style={{ color: textColor }}>
          {title}
        </h4>
        <p className="text-l" style={{ color: textColor, opacity: 0.6 }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  // Updated color palette – orange is #EB9003, brown becomes transparent + shiny
  const colors = {
    darkBrown: "#3d1202",           // Base for transparent brown
    goldenYellow: "#f8b936",
    orange: "#EB9003",              // New orange as requested
    darkOrange: "#c25500",
    lightTan: "#c29f85",
  };

  // Transparent brown with shiny shadow effect
  const brownTransparent = "rgba(61, 18, 2, 0.92)";
  const brownShinyShadow = "0 4px 20px rgba(197,85,0,0.3)";

  // Shiny orange gradient (glossy metallic look)
  const shinyOrangeGradient = `radial-gradient(circle at 30% 20%, rgba(255,255,240,0.35), rgba(255,200,100,0.1) 80%), linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`;

  // Highlight text style (gold to orange gradient)
  const highlightText = {
    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Timeline data
  const timeline = [
    { year: "1998", event: "KVA Logistics founded in Lagos, Nigeria" },
    { year: "2005", event: "Expanded to West African markets" },
    { year: "2012", event: "Launched pan-African air freight network" },
    { year: "2018", event: "Opened European hub in Rotterdam" },
    { year: "2023", event: "Reached 150+ countries served" },
  ];

  // Core values
  const coreValues = [
    {
      icon: <Heart className="h-6 w-6" style={{ color: colors.goldenYellow }} />,
      title: "Customer First",
      desc: "Every decision starts with our clients' needs.",
    },
    {
      icon: <Shield className="h-6 w-6" style={{ color: colors.orange }} />,
      title: "Integrity",
      desc: "Honest, transparent operations at all times.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" style={{ color: colors.darkBrown }} />,
      title: "Innovation",
      desc: "Constantly improving through technology.",
    },
    {
      icon: <Globe className="h-6 w-6" style={{ color: colors.darkOrange }} />,
      title: "Sustainability",
      desc: "Reducing carbon footprint every year.",
    },
  ];

  // Leadership team (placeholder images)
  const team = [
    { name: "Adaobi Okonkwo", role: "CEO", bg: colors.goldenYellow },
    { name: "Chidi Eze", role: "COO", bg: colors.orange },
    { name: "Fatima Yusuf", role: "CFO", bg: colors.darkOrange },
    { name: "Olusegun Adebayo", role: "CTO", bg: colors.darkBrown },
  ];

  return (
    <div
      className="flex flex-col"
      style={{ background: "linear-gradient(135deg, #fef8ed, #fffaf0)" }}
    >
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                About
              </span>
              <span className="block mt-1" style={highlightText}>
                KVA Logistics
              </span>
            </h1>
            <p
              className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.darkBrown, opacity: 0.9 }}
            >
              Leading the logistics industry with innovation, reliability, and a
              customer-first approach for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                value: "25+",
                label: "Years Exp",
                gradient: [colors.goldenYellow, colors.orange],
              },
              {
                value: "150+",
                label: "Countries",
                gradient: [colors.orange, colors.darkOrange],
              },
              {
                value: "99.8%",
                label: "On-Time",
                gradient: [colors.goldenYellow, colors.orange],
              },
              {
                value: "500M+",
                label: "Shipments",
                gradient: [colors.orange, colors.darkOrange],
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/70 backdrop-blur-sm text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${colors[i % 2 === 0 ? "goldenYellow" : "orange"]}20`,
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-light"
                  style={{
                    background: `linear-gradient(90deg, ${stat.gradient[0]}, ${stat.gradient[1]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-l font-light uppercase tracking-wider mt-1"
                  style={{ color: colors.darkBrown, opacity: 0.7 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ border: `1px solid ${colors.lightTan}40` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                    boxShadow: brownShinyShadow,
                  }}
                >
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-semibold" style={{ color: colors.darkBrown }}>
                  Our Mission
                </h2>
              </div>
              <p
                className="mb-7 text-base md:text-lg font-medium leading-relaxed"
                style={{ color: colors.darkBrown, opacity: 0.9 }}
              >
                To revolutionize global logistics through innovative technology and
                sustainable practices, making world-class shipping accessible to
                businesses of all sizes.
              </p>
              <div className="space-y-5">
                <MissionDetail
                  icon={<Target />}
                  color={colors.goldenYellow}
                  title="Precision & Accuracy"
                  subtitle="99.8% on-time delivery"
                  textColor={colors.darkBrown}
                />
                <MissionDetail
                  icon={<Shield />}
                  color={colors.orange}
                  title="Security & Trust"
                  subtitle="$500M cargo insurance"
                  textColor={colors.darkBrown}
                />
                <MissionDetail
                  icon={<Clock />}
                  color={colors.darkBrown}
                  title="24/7 Reliability"
                  subtitle="Round-the-clock support"
                  textColor={colors.darkBrown}
                />
              </div>
            </div>

            {/* Vision */}
            <div
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ border: `1px solid ${colors.lightTan}40` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: shinyOrangeGradient,
                    boxShadow: brownShinyShadow,
                  }}
                >
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-semibold" style={{ color: colors.darkBrown }}>
                  Our Vision
                </h2>
              </div>
              <p
                className="mb-7 text-base md:text-lg font-medium leading-relaxed"
                style={{ color: colors.darkBrown, opacity: 0.9 }}
              >
                To create a seamlessly connected global supply chain network that drives
                economic growth while minimizing environmental impact.
              </p>
              <div className="space-y-5">
                <MissionDetail
                  icon={<TrendingUp />}
                  color={colors.orange}
                  title="Sustainable Growth"
                  subtitle="Carbon-neutral options"
                  textColor={colors.darkBrown}
                />
                <MissionDetail
                  icon={<Users />}
                  color={colors.goldenYellow}
                  title="Global Community"
                  subtitle="150+ countries served"
                  textColor={colors.darkBrown}
                />
                <MissionDetail
                  icon={<Truck />}
                  color={colors.darkOrange}
                  title="Innovation Driven"
                  subtitle="Advancing technology"
                  textColor={colors.darkBrown}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History (Timeline) */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-10"
            style={{ color: colors.darkBrown }}
          >
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                    boxShadow: brownShinyShadow,
                  }}
                >
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <div
                  className="flex-1 p-5 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm"
                  style={{ borderLeft: `4px solid ${colors.orange}` }}
                >
                  <h3 className="text-xl font-light mb-1" style={{ color: colors.darkBrown }}>
                    {item.year}
                  </h3>
                  <p
                    className="text-sm font-light"
                    style={{ color: colors.darkBrown, opacity: 0.8 }}
                  >
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-10"
            style={{ color: colors.darkBrown }}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ border: `1px solid ${colors.lightTan}20` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-light mb-2" style={{ color: colors.darkBrown }}>
                  {value.title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: colors.darkBrown, opacity: 0.7 }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-10"
            style={{ color: colors.darkBrown }}
          >
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ border: `1px solid ${colors.lightTan}20` }}
              >
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-light shadow-md"
                  style={{ background: member.bg, boxShadow: brownShinyShadow }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-light mb-1" style={{ color: colors.darkBrown }}>
                  {member.name}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: colors.darkBrown, opacity: 0.7 }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
