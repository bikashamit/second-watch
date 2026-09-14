import Image from 'next/image';
import Link from 'next/link';
import AuthButton from "./components/AuthButton";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      
      {/* 1. COMPANY SECTION (First thing they see) */}
      <section className="h-screen flex flex-col items-center justify-center px-4 text-center border-b border-slate-800">
        <div className="mb-6">
          {/* Replace with your Company Logo */}
          <Image src="/company-logo.png" alt="IntrovertBlasting Corporation" width={150} height={150} className="mx-auto" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          IntrovertBlasting <span className="text-orange-500">Corporation</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-8">
          Innovating security and repurposing technology to give your old devices a second life.
        </p>
        <div className="animate-bounce mt-10">
          <p className="text-sm text-slate-500 mb-2">Scroll to explore our product</p>
          <svg className="w-6 h-6 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* 2. PRODUCT SECTION (Scroll down) */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/app-logo.png" alt="Second Watch App" width={100} height={100} className="rounded-2xl shadow-lg border border-slate-700" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">Second Watch App</h2>
          <p className="text-lg text-slate-400 mb-8">
            Turn your old, dusty Android phone into a high-powered CCTV security camera. 
            Our specialized dual-app system lets you stream live video, switch between front and back cameras, 
            and zoom in remotely from your new phone.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Old Phone App</h3>
              <p className="text-slate-300">Optimized for Android 10 and below. Uses minimal battery and resources to keep the camera running 24/7.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">New Phone App</h3>
              <p className="text-slate-300">Your command center. Live view, remote camera switching, and pinch-to-zoom functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOWNLOAD & INSTALLATION SECTION (Scroll down) */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Download & Setup Guide</h2>
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            {[
              { step: 1, title: "Download the Apps", desc: "Get the 'Second Watch (Old Phone)' on your old device and 'Second Watch (Viewer)' on your new phone." },
              { step: 2, title: "Position the Old Phone", desc: "Place your old phone where you need surveillance. Make sure it is plugged into a power source." },
              { step: 3, title: "Open the Old Phone App", desc: "Launch the app on the old phone. A unique QR code will appear on the screen." },
              { step: 4, title: "Scan and Connect", desc: "Open the Viewer app on your new phone, scan the QR code, and you are instantly connected." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-slate-900 p-5 rounded-lg border border-slate-800">
                <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">{item.step}</span>
                <div>
                  <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVIEWS & Q/A BOXES (Scroll down) */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Community & Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Reviews Box */}
            <Link href="/reviews" className="group">
              <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-orange-500 transition duration-300 h-full flex flex-col items-center text-center">
                <div className="text-5xl text-yellow-400 mb-4">★★★★★</div>
                <h3 className="text-2xl font-bold text-white mb-2">User Reviews</h3>
                <p className="text-slate-400 mb-6">See what others are saying and share your own experience.</p>
                <span className="text-orange-500 font-semibold group-hover:underline">Go to Reviews &rarr;</span>
              </div>
            </Link>

            {/* Q/A Forum Box */}
            <Link href="/forum" className="group">
              <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-orange-500 transition duration-300 h-full flex flex-col items-center text-center">
                <div className="text-5xl text-blue-400 mb-4">💬</div>
                <h3 className="text-2xl font-bold text-white mb-2">Q/A Forum</h3>
                <p className="text-slate-400 mb-6">Need help? Ask questions and get answers from the community.</p>
                <span className="text-orange-500 font-semibold group-hover:underline">Visit Forum &rarr;</span>
              </div>
            </Link>

          </div>
        </div>
      </section>
      <footer className="py-8 text-center text-slate-600 bg-slate-950">
  <div className="flex justify-center mb-6">
    <AuthButton />
  </div>
  <p>&copy; 2024 IntrovertBlasting Corporation. All rights reserved.</p>
</footer>
      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 bg-slate-950">
        <p>&copy; 2024 IntrovertBlasting Corporation. All rights reserved.</p>
      </footer>
    </main>
  );
}