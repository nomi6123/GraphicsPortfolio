"use client";
import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Globe,
  CheckCircle,
  Palette,
  Code,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "October 28, 2025";

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-zinc-600">
              Policy
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information across our web
            development and graphic design services.
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

        {/* Quick Overview */}
        <section className="mb-12">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              Quick Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <Lock className="h-5 w-5 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Data Security</h3>
                <p className="text-sm text-zinc-400">
                  We use industry-standard encryption to protect your data
                </p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <Eye className="h-5 w-5 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">No Tracking</h3>
                <p className="text-sm text-zinc-400">
                  We don't use invasive tracking or sell your data
                </p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <Database className="h-5 w-5 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">
                  Minimal Collection
                </h3>
                <p className="text-sm text-zinc-400">
                  We only collect essential information for projects
                </p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-purple-500/20 transition-all">
                <Mail className="h-5 w-5 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">
                  Contact Control
                </h3>
                <p className="text-sm text-zinc-400">
                  You control how we communicate with you
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                As a web developer and graphic designer, we collect minimal
                information to provide you with the best experience and deliver
                quality projects. The information we may collect includes:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Contact Information:</strong>{" "}
                    When you reach out for web development or graphic design
                    services, we collect your name, email address, phone number,
                    and project details.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Project Files:</strong> For
                    graphic design projects, you may share design briefs, logos,
                    images, or brand materials necessary for project completion.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Usage Data:</strong> We
                    collect basic analytics data such as page views, browser
                    type, and device information to improve our portfolio
                    websites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Cookies:</strong> We use
                    essential cookies to enhance your browsing experience and
                    remember your preferences.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                The information we collect is used solely for the following
                purposes:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Project Delivery:</strong> To
                    complete web development and graphic design projects
                    according to your specifications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Communication:</strong> To
                    respond to your inquiries, provide project updates, and
                    discuss revisions or feedback.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Portfolio Display:</strong>{" "}
                    With your permission, we may showcase completed projects in
                    our portfolio galleries (web and graphic work).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Website Improvement:</strong>{" "}
                    To analyze user behavior and optimize the performance and
                    user experience of our portfolio websites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Legal Compliance:</strong> To
                    comply with applicable laws and regulations.
                  </span>
                </li>
              </ul>
              <p className="pt-2">
                We will never sell, rent, or share your personal information or
                project files with third parties for marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Data Storage and Security
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We take the security of your data and project files seriously
                and implement industry-standard measures to protect them:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Encryption:</strong> All data
                    transmitted through our websites is encrypted using SSL/TLS
                    protocols.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Secure Storage:</strong> Your
                    information and project files are stored on secure cloud
                    servers with restricted access and regular backups.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">File Protection:</strong>{" "}
                    Design files and project materials are stored in
                    password-protected folders and deleted after project
                    completion unless otherwise agreed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Data Retention:</strong> We
                    retain your information only for as long as necessary to
                    fulfill the purposes outlined in this policy or as required
                    by law.
                  </span>
                </li>
              </ul>
              <p className="pt-2">
                While we strive to protect your information, no method of
                transmission over the internet is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Third-Party Services
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our websites and services may use third-party tools to enhance
                functionality:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Email Services:</strong> We
                    use Email.js to process contact form submissions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Hosting:</strong> Our
                    portfolio websites are hosted on Vercel, which may collect
                    technical data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Cloud Storage:</strong>{" "}
                    Project files may be temporarily stored on services like
                    Google Drive or Dropbox for collaboration purposes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Analytics:</strong> We may
                    use analytics tools to understand how visitors interact with
                    our portfolio websites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Design Tools:</strong> We use
                    professional software like Adobe Creative Suite, Figma, and
                    Canva for graphic design projects.
                  </span>
                </li>
              </ul>
              <p className="pt-2">
                These third-party services have their own privacy policies, and
                we encourage you to review them.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Portfolio Usage and Client Work
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                As a creative professional, showcasing completed work is
                essential for our business:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Portfolio Display:</strong>{" "}
                    We may display completed web development and graphic design
                    projects on our portfolio websites with client permission.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">
                      Client Confidentiality:
                    </strong>{" "}
                    If you request confidentiality, we will not showcase your
                    project publicly or include identifying information.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Copyright:</strong> All
                    design rights are transferred to clients upon final payment,
                    unless otherwise specified in our contract.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Testimonials:</strong> We may
                    request feedback and testimonials for display on our
                    websites, but only with your explicit consent.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Your Rights
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                You have the following rights regarding your personal
                information and project files:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Access:</strong> You can
                    request access to the personal information and project files
                    we hold about you.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Correction:</strong> You can
                    request that we correct any inaccurate or incomplete
                    information.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Deletion:</strong> You can
                    request that we delete your personal information and project
                    files, subject to legal and contractual obligations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Portfolio Removal:</strong>{" "}
                    You can request that we remove your project from our public
                    portfolio at any time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Opt-Out:</strong> You can opt
                    out of receiving communications from us at any time.
                  </span>
                </li>
              </ul>
              <p className="pt-2">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Cookies Policy
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our websites use cookies to improve your experience. Cookies are
                small text files stored on your device. We use:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Essential Cookies:</strong>{" "}
                    Required for the websites to function properly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Preference Cookies:</strong>{" "}
                    Remember your settings and preferences across both portfolio
                    sites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong className="text-white">Analytics Cookies:</strong>{" "}
                    Help us understand how visitors use our websites and view
                    our work.
                  </span>
                </li>
              </ul>
              <p className="pt-2">
                You can control cookies through your browser settings. However,
                disabling cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Children's Privacy
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our websites and services are not intended for children under
                the age of 13. We do not knowingly collect personal information
                from children. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact
                us immediately so we can delete such information.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Changes to This Policy
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. When we make
                significant changes, we will notify you by:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    Updating the "Last Updated" date at the top of this page
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Posting a notice on our portfolio websites</span>
                </li>
              </ul>
              <p className="pt-2">
                We encourage you to review this policy periodically to stay
                informed about how we protect your information.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Contact Us
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your personal information and
                project files, please don't hesitate to contact us:
              </p>
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-zinc-500">Email</p>
                      <a
                        href="mailto:contact@muhammadnoman.com"
                        className="text-white hover:text-purple-400 break-all  transition-colors"
                      >
                        noman1137chaya4048@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-sm text-zinc-500 mb-3">
                      Portfolio Websites
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Code className="h-4 w-4 text-purple-400" />
                        <a
                          href="https://nomanportfolio.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transition-colors text-sm"
                        >
                          Web Development Portfolio
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Palette className="h-4 w-4 text-purple-400" />
                        <a
                          href="https://graphics-portfolio-lake.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transition-colors text-sm"
                        >
                          Graphic Design Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pt-4">
                We will respond to your inquiry as soon as possible, typically
                within 48 hours.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6">
            <p className="text-zinc-400 text-sm mb-3">
              By using our websites or services, you acknowledge that you have
              read and understood this Privacy Policy and agree to its terms.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-500">
                Protected by SSL encryption
              </span>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs text-zinc-500">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
