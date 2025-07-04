import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Capsaicin Relief</h1>
          <p className="text-xl text-gray-600 mb-8">Natural Pain Relief Powered by Science</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about providing natural, effective pain relief solutions that help people live more
            comfortable, active lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Capsaicin Relief was born from a simple belief: natural pain relief shouldn't be complicated or
                  compromise on effectiveness. Our journey began when our founder experienced chronic joint pain and
                  discovered the remarkable healing properties of capsaicin.
                </p>
                <p>
                  Partnering with Eden Formulas, a trusted South African pharmaceutical company, we developed a premium
                  capsaicin cream that combines traditional natural healing with modern scientific formulation.
                </p>
                <p>
                  Today, we're proud to offer a locally-made solution that helps thousands of South Africans manage
                  their pain naturally and effectively.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Care</h3>
                <p className="text-gray-600">
                  We genuinely care about your wellbeing and are committed to providing products that make a real
                  difference.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-600">
                  Every tube is manufactured to the highest standards using premium ingredients and rigorous quality
                  control.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Natural</h3>
                <p className="text-gray-600">
                  We believe in harnessing the power of nature to provide effective relief without harsh chemicals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  Proudly South African, we're committed to supporting our local community and economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <div className="bg-red-50 p-8 rounded-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "To provide natural, effective pain relief solutions that empower people to live more active, comfortable
              lives while supporting local innovation and sustainable practices."
            </p>
            <p className="text-gray-600">
              We're not just selling a product – we're providing a pathway to better quality of life through natural
              healing.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-red-600 font-semibold mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Passionate about natural healing with 15 years in pharmaceutical development.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-red-600 font-semibold mb-2">Head of Quality</p>
                <p className="text-gray-600 text-sm">
                  Ensures every product meets our rigorous quality and safety standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Lisa Patel</h3>
                <p className="text-red-600 font-semibold mb-2">Customer Care</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every customer has an exceptional experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference that natural, quality pain relief can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
              <Link href="/shop">Try Our Product</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
