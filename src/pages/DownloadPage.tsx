
import {
  Apple,
  AppWindow as Windows,
  Link as Linux,
  Code,
  Terminal,
  Search,
  Zap,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  return (
    <div className="bg-[#0D1117] text-white py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-36">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Download className="h-12 w-12 mx-auto text-[#4B6FED] mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#4B6FED] via-white to-[#4B6FED] bg-clip-text text-transparent">
            Download AI Native Studio
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Your powerful AI-native development environment—built for scale, speed, and simplicity.
          </p>
        </motion.div>

        {/* Platform Downloads */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Apple,
              name: 'macOS',
              subtitle: 'Universal (M1 & Intel)',
              button: 'Download for Mac',
              available: true,
              disabled: false,
            },
            {
              icon: Windows,
              name: 'Windows',
              subtitle: 'Windows 10/11 64-bit',
              button: 'Download for Windows',
              available: true,
              disabled: false,
            },
            {
              icon: Linux,
              name: 'Linux',
              subtitle: 'Coming Soon',
              button: 'Join Waitlist',
              available: false,
              disabled: true,
            },
          ].map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className={`rounded-2xl transition-transform duration-300 transform hover:scale-[1.03] 
                ${platform.available
                    ? 'bg-[#1C2128]/80 border border-white/10 hover:shadow-[0_0_30px_#4B6FED33]'
                    : 'bg-[#1C2128]/40 border border-white/5 cursor-not-allowed'}
              `}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <platform.icon className="h-6 w-6 text-[#4B6FED]" />
                    <CardTitle className={`text-lg font-semibold ${!platform.available && 'text-gray-500'}`}>
                      {platform.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm">{platform.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button
                    size="lg"
                    className="w-full"
                    variant={platform.available ? 'default' : 'outline'}
                    disabled={platform.disabled}
                  >
                    {platform.button}
                  </Button>
                  <p className="text-sm text-center text-gray-400 mt-3">
                    {platform.available ? 'Version 1.0.0 (Latest)' : 'In development'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* Plugin Availability */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Plugin Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1C2128]/90 border border-white/10 rounded-2xl hover:shadow-[0_0_25px_#4B6FED33] transition-all">
              <CardHeader>
                <CardTitle className="text-white">VS Code Extension</CardTitle>
                <CardDescription className="text-gray-400">Available now</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className="w-full bg-[#4B6FED] hover:bg-[#3A56D3] text-white font-semibold transition-all"
                >
                  Install Extension
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#1C2128]/60 border border-white/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-gray-400">Other IDEs</CardTitle>
                <CardDescription className="text-gray-500">Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-3">Planned support:</p>
                <ul className="text-sm text-gray-500 space-y-1 pl-3 list-disc">
                  <li>JetBrains IDEs</li>
                  <li>Vim/NeoVim</li>
                  <li>Sublime Text</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Cards - "What’s Inside" */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">What’s Inside</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: 'Fast Mode', desc: 'Lightning-fast code completion' },
              { icon: Terminal, title: 'CLI Tools', desc: 'Dev terminal automations' },
              { icon: Search, title: 'Semantic Search', desc: 'AI-powered code navigation' },
              { icon: Zap, title: 'Quantum Engine', desc: 'Powered by QNN models' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1C2128] border border-white/10 hover:border-[#4B6FED] hover:shadow-[0_0_20px_#4B6FED33] rounded-xl p-6 flex flex-col items-start h-full justify-between transition-all">
                  <CardHeader className="p-0 space-y-4">
                    <feature.icon className="h-6 w-6 text-[#4B6FED]" />
                    <div>
                      <CardTitle className="text-white text-lg mb-1">{feature.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-400 leading-relaxed">
                        {feature.desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
