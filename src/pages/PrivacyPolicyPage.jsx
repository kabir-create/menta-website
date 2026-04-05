import React from "react";

const privacySections = [
  {
    heading: "1. Introduction & Scope",
    content: (
      <>
        Mentamind Technologies Private Limited (“Mentamind”, “we”, “us”, “our”) is committed to protecting the privacy, confidentiality and security of personal data collected, stored, processed and shared in connection with our mental-health platform, website, mobile applications, chatbot, analytics and related services (collectively “Services”). This Privacy Policy explains what personal data we collect, how we use it, who we share it with, and the legal rights of individuals under applicable Indian law. This Policy applies to all visitors, users, patients, clients and practitioners who access or use our Services in India.
      </>
    ),
  },
  {
    heading: "2. Legal framework (India)",
    content: (
      <>
        Our processing of personal data is governed by applicable Indian laws, including but not limited to:
        <ul className="list-disc ml-6 mt-2">
          <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
          <li>Information Technology Act, 2000 and SPDI Rules, 2011</li>
          <li>Mental Healthcare Act, 2017</li>
          <li>Telemedicine Practice Guidelines</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. Definitions",
    content: (
      <>
        <b>Personal Data:</b> Any information that relates to an identified or identifiable individual.<br />
        <b>Sensitive Personal Data:</b> Data relating to health (including mental-health), medical records, sexual orientation, biometric data, etc.<br />
        <b>Data Principal:</b> The individual to whom the personal data relates.<br />
        <b>Data Fiduciary:</b> The entity (Mentamind) that determines the purpose and means of processing personal data.<br />
        <b>Data Processor:</b> Third-party providers engaged by Mentamind to process personal data on our behalf.
      </>
    ),
  },
  {
    heading: "4. Categories of data we collect",
    content: (
      <>
        We collect only what is reasonably necessary for the purposes described in this Policy and the Services:
        <ul className="list-disc ml-6 mt-2">
          <li>
            <b>Identity & contact:</b> Name, date of birth/age, gender, contact number, email address, postal address, emergency contact / nominated representative.
          </li>
          <li>
            <b>Sensitive health & therapy data (mental-health):</b> Clinical history, symptoms, diagnosis codes/notes, therapy session notes, psychological assessments, medication (if shared), suicide/self-harm risk data, progress tracking, chat transcripts, audio/video consultation recordings (if consented), and other data you voluntarily provide during care.
          </li>
          <li>
            <b>Technical and usage:</b> Device identifiers, IP address, browser type, operating system, app usage logs, cookies, analytics and location info (if permitted).
          </li>
          <li>
            <b>Payment & billing (if applicable):</b> Payment instrument tokens (not full card numbers), billing address, invoicing information.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Purposes for processing",
    content: (
      <>
        We process personal data for the following lawful, specified purposes:
        <ul className="list-disc ml-6 mt-2">
          <li>To register users and create/maintain accounts; authentication and account security.</li>
          <li>To provide mental-health services (AI-driven symptom tracking, personalised recommendations, online therapy/consultations, scheduling and follow-ups).</li>
          <li>To enable clinician access to medical records and support continuity of care (only with explicit consent or when otherwise permitted by law).</li>
          <li>To operate, monitor, maintain and improve Services, product analytics and research (de-identified/aggregated where possible).</li>
          <li>To process payments and provide receipts.</li>
          <li>To comply with legal/regulatory obligations, respond to lawful requests by courts, regulators, emergency responders, or to protect the vital interests of a person.</li>
          <li>To detect, investigate and prevent fraud, abuse and security incidents.</li>
        </ul>
        We will not use personal data for unrelated secondary purposes without additional consent unless permitted by law.
      </>
    ),
  },
  {
    heading: "6. Lawful basis & consent",
    content: (
      <>
        For Sensitive Personal Data (mental-health data) we obtain explicit, informed consent prior to collection or processing, in line with Indian rules on SPDI and DPDP requirements. You have the right to withdraw consent (subject to legal and clinical limitations); withdrawal will not affect processing that occurred prior to withdrawal but may limit available Services.
      </>
    ),
  },
  {
    heading: "7. How we collect data",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Directly from you when you register, use the Services, complete assessments, attend consultations, upload documents, or communicate with clinicians/chatbot.</li>
          <li>Automatically via cookies, logs, device metadata and analytics technologies.</li>
          <li>From third parties (with consent) — referral partners, labs, other healthcare providers, or consent managers.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "8. Handling of particularly sensitive mental-health data",
    content: (
      <>
        Access to identifiable mental-health records is strictly limited to authorised clinical staff and authorised personnel on a need-to-know basis.<br />
        We apply strong technical and organisational safeguards. The Mental Healthcare Act 2017 recognises the right to confidentiality of mental-health records; we honour that right and share records only with explicit consent or when mandated by law.
      </>
    ),
  },
  {
    heading: "9. Data sharing & third parties",
    content: (
      <>
        We do not sell personal data. We may share personal data in the following situations:
        <ul className="list-disc ml-6 mt-2">
          <li>With your explicit consent (e.g., sharing therapy notes with another clinician or family member).</li>
          <li>Service providers / processors who support platform hosting, analytics, payments, communications, authentication and medical record systems — always under written contracts and confidentiality obligations.</li>
          <li>Legal & safety disclosures: where required by law, court orders, or to prevent imminent physical harm (emergency exceptions).</li>
          <li>Corporate transactions: in a merger, sale or reorganisation — with contractual safeguards.</li>
        </ul>
        Transfers outside India (cross-border) will be undertaken only as permitted by applicable law and after implementing required safeguards, and we will inform you where required.
      </>
    ),
  },
  {
    heading: "10. Data retention & deletion",
    content: (
      <>
        We retain personal data only as long as necessary for the purpose of processing, to provide Services, to meet legal or regulatory obligations, or to resolve disputes. For mental-health records, we will retain records in accordance with applicable healthcare and professional guidelines and to ensure continuity of care. Where you request deletion, we will delete or de-identify your personal data unless retention is required by law or necessary for legitimate business purposes; in such cases we will inform you of the reason.
      </>
    ),
  },
  {
    heading: "11. Security measures",
    content: (
      <>
        We implement industry-standard administrative, technical and physical safeguards to protect personal data, including (but not limited to):
        <ul className="list-disc ml-6 mt-2">
          <li>Encryption in transit (TLS) and encryption at rest; keys managed under strict controls.</li>
          <li>Role-based access control and least-privilege principles for staff access.</li>
          <li>Multi-factor authentication for sensitive system access.</li>
          <li>Regular vulnerability scanning, penetration testing and security audits.</li>
          <li>Secure data-centre / cloud provider controls and contractual assurances with processors.</li>
          <li>Employee training on data protection and confidentiality.</li>
        </ul>
        We continuously review and strengthen safeguards and will notify affected individuals and authorities as required by law in the event of a personal data breach.
      </>
    ),
  },
  {
    heading: "12. Cookies & tracking",
    content: (
      <>
        We use cookies and similar technologies to operate the Services, remember preferences, provide analytics and marketing. You can control cookies through your browser and device settings, but disabling cookies may limit some Service functionality.
      </>
    ),
  },
  {
    heading: "13. Children & minors",
    content: (
      <>
        Our Services are not intended for minors under 18 except where lawful parental/guardian consent has been obtained. If we become aware that we have collected personal data of a minor without appropriate consent, we will take steps to delete such data promptly.
      </>
    ),
  },
  {
    heading: "14. Rights of the Data Principal (you)",
    content: (
      <>
        Under applicable law you have the right to:
        <ul className="list-disc ml-6 mt-2">
          <li><b>Access:</b> request information about processing and a copy of personal data we hold.</li>
          <li><b>Correction:</b> ask us to correct inaccurate or incomplete data.</li>
          <li><b>Erasure/Deletion:</b> request deletion (subject to legal and clinical retention obligations).</li>
          <li><b>Withdraw consent:</b> withdraw previously given consent for processing.</li>
          <li><b>Object & Restrict:</b> ask us to restrict or object to processing for certain purposes where provided by law.</li>
          <li><b>Portability:</b> obtain your personal data in a structured, commonly used and machine-readable format where technically feasible.</li>
        </ul>
        To exercise these rights, contact us at the Grievance Officer address below. We will respond in accordance with applicable timelines and any lawful exceptions.
      </>
    ),
  },
  {
    heading: "15. Grievance redressal / Data protection contact",
    content: (
      <>
        In accordance with Indian law and IT Rules, we have appointed a Grievance Officer:<br />
        <b>Grievance Officer:</b> Ayush Kumar<br />
        <b>Email:</b> <a href="mailto:support@mentamind.in" className="text-primary underline">support@mentamind.in</a><br />
        <b>Phone:</b> +91-7488922614<br />
        <b>Postal address:</b> Mentamind Technologies Pvt. Ltd., 803 Mahabir Tower, Opp. JD High Street Mall, Main Road, Ranchi – 834001, Jharkhand, India.<br />
        We will acknowledge complaints promptly and address them in an expeditious manner.
      </>
    ),
  },
  {
    heading: "16. Data breach & incident response",
    content: (
      <>
        If a security incident or breach occurs that poses a risk to personal data, Mentamind will:
        <ul className="list-disc ml-6 mt-2">
          <li>Contain and investigate the incident.</li>
          <li>Notify affected individuals and the relevant authority (including the Data Protection Board) as required by the DPDP Act and other applicable law.</li>
          <li>Take remedial actions to mitigate harm and prevent recurrence.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "17. Third-party links and integrations",
    content: (
      <>
        Our Services may link to third-party websites, tools or partner services. This Policy does not apply to third parties; review their privacy notices before sharing personal data. We are not responsible for third-party practices.
      </>
    ),
  },
  {
    heading: "18. Anonymised & aggregated data",
    content: (
      <>
        Where feasible we de-identify or aggregate personal data (e.g., for research, analytics or product improvement). De-identified data cannot reasonably be used to re-identify an individual and is not subject to this Policy to the extent de-identified consistent with applicable law.
      </>
    ),
  },
  {
    heading: "19. Cross-border transfers & localization",
    content: (
      <>
        Where personal data is transferred outside India, we will do so only under appropriate safeguards and in compliance with applicable law (including any DPDP Act rules or government directions on cross-border flows or localization that may apply). If local regulations require localized storage or additional safeguards, we will comply and inform users accordingly.
      </>
    ),
  },
  {
    heading: "20. Changes to this Policy",
    content: (
      <>
        We may update this Policy to reflect changes in legal/regulatory requirements or our Services. We will publish the revised Policy on our website/app with the “Last updated” date. Continued use after the update indicates acceptance.
      </>
    ),
  },
  {
    heading: "21. Disclaimer — clinical & medical limits",
    content: (
      <>
        Mentamind provides mental-health support and tools but does not replace medical diagnosis by a qualified professional. Clinical decisions remain the responsibility of licensed practitioners. Our AI tools provide supportive insights and are not a substitute for direct clinical judgment.
      </>
    ),
  },
  {
    heading: "22. How to contact us",
    content: (
      <>
        For privacy queries, requests and complaints:<br />
        <b>Grievance Officer:</b> Ayush Kumar<br />
        <b>Email:</b> <a href="mailto:support@mentamind.in" className="text-primary underline">support@mentamind.in</a><br />
        <b>Phone:</b> +91-7488922614<br />
        <b>Postal address:</b> 803 Mahabir Tower, Opp. JD High Street Mall, Main Road, Ranchi – 834001, Jharkhand, India.<br />
        If you remain dissatisfied after contacting our Grievance Officer, you may approach the Data Protection Board or relevant authorities under the DPDP Act.
      </>
    ),
  },
  {
    heading: "Acknowledgements & legal citations (key references)",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>
            <b>Digital Personal Data Protection Act, 2023</b> (Ministry of Electronics & IT — official text).
          </li>
          <li>
            <b>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).</b>
          </li>
          <li>
            <b>Mental Healthcare Act, 2017</b> (confidentiality & rights of persons with mental illness).
          </li>
          <li>
            <b>Telemedicine Practice Guidelines</b> (consent & confidentiality in teleconsultations).
          </li>
          <li>
            <b>Commentary / guidance on DPDP, breach notifications and transfer safeguards.</b>
          </li>
        </ul>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-sapphire/10 py-10">
      <div className="w-full max-w-3xl glass border border-glass-border rounded-2xl shadow-xl p-8 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="bg-black from-primary to-sapphire p-3 rounded-full shadow-lg mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 0 1 7 7v3.5a2.5 2.5 0 0 1-2 2.45V17a5 5 0 0 1-10 0v-2.05A2.5 2.5 0 0 1 5 12.5V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v3.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V9a5 5 0 0 0-5-5Zm-3 13a3 3 0 0 0 6 0v-2H9v2Z"/></svg>
          </div>
          <h1 className="text-2xl font-bold text-center text-black">Privacy Policy</h1>
          <p className="text-xs text-black/60 mt-1 text-center">
            Mentamind Technologies Private Limited<br />
            <span className="font-medium">Effective date:</span> 21st January 2025 &nbsp;|&nbsp; <span className="font-medium">Last updated:</span> 5th July 2025
          </p>
        </div>
        <div className="mt-24 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {privacySections.map((section) => (
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

export default PrivacyPolicyPage;