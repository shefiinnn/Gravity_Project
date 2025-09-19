
import { X, Linkedin, Youtube } from 'lucide-react'; 
export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-400">
      <div className="container mx-auto px-4 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white tracking-widest">GRAVITY TEAM</h3>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img src="/logo-light.png" alt="Gravity Team Logo" className="h-10" />
            <div className="flex gap-4">
              <a href="#" aria-label="X (formerly Twitter)" className="hover:text-white transition-colors">
                <X size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Use & Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Change Cookie Preferences</a>
          </div>
          <p>©2025 Gravity Team. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}