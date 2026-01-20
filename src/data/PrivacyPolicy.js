export const privacyPolicyData = {
  introduction: {
    title: "1. Introduction",
    paragraphs: [
      "Gold & Silver is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services.",
      "By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.",
    ],
    important: {
      title: "Our Commitment:",
      message:
        "We believe in transparency. We will never sell your personal information to third parties, and we only collect data necessary to provide you with excellent service.",
    },
  },
  informationCollection: {
    title: "2. Selling Items",
    text: "Personal Information",
    intro: "We collect information you provide directly to us, including:",
    table: [
      {
        data: "Identity Information",
        examples: "Name, date of birth, government ID",
      },
      {
        data: "Contact Information",
        examples: "Email address, phone number, address",
      },
      {
        data: "Financial Information",
        examples: "Payment card details, bank account info",
      },
      {
        data: "KYC Documents",
        examples: "ID photos, selfie verification",
      },
      {
        data: "Transaction Data",
        examples: "Purchase history, quotes, pawn records",
      },
    ],
    automaticallyCollected: {
      title: "Automatically Collected Information",
      intro:
        "When you use our services, the following information is automatically collected:",
      categories: [
        {
          title: "Device Information",
          items: ["Device type", "Operating system", "Unique identifiers"],
        },
        {
          title: "Log Data",
          items: [
            "IP address",
            "Browser type",
            "Pages visited",
            "Time and date",
          ],
        },
        {
          title: "Location Data",
          items: ["General location based on IP address"],
        },
        {
          title: "Usage Data",
          items: ["Features used", "Actions taken", "Preferences"],
        },
      ],
    },
  },
  howWeUseData: {
    title: "3. How We Use Your Data",
    intro: "We use the information we collect for the following purposes:",
    purposes: [
      "Provide Services: Process transactions, manage your account, and deliver our services",
      "Verify Identity: Complete KYC verification and prevent fraud",
      "Communication: Send quotes, offers, updates, and respond to inquiries",
      "Improve Services: Analyze usage patterns and enhance user experience",
      "Security: Detect and prevent fraudulent or unauthorized activity",
      "Legal Compliance: Comply with applicable laws and regulations",
      "Marketing: Send promotional content (with your consent)",
    ],
    additionalStatement:
      "We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.",
    legalBasis: {
      title: "Legal Basis for Processing",
      intro: "We process your data based on:",
      bases: [
        "Your consent",
        "Performance of a contract with you",
        "Compliance with legal obligations",
        "Our legitimate business interests",
      ],
    },
  },
  informationSharing: {
    title: "4. Information Sharing",
    intro: "We may share your information in the following circumstances:",
    categories: [
      {
        title: "Service Providers",
        intro:
          "We share data with trusted third parties who assist in operating our services, including:",
        items: [
          "Payment processors (Stripe)",
          "Cloud storage providers",
          "Identity verification services",
          "Customer support platforms",
          "Analytics providers",
        ],
      },
      {
        title: "Legal Requirements",
        intro:
          "We may disclose your information if required by law or in response to:",
        items: [
          "Court orders or legal process",
          "Government requests",
          "To protect our rights or safety",
          "To investigate potential violations",
        ],
      },
      {
        title: "Business Transfers",
        intro:
          "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        items: [],
      },
    ],
  },
  dataSecurity: {
    title: "5. Data Security",
    intro:
      "We implement industry-standard security measures to protect your information:",
    measures: [
      {
        title: "Encryption",
        description: "All data is encrypted in transit (TLS/SSL) and at rest",
      },
      {
        title: "Access Controls",
        description: "Limited access to personal data on a need-to-know basis",
      },
      {
        title: "Secure Storage",
        description: "Data stored in secure, certified data centers",
      },
      {
        title: "Regular Audits",
        description: "Periodic security assessments and penetration testing",
      },
      {
        title: "Employee Training",
        description: "Staff trained on data protection best practices",
      },
    ],
    paymentSecurity: {
      title: "Payment Security",
      message:
        "We do not store your complete credit card information. All payment processing is handled securely by Stripe, a PCI-DSS compliant payment processor.",
    },
  },
  dataRetention: {
    title: "6. Data Retention",
    intro: "We retain your personal information for as long as necessary to:",
    reasons: [
      "Provide our services to you",
      "Comply with legal obligations",
      "Resolve disputes and enforce agreements",
      "Meet regulatory requirements",
    ],
    retentionPeriodsTitle: "Retention Periods",
    table: [
      {
        dataType: "Account Information",
        retentionPeriod: "Duration of account + 5 years",
      },
      {
        dataType: "Transaction Records",
        retentionPeriod: "7 years (legal requirement)",
      },
      {
        dataType: "KYC Documents",
        retentionPeriod: "5 years after last transaction",
      },
      {
        dataType: "Marketing Preferences",
        retentionPeriod: "Until consent withdrawn",
      },
      {
        dataType: "Log Data",
        retentionPeriod: "90 days",
      },
    ],
  },
  yourRights: {
    title: "7. Your Rights",
    intro:
      "Depending on your location, you may have the following rights regarding your personal data:",
    rights: [
      {
        title: "Access",
        description: "Request a copy of your personal data we hold",
      },
      {
        title: "Correction",
        description: "Request correction of inaccurate data",
      },
      {
        title: "Deletion",
        description: "Request deletion of your personal data",
      },
      {
        title: "Restriction",
        description: "Request restriction of data processing",
      },
      {
        title: "Portability",
        description: "Receive your data in a portable format",
      },
      {
        title: "Objection",
        description: "Object to certain types of processing",
      },
    ],
    conclusion: {
      text: "To exercise any of these rights, please contact us at",
      email: "privacy@gold&silver.com",
      textAfter: "We will respond to your request within 30 days.",
    },
  },
  cookiesTracking: {
    title: "8. Cookies & Tracking",
    intro:
      "We use cookies and similar technologies to enhance your experience:",
    typesOfCookiesTitle: "Types of Cookies",
    cookieTypes: [
      {
        title: "Essential Cookies",
        description: "Required for basic functionality (login, security)",
      },
      {
        title: "Analytics Cookies",
        description: "Help us understand how users interact with our services",
      },
      {
        title: "Preference Cookies",
        description: "Remember your settings and preferences",
      },
      {
        title: "Marketing Cookies",
        description: "Used to deliver relevant advertisements",
      },
    ],
    managingCookiesTitle: "Managing Cookies",
    managingCookies:
      "You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our services.",
  },
  childrensPrivacy: {
    title: "9. Children's Privacy",
    paragraphs: [
      "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.",
    ],
  },
  internationalTransfers: {
    title: "10. International Transfers",
    intro:
      "Your information may be transferred to and processed in countries other than your own. When we transfer data internationally, we ensure appropriate safeguards are in place, including:",
    safeguards: [
      "Standard contractual clauses",
      "Data processing agreements",
      "Compliance with applicable data protection laws",
    ],
  },
  policyChanges: {
    title: "11. Policy Changes",
    intro:
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by:",
    notificationMethods: [
      "Posting the updated policy on our website",
      'Updating the "Last Updated" date',
      "Sending an email notification for significant changes",
    ],
    conclusion:
      "We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  contactUs: {
    title: "12. Contact Us",
    intro:
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:",
    contactInfo: {
      department: "Gold & Silver Privacy Team",
      text: "We're here to help with any questions or concerns.",
      email: "contabilidadgoldandsilver@gmail.com",
      phone: "+1-809-540-7219 ",
      address: "Lincoln Avenue 850, Plaza Andalucia II Suite 32- A, Piantini. Santo Domingo Dominican Republic 10004 ",
    },
  },
};
