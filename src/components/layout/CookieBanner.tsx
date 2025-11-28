"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

type CookieConsent = "accepted" | "refused" | "custom" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsent(savedConsent as CookieConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setConsent("accepted");
    setShowBanner(false);
  };

  const handleRefuseAll = () => {
    localStorage.setItem("cookie-consent", "refused");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setConsent("refused");
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    setConsent("custom");
    setShowBanner(false);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden">
            {!showCustomize ? (
              /* Main Banner */
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      Nous utilisons des cookies
                    </h3>
                    <p className="text-neutral-600 font-body text-sm mb-4">
                      Nous utilisons des cookies pour ameliorer votre experience sur notre site,
                      analyser notre trafic et personnaliser notre contenu. En cliquant sur
                      &quot;Accepter&quot;, vous consentez a l&apos;utilisation de tous les cookies.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-2.5 rounded-lg transition-colors"
                      >
                        Accepter
                      </button>
                      <button
                        onClick={() => setShowCustomize(true)}
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-body font-medium px-6 py-2.5 rounded-lg transition-colors"
                      >
                        Personnaliser
                      </button>
                      <button
                        onClick={handleRefuseAll}
                        className="text-neutral-500 hover:text-neutral-700 font-body font-medium px-4 py-2.5 transition-colors"
                      >
                        Refuser
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Customize Panel */
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900">
                    Personnaliser les cookies
                  </h3>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5 text-neutral-500" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary */}
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900">
                        Cookies necessaires
                      </h4>
                      <p className="text-sm text-neutral-500">
                        Essentiels au fonctionnement du site
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-accent rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900">
                        Cookies analytiques
                      </h4>
                      <p className="text-sm text-neutral-500">
                        Nous aident a comprendre comment vous utilisez le site
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? "bg-accent justify-end" : "bg-neutral-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900">
                        Cookies marketing
                      </h4>
                      <p className="text-sm text-neutral-500">
                        Utilises pour la publicite ciblee
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? "bg-accent justify-end" : "bg-neutral-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSaveCustom}
                    className="bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Enregistrer mes preferences
                  </button>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="text-neutral-500 hover:text-neutral-700 font-body font-medium px-4 py-2.5 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
