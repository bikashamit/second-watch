import Image from 'next/image';
import Link from 'next/link';
import AuthButton from "./components/AuthButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      
      {/* 1. COMPANY SECTION (Hero) */}
      <section className="min-h-screen flex flex-col items-center justify-center border-b border-slate-800 overflow-hidden">
        <div className="w-full mb-8">
          <Image 
            src="/company-logo.png" 
            alt="IntrovertBlasting Corporation" 
            width={1920} 
            height={400} 
            className="w-full h-auto max-h-[300px] object-contain" 
            priority
          />
        </div>
        <div className="px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            IntrovertBlasting <span className="text-orange-500">Corporation</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Innovating security and repurposing technology to give your old devices a second life.
          </p>
          <div className="animate-bounce mt-10">
            <p className="text-sm text-slate-500 mb-2">Scroll to explore our product</p>
            <svg className="w-6 h-6 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SECTION */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/app-logo.png" 
              alt="Second Watch App" 
              width={100} 
              height={100} 
              className="rounded-2xl shadow-lg border border-slate-700" 
            />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">Second Watch App</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
            Turn your Android phone (Android 11 or newer) into a high-powered DIY CCTV security camera. 
            Our specialized dual-app system lets you stream live video, switch between front and back cameras, 
            and zoom in remotely from your modern phone. No monthly fees, no subscriptions, and no complex setup.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">📷 Old Phone App (Camera)</h3>
              <p className="text-slate-300 mb-3">
                A lightweight APK built specifically for older hardware running Android 11 or newer. It turns your old phone 
                into a dedicated security camera with minimal battery and resource usage.
              </p>
              <p className="text-sm text-slate-400">
                <strong className="text-orange-400">APK:</strong> <code className="bg-slate-900 px-2 py-1 rounded">app-armeabi-v7a-release.apk</code>
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">📱 New Phone App (Viewer)</h3>
              <p className="text-slate-300 mb-3">
                Your command center. Watch the live feed, switch between front and back cameras, and use pinch-to-zoom 
                on both cameras remotely.
              </p>
              <p className="text-sm text-slate-400">
                <strong className="text-orange-400">APK:</strong> <code className="bg-slate-900 px-2 py-1 rounded">app-arm64-v8a-release.apk</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-16 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-white">Why Choose Second Watch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-lg font-bold text-white mb-2">100% Free</h3>
              <p className="text-slate-400 text-sm">No hidden fees, no subscriptions. Use your existing hardware.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-white mb-2">Camera Switching</h3>
              <p className="text-slate-400 text-sm">Switch between front and back cameras instantly from the viewer app.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Full Zoom Control</h3>
              <p className="text-slate-400 text-sm">Zoom in and out on both front and back cameras remotely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD & INSTALLATION SECTION */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Download & Setup Guide</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Since Second Watch is distributed outside the Play Store, follow these steps carefully to install and set up your DIY CCTV.
          </p>

          {/* Download Button */}
          <div className="text-center mb-12">
            <a 
              href="https://drive.google.com/drive/folders/1LQbgKgcKAisbxM6ZnujiM73VRpqP6vVx?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>
              Download APKs from Google Drive
            </a>
            <p className="text-xs text-slate-500 mt-2">
              (Link will open the Google Drive folder containing both APKs)
            </p>
          </div>
          
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            {[
              { 
                step: 1, 
                title: "Download the Correct APKs", 
                desc: "Download 'app-armeabi-v7a-release.apk' for your old phone (Camera) and 'app-arm64-v8a-release.apk' for your new phone (Viewer)." 
              },
              { 
                step: 2, 
                title: "Allow Installation from Unknown Sources", 
                desc: "On both phones, go to Settings → Security → Install unknown apps, and allow your file manager or browser to install APKs." 
              },
              { 
                step: 3, 
                title: "Install the Apps", 
                desc: "Open the downloaded APK files. If prompted by Play Protect, select 'Install anyway' (don't scan). Complete the installation on both phones." 
              },
              { 
                step: 4, 
                title: "Set Up Your Camera (Old Phone)", 
                desc: "Open the app on your old phone and select 'Use as Camera'. The app will display your phone's Wi-Fi IP address." 
              },
              { 
                step: 5, 
                title: "Connect the Viewer (New Phone)", 
                desc: "Open the app on your new phone and select 'Use as Viewer'. Enter the IP address shown on the old phone and tap 'Connect'." 
              },
              { 
                step: 6, 
                title: "Watch the Tutorial", 
                desc: "For a complete visual walkthrough, watch our YouTube Short below." 
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-slate-800 p-5 rounded-lg border border-slate-700">
                <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Embedded Video */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-6">📺 Watch the Full Tutorial</h3>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/hfCa5c7y77Q"
                title="Second Watch Setup Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              Having trouble viewing? {" "}
              <a 
                href="https://www.youtube.com/shorts/hfCa5c7y77Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Open on YouTube
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 5. REMOTE ACCESS & DISCLAIMER SECTION */}
      <section className="py-16 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">🌐 Access your camera from a different network</h2>
            <p className="text-slate-300 mb-4">
              Second Watch works perfectly on the same Wi-Fi network. If you want to view your camera from a different network (e.g., outside your home), you can use <strong>Tailscale</strong>.
            </p>
            <ol className="list-decimal list-inside text-slate-400 space-y-2">
              <li>Install <strong>Tailscale</strong> from the Play Store on both phones.</li>
              <li>Log in to the <strong>same Tailscale account</strong> on both devices.</li>
              <li>Open Tailscale on your old phone and note its assigned IP address.</li>
              <li>Enter that IP address in the Viewer app on your new phone.</li>
            </ol>
          </div>

          <div className="bg-red-900/20 border border-red-800/50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
              ⚠️ Disclaimer
            </h3>
            <p className="text-slate-300 text-sm">
              Second Watch is a legitimate security and surveillance tool. It is <strong>not</strong> a hacking application. 
              Both devices must have the app installed, and the user must explicitly grant camera permissions on the old phone. 
              Remote access requires both devices to be logged into the same Tailscale account. Use this software responsibly and only on devices you own.
            </p>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS & Q/A BOXES */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Community & Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Link href="/reviews" className="group">
              <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-orange-500 transition duration-300 h-full flex flex-col items-center text-center">
                <div className="text-5xl text-yellow-400 mb-4">★★★★★</div>
                <h3 className="text-2xl font-bold text-white mb-2">User Reviews</h3>
                <p className="text-slate-400 mb-6">
                  See what others are saying and share your own experience.
                </p>
                <span className="text-orange-500 font-semibold group-hover:underline">
                  Go to Reviews &rarr;
                </span>
              </div>
            </Link>

            <Link href="/forum" className="group">
              <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-orange-500 transition duration-300 h-full flex flex-col items-center text-center">
                <div className="text-5xl text-blue-400 mb-4">💬</div>
                <h3 className="text-2xl font-bold text-white mb-2">Q/A Forum</h3>
                <p className="text-slate-400 mb-6">
                  Need help? Ask questions and get answers from the community.
                </p>
                <span className="text-orange-500 font-semibold group-hover:underline">
                  Visit Forum &rarr;
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 bg-slate-950 border-t border-slate-800">
        <div className="flex justify-center mb-6">
          <AuthButton />
        </div>
        <p>&copy; 2024 IntrovertBlasting Corporation. All rights reserved.</p>
      </footer>
    </main>
  );
}