import { Link } from "react-router-dom";
import SectionTitle from "../components/section-title";
import { features } from "../data/features";
import { 
    ArrowRightIcon, 
    CheckCircle2Icon, 
    ShieldCheckIcon,
    ClipboardCheckIcon
} from "lucide-react";

export default function ServicesPage() {
    const cardClipPath = "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)";

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-teal-50 via-blue-50 to-slate-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
                            <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-semibold text-teal-700">Our Services</span>
                        </div>
                        <h1 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6 font-urbanist">
                            Comprehensive Validation Services
                        </h1>
                        {/* <p className="text-xl text-gray-600 leading-relaxed">
                            From initial risk assessment to retirement, we support every phase of your system's 
                            lifecycle with precision and transparency.
                        </p> */}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-[#f5f5f6] border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((service, index) => (
                            <div
                                key={index}
                                className="rounded-[34px] p-[1.9px] bg-linear-to-br from-cyan-500/80 to-violet-500/70"
                                style={{ clipPath: cardClipPath }}
                            >
                                <article
                                    className="h-full min-h-[240px] bg-[#f5f5f6] rounded-[32px] px-5 py-5 flex flex-col"
                                    style={{ clipPath: cardClipPath }}
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 font-urbanist mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center">
                                        <div className={`${service.iconBg} w-11 h-11 rounded-lg flex items-center justify-center shadow-sm`}>
                                            <service.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose TruQual */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        icon={ClipboardCheckIcon}
                        title="Why Choose TruQual?"
                        subtitle="We combine deep regulatory knowledge with modern technological approaches to deliver validation services that are both rigorous and efficient."
                    />

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory Integrity</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Our frameworks are strictly aligned with GAMP 5, 21 CFR Part 11, and Annex 11, 
                                ensuring you are always audit-ready with complete traceability and documentation integrity.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Streamlined Documentation</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Move away from paper-heavy processes. We implement digital validation strategies 
                                that reduce cycle times by 30-40% while maintaining full regulatory compliance.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Support</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Our team consists of senior validation engineers and QA specialists with decades 
                                of combined life sciences experience across pharmaceutical and biotech sectors.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Track Record</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                With 500+ successful validation projects and a 98% first-time audit pass rate, 
                                we deliver results that matter to your business and regulatory compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-linear-to-br from-teal-500 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6 font-urbanist">
                                Ready to Elevate Your Compliance Strategy?
                            </h2>
                            <p className="text-xl mb-8 text-teal-50">
                                Schedule a discovery call with our experts to discuss your specific validation needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    Get Started Today
                                    <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
