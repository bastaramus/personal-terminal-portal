export const skillCategories: { label: string; skills: string[] }[] = [
  { label: "CLOUD", skills: ["AWS", "EC2", "EKS", "RDS", "S3", "VPC", "IAM", "CloudWatch"] },
  { label: "VIRTUALISATION", skills: ["VMware vSphere", "ESXi", "vCenter", "NSX", "Packer"] },
  { label: "IaC & CONFIG", skills: ["Terraform", "Atlantis", "Ansible", "Pulumi", "CloudFormation"] },
  { label: "CONTAINERS", skills: ["Kubernetes", "Docker", "Helm", "ArgoCD", "containerd"] },
  { label: "CI/CD", skills: ["GitHub Actions", "GitLab CI", "Jenkins", "TeamCity"] },
  { label: "OBSERVABILITY", skills: ["Prometheus", "Grafana", "Loki", "Jaeger", "OpenTelemetry"] },
  { label: "SCRIPTING", skills: ["Bash", "Python", "Go"] },
];

export const certifications = [
  { label: "AWS Solutions Architect Pro", year: "2023" },
  { label: "CKA — Certified Kubernetes Admin", year: "2022" },
  { label: "AWS DevOps Engineer Pro", year: "2021" },
];
