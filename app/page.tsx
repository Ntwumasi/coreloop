"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Menu,
  X,
  ChevronRight,
  Cpu,
  Code,
  ShoppingCart,
  Store,
  Briefcase,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    {
      icon: Cpu,
      title: "Hardware Solutions",
      description: "Custom-built PCs, enterprise servers, and cutting-edge components for all your computing needs.",
      image: "/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Bespoke software solutions, web applications, and enterprise systems tailored to your business.",
      image: "/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg"
    },
    {
      icon: ShoppingCart,
      title: "Wholesale Technology",
      description: "Bulk technology products and components at competitive prices for businesses and resellers.",
      image: "/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg"
    },
    {
      icon: Store,
      title: "Retail Solutions",
      description: "Consumer electronics, accessories, and tech products with expert guidance and support.",
      image: "/ben-iwara-GN_CTVe5TsI-unsplash.jpg"
    },
    {
      icon: Briefcase,
      title: "IT Consulting",
      description: "Strategic technology consulting, infrastructure planning, and digital transformation services.",
      image: "/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg"
    },
    {
      icon: Users,
      title: "Managed Services",
      description: "24/7 IT support, system maintenance, and managed infrastructure for peace of mind.",
      image: "/ben-iwara-GN_CTVe5TsI-unsplash.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/coreloop.jpg"
                alt="CoreLoop"
                width={200}
                height={56}
                className="h-14 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Technology Solutions for the{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Modern World
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From hardware to software, wholesale to retail, we deliver comprehensive
                  technology solutions that power your business forward.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#services">
                    Explore Services
                    <ChevronRight className="ml-2" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] relative">
                <Image
                  src="/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg"
                  alt="Developer working on code"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              {/* Mobile: Simple stacked layout */}
              <div className="md:hidden space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg"
                    alt="Custom PC hardware"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/ben-iwara-GN_CTVe5TsI-unsplash.jpg"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg"
                      alt="Professional in server room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-4 md:h-[500px] lg:h-[600px]">
                <div className="relative">
                  <Image
                    src="/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg"
                    alt="Custom PC hardware"
                    fill
                    className="object-cover rounded-l-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative h-[48%]">
                    <Image
                      src="/ben-iwara-GN_CTVe5TsI-unsplash.jpg"
                      alt="Team collaboration"
                      fill
                      className="object-cover rounded-tr-2xl"
                    />
                  </div>
                  <div className="relative h-[48%]">
                    <Image
                      src="/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg"
                      alt="Professional in server room"
                      fill
                      className="object-cover rounded-br-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose CoreLoop?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CoreLoop Technologies is your one-stop destination for all technology needs.
                With over a decade of experience, we&apos;ve built a reputation for excellence
                in hardware, software, and IT services.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Expert Team",
                    description: "Our certified professionals bring years of industry experience to every project."
                  },
                  {
                    title: "Quality Products",
                    description: "We partner with leading brands to deliver only the best hardware and software."
                  },
                  {
                    title: "Customer Focus",
                    description: "Your success is our priority. We provide personalized solutions and ongoing support."
                  },
                  {
                    title: "Competitive Pricing",
                    description: "Fair pricing on wholesale and retail products without compromising quality."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your technology infrastructure? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-orange-500" size={32} />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-base">
                  info@coreloop.tech<br />
                  sales@coreloop.tech
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-orange-500" size={32} />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription className="text-base">
                  +1 (555) 123-4567<br />
                  Mon-Fri 9AM-6PM EST
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-orange-500" size={32} />
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription className="text-base">
                  123 Tech Boulevard<br />
                  Innovation District, CA 94025
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:info@coreloop.tech">
                Send Us a Message
                <Mail className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CoreLoop</h3>
              <p className="text-gray-400">
                Your trusted partner in technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Hardware</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Software</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Wholesale</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Retail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CoreLoop Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
