import React from "react";

const termsText = [
  {
    heading: "1. Parties and scope",
    content: (
      <>
        These Terms & Conditions (“Terms”) are a legally binding agreement between you (the “User”, “you”, “your”) and <b>Mentamind Technologies Private Limited</b> (“Mentamind”, “we”, “us”, “our”), a company incorporated in India with registered office at 803, Mahabir Tower, Opp. JD High Street Mall, Main Road, Ranchi – 834001, Jharkhand. These Terms govern your access to and use of Mentamind’s website, mobile applications, chatbot, platform and related services (collectively “Services”), including AI-based tools, symptom trackers, virtual consultations with licensed professionals, and any content, features, or functionality offered therein.
        <br />
        <br />
        By accessing or using the Services you accept and agree to these Terms and our Privacy Policy. If you do not agree, do not use the Services.
      </>
    ),
  },
  {
    heading: "2. Definitions",
    content: (
      <>
        <b>Services:</b> All products and features provided by Mentamind (website, apps, chatbot, teleconsultations, subscription plans, analytics, etc.).<br />
        <b>User Content:</b> Any content you submit to the Service (messages, uploads, journals, reviews).<br />
        <b>Clinician / Practitioner:</b> Licensed healthcare professional who may deliver teleconsultation services via our platform.<br />
        <b>Subscription:</b> Any paid or trial plan described on the platform.
      </>
    ),
  },
  {
    heading: "3. Eligibility",
    content: (
      <>
        You must be at least 18 years old to use the Services unless lawful parental/guardian consent is provided and verified. By using the Services you represent and warrant that you meet the eligibility criteria and have authority to enter into these Terms.
      </>
    ),
  },
  {
    heading: "4. Account registration",
    content: (
      <>
        <b>4.1</b> You must provide accurate, current and complete information when registering.<br />
        <b>4.2</b> You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use.<br />
        <b>4.3</b> We may suspend or terminate accounts for breach, fraudulent activity, or law enforcement requests.
      </>
    ),
  },
  {
    heading: "5. Description of Services & clinical relationship",
    content: (
      <>
        <b>5.1</b> Mentamind provides digital mental wellness tools, AI-driven insights, and access to licensed clinicians for teleconsultations. The availability of clinicians, appointment times, and service scope are subject to change.<br />
        <b>5.2</b> Use of the Services does not create or replace an ongoing doctor–patient relationship except where explicitly stated and agreed between you and the clinician. Our AI tools provide supportive information and are not a substitute for professional clinical judgment.<br />
        <b>5.3</b> Clinical care delivered via teleconsultation follows applicable Indian telemedicine guidelines and professional standards; clinicians remain professionally responsible for their medical decisions and records. Teleconsultations are subject to the Telemedicine Practice Guidelines of India.
      </>
    ),
  },
  {
    heading: "6. User obligations & prohibited conduct",
    content: (
      <>
        <b>6.1</b> You agree to: (a) use the Services lawfully, (b) provide truthful information, (c) respect clinician instructions, and (d) seek emergency care when necessary.<br />
        <b>6.2</b> Prohibited conduct includes, but is not limited to: impersonation, uploading illegal content, attempts to reverse-engineer the Service, interfering with other users’ access, using the Service to harass or defame, or using the Service for unlawful commercial purposes. Breach may result in termination and legal action.
      </>
    ),
  },
  {
    heading: "7. Payments, subscriptions & refunds",
    content: (
      <>
        <b>7.1 Fees:</b> Certain Services are chargeable. Fees, billing cycles, and trial terms will be displayed at point-of-purchase. You authorize us (and our third-party payment processors) to charge your chosen payment method.<br />
        <b>7.2 Refunds:</b> Refund policies vary by product. Where a refund is requested, we will evaluate under our refund policy and applicable consumer laws (including Consumer Protection Act, 2019).<br />
        <b>7.3 Taxes:</b> Prices exclude applicable taxes; you are responsible for any taxes as required by law.<br />
        <b>7.4 Payment processors:</b> We may use third-party payment gateways; their terms and privacy notices also apply.
      </>
    ),
  },
  {
    heading: "8. Intellectual Property",
    content: (
      <>
        <b>8.1</b> All intellectual property rights in the Services — platform code, content, designs, graphics, brand, algorithms, models, and related materials — are owned or licensed by Mentamind.<br />
        <b>8.2</b> You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms. You may not reproduce, adapt, distribute, or create derivative works except as expressly permitted.<br />
        <b>8.3</b> If you provide feedback or suggestions, you grant Mentamind a worldwide, perpetual, irrevocable, royalty-free license to use them.
      </>
    ),
  },
  {
    heading: "9. User Content & moderation",
    content: (
      <>
        <b>9.1</b> By submitting User Content you grant Mentamind a worldwide, royalty-free license to use, reproduce, adapt, publish and display such content to provide and improve Services.<br />
        <b>9.2</b> You represent and warrant that you own or have the necessary rights to submit the content and that the content does not violate any law or third-party rights.<br />
        <b>9.3</b> Mentamind may, but is not obligated to, review, remove or disable access to User Content that violates these Terms or applicable laws.
      </>
    ),
  },
  {
    heading: "10. Confidentiality, data protection & medical records",
    content: (
      <>
        <b>10.1</b> Your use of Services is governed by our Privacy Policy. Mentamind collects, stores and processes personal and sensitive personal data (including mental-health records) in accordance with the Digital Personal Data Protection Act, 2023 and related rules.<br />
        <b>10.2</b> Sensitive mental-health data will be treated with highest confidentiality; access is limited to authorised clinical staff and essential personnel. This approach aligns with the Information Technology SPDI principles and professional confidentiality obligations.<br />
        <b>10.3</b> The Mental Healthcare Act recognizes the right to confidentiality of persons with mental illness; we will only release mental-health information in accordance with that Act, explicit consent, or as required by law.<br />
        <b>10.4</b> For teleconsultations we follow the Telemedicine Practice Guidelines with respect to identification, consent, record keeping and prescription norms.<br />
        <b>10.5</b> You agree that Mentamind may retain and use de-identified/aggregated data for research, improvement and analytics.
      </>
    ),
  },
  {
    heading: "11. Disclaimers & medical limits",
    content: (
      <>
        <b>11.1</b> The Services (including AI outputs and content) are provided “as is” and for informational/supportive purposes only. They are not guaranteed to be accurate, complete, or current for all clinical situations.<br />
        <b>11.2</b> Mentamind is NOT responsible for misinterpretation of information or clinical decisions made by users or clinicians outside the platform context. In emergencies (e.g., risk of harm, suicidal ideation), you must contact local emergency services immediately — the Service is not a crisis-response tool.
      </>
    ),
  },
  {
    heading: "12. Limitation of liability",
    content: (
      <>
        <b>12.1</b> TO THE MAXIMUM EXTENT PERMITTED BY LAW, MENTAMIND AND ITS DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES AND SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR SPECIAL DAMAGES ARISING OUT OF OR RELATING TO THE SERVICES.<br />
        <b>12.2</b> MENTAMIND’S AGGREGATE LIABILITY FOR DIRECT DAMAGES ARISING FROM OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO MENTAMIND IN THE 12 MONTHS PRECEDING THE CLAIM (OR, IF NONE, INR 10,00,000). Nothing in this clause is intended to limit liability for death or personal injury resulting from negligence, fraudulent misrepresentation, or other liabilities which cannot be limited under applicable law.
      </>
    ),
  },
  {
    heading: "13. Indemnity",
    content: (
      <>
        You agree to indemnify, defend and hold harmless Mentamind and its personnel from and against all claims, damages, losses, liabilities and expenses (including reasonable legal fees) arising from your breach of these Terms, violation of law, or misuse of the Services.
      </>
    ),
  },
  {
    heading: "14. Suspension & termination",
    content: (
      <>
        <b>14.1</b> We may suspend or terminate your access for breach, illegal activity, or at our discretion (with notice where practicable).<br />
        <b>14.2</b> Upon termination, provisions that by their nature survive termination (e.g., IP ownership, liability limitation, indemnity, governing law) will continue in force.
      </>
    ),
  },
  {
    heading: "15. Changes to Services & Terms",
    content: (
      <>
        We may modify Services or these Terms. Material changes will be notified via email or prominent notice on the Service before they take effect. Continued use after notice constitutes acceptance. You should review the Terms periodically.
      </>
    ),
  },
  {
    heading: "16. Governing law & dispute resolution",
    content: (
      <>
        <b>16.1</b> These Terms are governed by the laws of India.<br />
        <b>16.2</b> Any dispute shall first be attempted to be resolved through mediation/conciliation. If unresolved within 30 days, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, seat Ranchi, with a sole arbitrator appointed by mutual agreement (or by the appointing authority if no agreement). The arbitration will be in English and the award shall be final and binding. This clause does not bar either party from seeking interim injunctive relief in a court of competent jurisdiction.<br />
        <b>16.3</b> You may also approach consumer forums or other statutory authorities for relief as permitted by law (e.g., Consumer Protection Act).
      </>
    ),
  },
  {
    heading: "17. Force majeure",
    content: (
      <>
        Neither party will be liable for delay or failure to perform due to events beyond reasonable control (acts of God, war, government action, pandemics, strikes, cybersecurity incidents), provided the affected party notifies the other and takes reasonable steps to mitigate.
      </>
    ),
  },
  {
    heading: "18. Third-party services & links",
    content: (
      <>
        We may integrate or link to third-party services. Your use of third-party services is governed by their terms and privacy policies; Mentamind is not liable for third-party practices.
      </>
    ),
  },
  {
    heading: "19. Grievance officer & contact",
    content: (
      <>
        In accordance with applicable Indian rules, we have designated a Grievance Officer to handle complaints and data-related requests:<br />
        <b>Grievance Officer:</b> Ayush Kumar<br />
        <b>Email:</b> <a href="mailto:support@mentamind.in" className="text-primary underline">support@mentamind.in</a><br />
        <b>Phone:</b> +91-7488922614<br />
        <b>Postal address:</b> 803 Mahabir Tower, Opp. JD High Street Mall, Main Road, Ranchi – 834001, Jharkhand, India.<br />
        We will acknowledge grievance communications promptly and attempt to resolve them in accordance with applicable timelines.
      </>
    ),
  },
  {
    heading: "20. Severability & entire agreement",
    content: (
      <>
        If any provision is held invalid or unenforceable, the remaining provisions remain in force. These Terms, together with the Privacy Policy and any ordering documentation, constitute the entire agreement between you and Mentamind regarding the Services.
      </>
    ),
  },
  {
    heading: "21. Miscellaneous",
    content: (
      <>
        <b>21.1 Assignment:</b> You may not assign these Terms without Mentamind’s prior written consent; Mentamind may assign to an affiliate or in connection with a merger/acquisition.<br />
        <b>21.2 Notices:</b> We may send notices by email or by posting on the platform. Legal notices to Mentamind should be sent to the address above.<br />
        <b>21.3 No waiver:</b> Failure to enforce a right is not a waiver of that right.
      </>
    ),
  },
  {
    heading: "Key legal citations (most relevant)",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>
            <b>Digital Personal Data Protection Act, 2023</b> (governs digital personal data processing and data-fiduciary obligations).
          </li>
          <li>
            <b>Information Technology (Reasonable Security Practices & Sensitive Personal Data or Information) Rules, 2011 (SPDI)</b> — for handling sensitive personal data.
          </li>
          <li>
            <b>Mental Healthcare Act, 2017</b> — confidentiality, restrictions on releasing mental-health information and patient rights.
          </li>
          <li>
            <b>Telemedicine Practice Guidelines, 2020</b> — standards for teleconsultations, consent and record-keeping.
          </li>
          <li>
            <b>Consumer Protection Act, 2019</b> — consumer rights and remedies for defective or deficient services.
          </li>
        </ul>
      </>
    ),
  },
];

const TermsPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-sapphire/10 py-10">
      <div className="w-full max-w-3xl glass border border-glass-border rounded-2xl shadow-xl p-8 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="bg-black from-primary to-sapphire p-3 rounded-full shadow-lg mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 0 1 7 7v3.5a2.5 2.5 0 0 1-2 2.45V17a5 5 0 0 1-10 0v-2.05A2.5 2.5 0 0 1 5 12.5V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v3.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V9a5 5 0 0 0-5-5Zm-3 13a3 3 0 0 0 6 0v-2H9v2Z"/></svg>
          </div>
          <h1 className="text-2xl font-bold text-center text-black">Terms &amp; Conditions</h1>
          <p className="text-xs text-black/60 mt-1 text-center">
            Mentamind Technologies Private Limited<br />
            <span className="font-medium">Effective date:</span> 21st January 2025 &nbsp;|&nbsp; <span className="font-medium">Last updated:</span> 5th July 2025
          </p>
        </div>
        <div className="mt-24 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {termsText.map((section, idx) => (
            <div key={section.heading} className="mb-7">
              <h2 className="font-semibold text-lg text-primary mb-2">{section.heading}</h2>
              <div className="text-black/80 text-sm leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #6a8cff 0%, #00c9a7 100%);
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default TermsPage;