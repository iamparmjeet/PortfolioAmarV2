import ServiceCard from "./service.card";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My
            {" "}
            <span className="text-gold-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive video production services tailored to elevate your brand's visual presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="video-camera"
            title="Video Production"
            description="Professional video shooting for commercials, interviews, and promotional content."
          />
          <ServiceCard
            icon="edit"
            title="Video Editing"
            description="Cinematic editing, color grading, and post-production for all types of video content."
          />
          <ServiceCard
            icon="podcast"
            title="Podcast Production"
            description="End-to-end podcast recording, editing and publishing services."
          />
          <ServiceCard
            icon="instagram"
            title="Social Media Content"
            description="Short-form video content optimized for Instagram, TikTok, and other platforms."
          />
          <ServiceCard
            icon="camera"
            title="Product Photography"
            description="High-quality product catalog shoots with professional lighting and styling."
          />
          <ServiceCard
            icon="lightbulb"
            title="Concept Planning"
            description="Creative direction and storyboarding to bring your vision to life."
          />
        </div>
      </div>
    </section>
  );
}
