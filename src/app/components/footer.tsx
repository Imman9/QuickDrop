import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-accent bg-clip-text text-transparent mb-4">
              QuickDrop
            </h3>
            <p className="text-sm text-gray-500">
              Empowering Kenyan creators to monetize their digital products
              instantly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 QuickDrop. All rights reserved. Built for Kenyan creators.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-gray-500 hover:green-600 transition-colors"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
