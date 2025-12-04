import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Download, Upload } from "lucide-react";

export function SpeedTestSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [testing, setTesting] = useState(false);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);
  const [ping, setPing] = useState(0);

  const runTest = () => {
    setTesting(true);
    setDownload(0);
    setUpload(0);
    setPing(0);

    // Simulate speed test
    const interval = setInterval(() => {
      setDownload((prev) => {
        const next = prev + Math.random() * 50;
        return next > 485 ? 485 + Math.random() * 15 : next;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setDownload(487);
      
      const uploadInterval = setInterval(() => {
        setUpload((prev) => {
          const next = prev + Math.random() * 30;
          return next > 180 ? 180 + Math.random() * 10 : next;
        });
      }, 100);

      setTimeout(() => {
        clearInterval(uploadInterval);
        setUpload(186);
        setPing(12);
        setTesting(false);
      }, 1500);
    }, 2000);
  };

  return (
    <section className="py-20 px-6 bg-charcoal" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-primary-foreground mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Speed Test</span>
          <h2 className="heading-lg mt-4">Test Your Connection</h2>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            See how fast your current internet is, or preview what speeds you could get with HubNet fiber.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-charcoal-light rounded-4xl p-8 md:p-12"
        >
          {/* Speed Gauge */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              {/* Background circle */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--charcoal))"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--sunny-yellow))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={283}
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: testing ? 283 - (download / 500) * 283 : download > 0 ? 283 - (download / 500) * 283 : 283 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {testing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Activity size={32} className="text-accent" />
                  </motion.div>
                ) : (
                  <>
                    <span className="text-4xl font-black text-primary-foreground">
                      {download > 0 ? Math.round(download) : "—"}
                    </span>
                    <span className="text-sm text-primary-foreground/60">Mbps</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-charcoal rounded-2xl">
              <Download size={20} className="text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">
                {download > 0 ? Math.round(download) : "—"}
              </p>
              <p className="text-xs text-primary-foreground/60">Download Mbps</p>
            </div>
            <div className="text-center p-4 bg-charcoal rounded-2xl">
              <Upload size={20} className="text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">
                {upload > 0 ? Math.round(upload) : "—"}
              </p>
              <p className="text-xs text-primary-foreground/60">Upload Mbps</p>
            </div>
            <div className="text-center p-4 bg-charcoal rounded-2xl">
              <Activity size={20} className="text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">
                {ping > 0 ? ping : "—"}
              </p>
              <p className="text-xs text-primary-foreground/60">Ping ms</p>
            </div>
          </div>

          <Button
            variant="accent"
            size="lg"
            className="w-full"
            onClick={runTest}
            disabled={testing}
          >
            {testing ? "Testing..." : "Run Speed Test"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
