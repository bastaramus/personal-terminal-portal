export const profile = {
  name: { first: "DMYTRO", last: "KHOMENKO" },
  title: "DEVOPS ENGINEER",
  tags: ["AWS CLOUD", "HYBRID INFRA", "TEAM LEAD"],
  bio: "DevOps engineer and team lead with 10+ years of experience designing, automating, and operating infrastructure at scale. Core focus: AWS cloud, hybrid AWS + VMware vSphere environments, Kubernetes, Terraform, Ansible, and the full DevOps toolchain. I build systems that are observable, reproducible, and resilient — and teams that can own them.",
  location: "Kyiv, Ukraine",
  status: "AVAILABLE FOR OPPORTUNITIES",
  focus: "AWS / Hybrid Infra / Kubernetes / IaC",
  stats: [
    { label: "YEARS EXP", value: "10+" },
    { label: "PIPELINES", value: "200+" },
    { label: "CLUSTERS", value: "40+" },
    { label: "COFFEES", value: "∞" },
  ],
  socials: [
    { label: "GitHub", value: "github.com/xomenko", href: "https://github.com/xomenko" },
    { label: "LinkedIn", value: "linkedin.com/in/xomenko", href: "https://linkedin.com/in/xomenko" },
    { label: "Twitter", value: "@xomenko_dev", href: "https://twitter.com/xomenko_dev" },
    { label: "Email", value: "hi@xomenko.com", href: "mailto:hi@xomenko.com" },
  ],
};

export const experience = [
  {
    role: "DevOps Engineer / Team Lead",
    company: "Acme Corp",
    period: "2022 — present",
    desc: "Leading a DevOps team of 6. Architected and operate a hybrid AWS + VMware vSphere platform across multiple regions. Standardised IaC with Terraform + Atlantis, drove full GitOps adoption with ArgoCD, and built CI/CD pipelines serving 50+ dev teams.",
  },
  {
    role: "Senior DevOps Engineer",
    company: "StartupXYZ",
    period: "2019 — 2022",
    desc: "Migrated legacy workloads from on-prem VMware to AWS EKS. Built CI/CD pipelines from scratch with GitHub Actions and ArgoCD. Deployed full observability stack (Prometheus, Grafana, Loki, Jaeger) across distributed microservices. Managed infrastructure as code with Terraform and provisioning with Packer + Ansible.",
  },
  {
    role: "DevOps Engineer",
    company: "Agency Co",
    period: "2015 — 2019",
    desc: "Linux system administration across hybrid on-prem and AWS environments. Automated server provisioning and config management with Ansible. Introduced Docker and the first CI pipelines across 20+ client environments. Managed VMware vSphere clusters and AWS EC2/VPC infrastructure.",
  },
];
