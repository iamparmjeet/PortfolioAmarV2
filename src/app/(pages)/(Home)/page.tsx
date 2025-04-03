import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Film, Mic, Camera, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
     

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero background"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Capturing Stories Through <span className="text-primary">Visual Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional video editing and shooting services for shorts, podcasts, product shoots, and catalogues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="#work">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
                <p className="text-muted-foreground mt-2">A selection of my best video projects</p>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Project 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Short film thumbnail"
                    width={640}
                    height={360}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Summer Collection</h3>
                  <p className="text-sm text-muted-foreground">Product Shoot • Fashion</p>
                </div>
              </div>

              {/* Featured Project 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Podcast thumbnail"
                    width={640}
                    height={360}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Tech Talk Podcast</h3>
                  <p className="text-sm text-muted-foreground">Podcast • Technology</p>
                </div>
              </div>

              {/* Featured Project 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Short film thumbnail"
                    width={640}
                    height={360}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Urban Stories</h3>
                  <p className="text-sm text-muted-foreground">Short Film • Documentary</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
              <p className="text-muted-foreground mt-4">
                Professional video production services tailored to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Short Films</h3>
                <p className="text-muted-foreground">
                  Creative storytelling through short-form video content for social media and marketing.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Podcasts</h3>
                <p className="text-muted-foreground">
                  Professional podcast recording, editing, and production with high-quality audio and video.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Product Shoots</h3>
                <p className="text-muted-foreground">
                  Stunning product photography and videography that highlights your products' best features.
                </p>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Catalogues</h3>
                <p className="text-muted-foreground">
                  Comprehensive visual catalogues that showcase your entire product line with consistent styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=800&width=800" alt="Portrait photo" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-muted-foreground">
                  I'm a passionate video editor and shooter with over 5 years of experience in creating compelling
                  visual stories. My journey began with a love for storytelling and has evolved into a career dedicated
                  to helping brands and individuals communicate their message through powerful visuals.
                </p>
                <p className="text-muted-foreground">
                  My approach combines technical expertise with creative vision, ensuring that each project not only
                  meets but exceeds client expectations. I specialize in shorts, podcasts, product shoots, and
                  catalogues, bringing a unique perspective to each project.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="#contact">Let's Work Together</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
              <p className="text-muted-foreground mt-4">What my clients say about working with me</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director, FashionBrand</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The product shoot exceeded our expectations. The attention to detail and creative direction brought
                  our collection to life in ways we hadn't imagined."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Podcast Host, Tech Talks</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Working with such a professional made our podcast production seamless. The quality of both audio and
                  video has helped us grow our audience significantly."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Creative Director, DesignStudio</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The catalogue project was delivered on time and with exceptional quality. Our clients love browsing
                  through it, and it's become a valuable sales tool."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Ready to bring your vision to life? Let's discuss your project and create something amazing together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>contact@visualstory.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Film className="h-6 w-6" />
            <span>VisualStory</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VisualStory. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

