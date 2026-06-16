export const profile = {
  name: { first: "DMYTRO", last: "KHOMENKO" },
  title: "DEVOPS ENGINEER",
  tags: ["DEVOPS ARCHITECT", "PLATFORM ENGINEER", "TEAM LEAD"],
  bio: "From bare-metal servers to cloud-native applications. My background combines hands-on DevOps engineering, platform architecture, and technical leadership. This website is a place to share my experience, projects, and technical notes on building reliable infrastructures, CI/CD processes, and scalable DevOps platforms.",
  location: "Wroclaw, Poland",
  status: "AVAILABLE FOR OPPORTUNITIES",
  focus: "AWS / Hybrid Infra / Kubernetes / IaC",
  socials: [
    { label: "LinkedIn", value: "linkedin.com/in/dmytro-khomenko", href: "https://www.linkedin.com/in/dmytro-khomenko-9221031a4" },
    { label: "Telegram", value: "@khomenko_dmytro", href: "https://t.me/khomenko_dmytro" },
    { label: "Email", value: "mail@xomenko.com", href: "mailto:mail@xomenko.com" },
  ],
};

export const experience = [
  {
    role: "DevOps Architect / Team Lead",
    company: "Corsair Gaming, Inc.",
    period: "02/2022 — present",
    desc: "Owned DevOps strategy and execution across the entire R&D department covering web, desktop, mobile, and firmware. Built and led an international DevOps team of 4 engineers. Developed an internal developer platform for CI/CD, binary signing, artifact management, and infrastructure automation. Managed Kubernetes/GitOps for web services, SRE practices, 20+ developer-facing services with Keycloak SSO, and the full R&D infrastructure budget.",
  },
  {
    role: "DevOps Engineer",
    company: "Checkmarx",
    period: "10/2020 — 07/2025",
    desc: "Built automated self-service VM provisioning for hybrid VMware + AWS EC2 at scale (hundreds of VMs daily). Designed governance for 50+ AWS accounts within a single AWS Organization. Developed large reusable Helm charts, improved Kubernetes deployment standards, and modernized CI/CD pipelines with GitHub Actions and CircleCI. Contributed to critical incident response and supported open-source project transitions.",
  },
  {
    role: "DevOps Engineer",
    company: "DevelopEx Software",
    period: "2018 — 2022",
    desc: "Joined as the first DevOps engineer and introduced DevOps practices across dozens of projects spanning web, mobile, desktop, firmware, and IoT. Provisioned and configured AWS environments for client projects. Built a structured mentorship program for incoming DevOps engineers and helped establish cross-functional delivery standards.",
  },
  {
    role: "Head of IT Department",
    company: "DevelopEx Software",
    period: "2013 — 2018",
    desc: "Built and led a team of 6 system administrators in a rapidly growing company. Scaled on-premises infrastructure to 3 server racks with 20 physical servers and designed a hybrid AWS cloud environment. Defined IT infrastructure strategy, roadmap, and operational standards. Established monitoring, backup, DR, and incident response processes.",
  },
  {
    role: "NOC Engineer",
    company: "CYFRA Internet Service Provider",
    period: "2012 — 2013",
    desc: "Monitored production network infrastructure and troubleshot connectivity, routing, switching, and performance issues at ISP scale. Gained hands-on experience with provider-grade network equipment and operational practices around security, access control, and incident handling.",
  },
  {
    role: "Support Engineer",
    company: "UKR.NET",
    period: "2011 — 2012",
    desc: "Managed on-premises FreeBSD servers, ZFS file systems, Postfix mail servers, and Apache web servers for one of Ukraine's largest internet portals. Built a strong foundation in Unix system administration, networking, and production infrastructure reliability.",
  },
];
