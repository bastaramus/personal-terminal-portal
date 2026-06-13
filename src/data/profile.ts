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
