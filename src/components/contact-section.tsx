import { IconPlayCard } from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's create
              {" "}
              <span className="text-gold-400">together</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to bring your vision to life? Get in touch to discuss your project needs.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                </textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-medium rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image
              src="/images/contact-image.jpg"
              alt="Video Production Setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center">
                <IconPlayCard className="w-8 h-8 text-black" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
