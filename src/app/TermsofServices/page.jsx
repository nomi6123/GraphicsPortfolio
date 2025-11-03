"use client"
import React from 'react';
import { FileText, Code, Palette, CheckCircle, XCircle, AlertCircle, Mail, Globe } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = "October 28, 2025";

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-zinc-600">Service</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our web development and graphic design services.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <span className="bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium px-4 py-2 text-sm rounded-full">
              Last Updated: {lastUpdated}
            </span>
            <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
              <Code className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Web Development</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
              <Palette className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Graphic Design</span>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              Quick Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <CheckCircle className="h-5 w-5 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">What We Provide</h3>
                <p className="text-xs text-zinc-400">Quality web & design services</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <AlertCircle className="h-5 w-5 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">Your Responsibilities</h3>
                <p className="text-xs text-zinc-400">Timely feedback & payments</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <XCircle className="h-5 w-5 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">Prohibited Uses</h3>
                <p className="text-xs text-zinc-400">Illegal or harmful content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>
                By accessing our websites or engaging our web development and graphic design services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Offered</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>We provide the following professional services:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-4 w-4 text-purple-400" />
                    <h3 className="text-white font-semibold text-sm">Web Development</h3>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Website design & development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Responsive web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>API integration & deployment</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="h-4 w-4 text-purple-400" />
                    <h3 className="text-white font-semibold text-sm">Graphic Design</h3>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Logo & brand identity design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Marketing materials & posters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Business cards & print design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">3. Project Process & Timeline</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Consultation:</strong> Initial discussion to understand project requirements and scope.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Timeline:</strong> Project timelines are agreed upon before work begins and may vary based on complexity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Revisions:</strong> Standard packages include a specified number of revisions. Additional revisions may incur extra charges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Delays:</strong> Timelines may be extended if client feedback or materials are delayed beyond agreed timeframes.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Deposit:</strong> A 50% deposit is required before work begins on any project.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Final Payment:</strong> Remaining balance is due upon project completion and before final delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Late Payments:</strong> Projects will be put on hold if payments are not received within agreed timeframes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Refunds:</strong> Deposits are non-refundable once work has commenced. Refund policies are discussed on a case-by-case basis.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property & Copyright</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Ownership:</strong> Upon full payment, all design rights and source files are transferred to the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Portfolio Rights:</strong> We reserve the right to showcase completed projects in our portfolio unless confidentiality is requested.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Third-Party Assets:</strong> Any stock images, fonts, or resources used require proper licensing by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Credit:</strong> We may request design credit on completed projects (e.g., "Designed by Muhammad Noman").</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">6. Client Responsibilities</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>Clients are responsible for:</p>
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Providing accurate project requirements and necessary materials (logos, content, images)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Timely feedback and approval at each project milestone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Ensuring content provided does not violate copyright or trademark laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Making payments according to agreed terms</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Uses</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>You may NOT use our services for:</p>
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>Illegal activities or content that violates any laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>Hate speech, discrimination, or harmful content</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>Infringing on intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>Spreading misinformation or scamming purposes</span>
                </li>
              </ul>
              <p className="pt-2">We reserve the right to refuse or terminate service for any project that violates these terms.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">8. Warranty & Liability</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Quality Guarantee:</strong> We strive to deliver high-quality work that meets industry standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Bug Fixes:</strong> Minor bug fixes for web projects are provided free for 30 days after delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Limitation:</strong> We are not liable for any indirect damages or losses arising from the use of our services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong className="text-white">Third-Party Services:</strong> We are not responsible for issues arising from third-party services, hosting, or plugins.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>
                Either party may terminate a project with written notice. If the client terminates after work has begun, payment for work completed up to that point is required. We may terminate services if payment terms are not met or if these terms are violated.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm">
              <p>
                For questions about these Terms of Service or to discuss a project, please contact us:
              </p>
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-zinc-500">Email</p>
                      <a href="mailto:contact@muhammadnoman.com" className="text-white break-all  hover:text-purple-400 transition-colors text-sm">
                        noman1137chaya4048@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-xs text-zinc-500 mb-3">Portfolio Websites</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Code className="h-4 w-4 text-purple-400" />
                        <a href="https://nomanportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white break-all hover:text-purple-400 transition-colors text-xs">
                          nomanportfolio.vercel.app
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Palette className="h-4 w-4 text-purple-400" />
                        <a href="https://graphics-portfolio-lake.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors text-xs">
                          graphics-portfolio-lake.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6">
            <p className="text-zinc-400 text-sm mb-3">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800">
              <a href="PrivacyPolicy" className="text-xs text-zinc-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs text-zinc-500">Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}