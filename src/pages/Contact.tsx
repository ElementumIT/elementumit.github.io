import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Public reCAPTCHA v2 site key (client-side by design), carried over from the Angular site.
const SITE_KEY = "6LertM0fAAAAAPrV3NZS91WT3f4ym6Voe28iL5iI";

export default function Contact() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <div>
      <h1>Contact</h1>
      <h4>To avoid spam, I have to protect my email address with a captcha. Please prove you are not a robot.</h4>
      <ReCAPTCHA sitekey={SITE_KEY} onChange={(t) => setToken(t)} />
      {token && (
        <div className="contact-box">
          <h2>Elementum I.T. Consulting Contact Info</h2>
          <p>Thank you!</p>
          <p>
            Please read the disclaimer about <a href="/services">&quot;no fixed-bid projects&quot;</a>.
          </p>
          <p>If that doesn&apos;t scare you off, please email Brett at bolges@elementumit.com.</p>
        </div>
      )}
    </div>
  );
}
